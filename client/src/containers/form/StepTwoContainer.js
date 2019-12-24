import React, { Component } from 'react'
import { connect } from 'react-redux'

class StepTwoContainer extends Component {
  state = {
    funnel_steps: {}
  }

  componentDidMount() {
    console.log(this.state);
  }

  handleClick = (event) => {
    event.preventDefault()
    console.log('click handled');
  }

  // handleNextStepClick = (event) => {
  //   event.preventDefault()
  //   this.props.dispatch({ type: 'STEP2_COMPLETE', funnel_steps: this.state.funnel_steps })
  // }

  render() {
    return(
      <div>
        <p className="text-gray-500">Draw your conversion funnel below</p>
         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={event => this.handleClick(event)}>Add a Funnel Step</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    calculation_complete: state.calculation_complete,
    email: state.email,
    calculation: state.calculation
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     STEP2_COMPLETE: { type: 'STEP2_COMPLETE', funnel_steps: this.state.funnel_steps }
//   }
// }

export default connect(mapStateToProps)(StepTwoContainer)
