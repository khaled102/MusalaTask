export const createAction = (type: any, ...argNames: any) => {
  return function (...args: any) {
    let action: any = {type, payload: {}};
    argNames.forEach((arg: any, index: number) => {
      action.payload[argNames[index]] = args[index];
    });
    return action;
  };
};
export const createActionSet = (actionName: string) => ({
  PENDING: `${actionName}_PENDING`,
  SUCCESS: `${actionName}_SUCCESS`,
  ERROR: `${actionName}_ERROR`,
  CLEAR: `${actionName}_CLEAR`,
  ACTION: actionName,
});
