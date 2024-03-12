import { ADD_TO_BAG, REMOVE_FROM_BAG } from "../action-types/action-types";

export const addToBag = (payload) => ({
  type: ADD_TO_BAG,
  payload,
});

export const removeFromBag = (payload) => ({
  type: REMOVE_FROM_BAG,
  payload,
});
