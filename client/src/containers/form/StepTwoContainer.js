import React, { Component } from 'react'
import { connect } from 'react-redux'
import FunnelStep from '../../components/form/funnelStep'
import FunnelStepsContainer from './FunnelStepsContainer'
import cuid from 'cuid'

class StepTwoContainer extends Component {
  state = {
    funnel_steps: {
      visits: 1000
    }
  }

  componentDidMount() {
    console.log(this.state);
  }

  handleNextClick = (event) => {
    event.preventDefault()
    console.log(this.state);
    this.props.dispatch({ type: 'STEP2_COMPLETE', funnel_steps: this.state.funnel_steps })
  }

  render() {
    return(
      <div>
        <p className="text-gray-500 mb-3">
          Draw your conversion funnel below
        </p>

         <section>
           <FunnelStepsContainer funnelSteps={this.state.funnel_steps} />
         </section>

         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right' onClick={event => this.handleNextClick(event)}>Continue</button>
         <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full float-left' href="/">Start Over</button>
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
