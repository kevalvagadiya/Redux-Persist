export const SWITCH_VALUE = "SWITCH_VALUE";

export const switchRole = (data) => {
  return {
    type: SWITCH_VALUE,
    payload: data,
  };
};
