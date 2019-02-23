import { RECEIVE_PSP_PAGE } from "../actions/psp";

export default (state = "", { type, text = "" }) => {
  switch (type) {
    case RECEIVE_PSP_PAGE:
      return text;
    default:
      return state;
  }
};