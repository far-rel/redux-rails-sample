export default function (conf, initialState) {
  return function (state = initialState, action) {
    let callback = conf[action.type];
    if (typeof(callback) === 'undefined') {
      return state;
    } else {
      return callback(state, action);
    }
  }
};
