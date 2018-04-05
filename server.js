require('dotenv').config();

import express from 'express';
import path from 'path';
import rollup from './methods/rollup.js';
import reactRender from './methods/react-render.js';
import getNum from './data/num.js';
import favicon from 'serve-favicon';

(async function() {
  const app      = express();
  const port     = 3000;
  let   currData = {
    stuff : {
      num : JSON.parse(await getNum()),
    },
  };

  app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
  app.use('/scripts', rollup);
  app.use('/static', express.static('./static'));
  app.get('/num', async (req, res) => {
    let num = await getNum();
    res
      .status(200)
      .send(num);
  });

  app.get('*',
    (req, res, next) => {
      res.locals.initialStore = currData;
      next();
    },
    reactRender
  );

  app.listen(port);

  setInterval(async () => {
    currData.stuff.num = JSON.parse(await getNum());
  }, 1000);
})();
