import { SWITCH_VALUE } from "./action";

export const initialState = {
  roleType: "",
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_VALUE:
      console.log(action.payload);
      return { ...state, roleType: action.payload };

    default:
      return state;
  }
};
