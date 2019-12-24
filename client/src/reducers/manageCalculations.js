import { generateName } from './helpers/generateName'

const initState = {
  step: 1,
  calculation_complete: false,
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
        calculation: state.calculation
      };

    case 'STEP1_COMPLETE':
      return {
        step: state.step + 1,
        calculation_complete: false,
        email: "",
        calculation: {
          name: generateName(),
          time_dimension: action.time_dimension,
          assumptions: {
            average_order_value: action.average_order_value
          },
          funnel_steps: {}
        }
      }

    case 'STEP2_COMPLETE':
      return {
        step: state.step + 1,
        calculation_complete: false,
        email: "",
        calculation: {
          name: state.name,
          time_dimension: state.time_dimension,
          assumptions: {
            average_order_value: state.average_order_value
          },
          funnel_steps: action.funnel_steps
        }
      }

    case 'STEP3_COMPLETE':
      return {
        step: state.step,
        calculation_complete: true,
        email: action.email,
        calculation: {
          name: state.name,
          time_dimension: state.time_dimension,
          assumptions: {
            average_order_value: state.average_order_value
          },
          funnel_steps: state.funnel_steps
        }
      }

    default:
      return state;
  }
}

export default manageCalculations
