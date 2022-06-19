export const createAction = (type, ...argNames) => {
  return function (...args) {
    let action = {type, payload: {}};
    argNames.forEach((arg, index) => {
      action.payload[argNames[index]] = args[index];
    });
    return action;
  };
};
export const createActionSet = actionName => ({
  PENDING: `${actionName}_PENDING`,
  SUCCESS: `${actionName}_SUCCESS`,
  ERROR: `${actionName}_ERROR`,
  CLEAR: `${actionName}_CLEAR`,
  ACTION: actionName,
});
