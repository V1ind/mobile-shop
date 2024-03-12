import { ADD_TO_BAG, REMOVE_FROM_BAG } from "../action-types/action-types.js";

const initialState = {
  bag: [],
};

const rootReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_TO_BAG:
      const { product, count } = payload;
      const existingProduct = state.bag.find((item) => item.id === product.id);

      if (existingProduct) {
        return {
          ...state,
          bag: state.bag.map((item) =>
            item.id === product.id ? { ...item, count: item.count + count } : item
          ),
        };
      } else {
        return {
          ...state,
          bag: [...state.bag, { ...product, count }],
        };
      }

    case REMOVE_FROM_BAG:
      return {
        ...state,
        bag: state.bag.map((item) => {
          if (item.id === payload.id) {
            item.count -= payload.count
            if (item.count <= 0) return null;
            return item;
          } 
          return item;
        }).filter(Boolean),
      };

    default:
      return state;
  }
};

export default rootReducer;
