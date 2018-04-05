import rollup from 'rollup-middleware';
  import babel    from 'rollup-plugin-babel';
  import resolve  from 'rollup-plugin-node-resolve';
  import commonjs from 'rollup-plugin-commonjs';
  import replace  from 'rollup-plugin-replace';
  import uglify   from 'rollup-plugin-uglify';

let plugins = [
  replace({
    'process.env.NODE_ENV' : JSON.stringify('production'),
  }),

  babel({
    exclude : 'node_modules/**',
    presets : ['react'],
  }),

  resolve({
    preferBuiltins : true,
  }),

  commonjs({
    namedExports : {
      'node_modules/react-dom/index.js' : [
        'hydrate',
      ],
      'node_modules/react/index.js' : [
        'Children',
        'Component',
        'createElement',
      ],
    },
    include : 'node_modules/**',
    modules : false,
  }),
];

if (process.env.ENVIRONMENT === 'production') {
  plugins.push(uglify());
}

export default rollup({
  rollup : {
    plugins,
  },

  generate : {
    format : 'iife'
  },

  prefix : 'src',
});
