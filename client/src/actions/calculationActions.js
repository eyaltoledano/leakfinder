export const fetchCalculation = () => {
  return (dispatch) => {
    dispatch({ type: 'GET_CALCULATION'})
    fetch('/api/calculations/')
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
    })
  }
}
