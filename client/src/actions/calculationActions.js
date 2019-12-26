import axios from 'axios'

export function createCalculation(props) {
  return (dispatch) => {
    dispatch({ type: 'NEW_CALCULATION_REQUEST' });
    axios.post('/calculations', props)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
}
