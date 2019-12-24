import { generateName } from './helpers/generateName'

const initState = {
  step: 1,
  email: "",
  calculation: {
    name: "",
    time_dimension: "",
    assumptions: {},
    funnel_steps: {}
  }
}

function manageCalculations(state = initState, action) {
  switch (action.type) {

    case 'NEW_CALCULATION':
      return {
        request: state
      };

    case 'STEP1_COMPLETE':
      return {
        step: state.step + 1,
        email: "",
        calculation: {
          name: (generateName() + " Calculation"),
          time_dimension: action.time_dimension,
          assumptions: {
            average_order_value: action.average_order_value
          },
          funnel_steps: {}
        }
      }

    case 'STEP2_COMPLETE':
      let stepHash = {}
      action.funnel_steps.map(step => {
        stepHash[step.name.toString()] = step.value
      })

      return {
        step: state.step + 1,
        email: "",
        calculation: {
          name: state.calculation.name,
          time_dimension: state.calculation.time_dimension,
          assumptions: {
            average_order_value: state.calculation.assumptions.average_order_value
          },
          funnel_steps: stepHash
        }
      }

    case 'STEP3_COMPLETE':
      return {
        step: 'complete',
        email: action.email,
        calculation: {
          name: state.calculation.name,
          time_dimension: state.calculation.time_dimension,
          assumptions: {
            average_order_value: state.calculation.assumptions.average_order_value
          },
          funnel_steps: state.calculation.funnel_steps
        }
      }

    case 'GET_RESULTS':
      return state
      // 1. create action to api, which returns result object
      // 2. redirect to result page
      // 3. assign results to state.result

    default:
      return state;
  }
}

export default manageCalculations
