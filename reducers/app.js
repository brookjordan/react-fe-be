let initialState = {
  stuff : {
    num : 'Brook',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'set : stuff - num':
      state.stuff = { num : action.to };
      break;
    default:
      return state;
  }

  return Object.assign({}, state);
};
