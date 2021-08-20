export function setSortBy(payload) {
  return {
    payload,
    type: "SET_SORT_BY",
  }
}

export function setCategory(payload) {
  return {
    payload,
    type: 'SET_CATEGORY',
  }
}
