export default function manageCalculations(state = {
  email: "",
  calculation: {
    name: "",
    time_dimension: "",
    assumptions: {},
    funnel_steps: {}
  }
}, action) {
  console.log(action)
  switch (action.type) {

    case 'NEW_CALCULATION':
      return "new calculation hash";

    case 'GET_CALCULATION':
      return "calculation hash"

    case 'GET_RESULTS':
      return "result hash"



    default:
      return state;
  }
}
