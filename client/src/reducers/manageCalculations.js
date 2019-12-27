import { generateName } from './helpers/generateName'

const initState = {
  step: 1,
  email: "",
  calculation: {
    id: "",
    name: "",
    time_dimension: "",
    assumptions: {},
    funnel_steps: {}
  },
  result: {}
}

function manageCalculations(state = initState, action) {
  switch (action.type) {

    case 'STEP1_COMPLETE':
      return {
        step: state.step + 1,
        email: "",
        calculation: {
          id: "",
          name: (generateName() + " Calculation"),
          time_dimension: action.time_dimension,
          assumptions: {
            average_order_value: action.average_order_value
          },
          funnel_steps: {}
        },
        result: {}
      }

    case 'STEP2_COMPLETE':
      let stepHash = {}
      action.funnel_steps.map(step => {
        return stepHash[step.name.toString()] = step.value
      })

      return {
        step: state.step + 1,
        email: "",
        calculation: {
          id: "",
          name: state.calculation.name,
          time_dimension: state.calculation.time_dimension,
          assumptions: {
            average_order_value: state.calculation.assumptions.average_order_value
          },
          funnel_steps: stepHash
        },
        result: {}
      }

    case 'STEP3_COMPLETE':
      return {
        step: 'complete',
        email: action.email,
        calculation: {
          id: "",
          name: state.calculation.name,
          time_dimension: state.calculation.time_dimension,
          assumptions: {
            average_order_value: state.calculation.assumptions.average_order_value
          },
          funnel_steps: state.calculation.funnel_steps
        },
        result: {}
      }

    case 'ADD_CALCULATION_ID':
      return {
        ...state,
        calculation: {
          ...state.calculation,
          id: action.id
        },
        result: {}
      }

    case 'ADD_RESULT':
      return {
        ...state,
        result: action.result
      }

    default:
      return state;
  }
}

export default manageCalculations
