let initialState = {
  sortBy: 'popular',
  category: 0
}

export default function filters(state = initialState, action) {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload
      }
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload
      }
    default:
      return {
        ...state
      }
  }
};
