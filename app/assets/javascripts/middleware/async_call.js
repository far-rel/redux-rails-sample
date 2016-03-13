function callSuccess (type, response) {
  return {
    type: `${type}_SUCCESS`,
    response
  };
}

function callFailed (type, response) {
  return {
    type: `${type}_FAILED`,
    response
  };
}

function callCompleted (type, response) {
  return {
    type: `${type}_COMPLETED`,
    response
  }
}

export default function ({ dispatch }) {
  return next => action => {
    if (!action.async) {
      return next(action);
    }

    return action.repository.perform(action.payload).then((xhr, response) => {
      dispatch(callSuccess(action.type, response));
      dispatch(callCompleted(action.type, response));
    }).catch((xhr, status, response) => {
      dispatch(callFailed(action.type, response));
      dispatch(callCompleted(action.type, response));
    });
  }
};