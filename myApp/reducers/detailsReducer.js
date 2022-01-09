import { NAME_CHANGE } from "../constants/constants";

const initialState = {
  name: ''
};
const detailReducer = (state = initialState, action) => {
  switch(action.type) {
    case NAME_CHANGE:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}
export default detailReducer;

