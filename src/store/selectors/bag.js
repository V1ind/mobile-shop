export const bagSelector = (state) => state?.bag;

export const bagProductCountByIdSelector = (id) => (state) =>
state.bag?.find((el) => el.id === id)?.count || 0;
    