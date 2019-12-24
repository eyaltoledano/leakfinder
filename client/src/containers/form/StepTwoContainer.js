import React, { Component } from 'react'
import { connect } from 'react-redux'
import FunnelStepsContainer from './FunnelStepsContainer'

class StepTwoContainer extends Component {

  render() {
    return(
      <div>
        <p className="text-gray-500 mb-3">
          Draw your conversion funnel below
        </p>

         <section>
           <FunnelStepsContainer />
         </section>

         <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full float-left' href="/">Start Over</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.email,
    calculation: state.calculation
  }
}

export default connect(mapStateToProps)(StepTwoContainer)
