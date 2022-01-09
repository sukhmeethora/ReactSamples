import { NAME_CHANGE } from "../constants/constants";

NAME_CHANGE
export function nameChange(name) {
  return {
    type: NAME_CHANGE,
    payload: name,
  }
}