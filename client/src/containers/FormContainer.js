import React, { Component } from 'react'
import { connect } from 'react-redux'
import StepOneContainer from './form/StepOneContainer'
import StepTwoContainer from './form/StepTwoContainer'
import StepThreeContainer from './form/StepThreeContainer'
import ResultPage from '../pages/resultPage'

class FormContainer extends Component {
  renderStep(state) {
    switch (state.step) {
      case 1:
        return <StepOneContainer />
      case 2:
        return <StepTwoContainer />
      case 3:
        return <StepThreeContainer />
      case 'complete':
        return <ResultPage />
      default:
        return <StepOneContainer />
    }
  }

  render() {
    return(
      <div className='container mx-auto mt-4'>
        <div className="flex flex-wrap -mx-4">
              <div className="w-full mb-6 lg:mb-1 lg:w-full px-4 flex flex-col">
                <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
                  <div className="border-b p-6">
                    <form>
                      { this.renderStep(this.props) }
                    </form>
                  </div>
                </div>
              </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    step: state.step,
    email: state.email,
    calculation: state.calculation
  }
}

export default connect(mapStateToProps)(FormContainer)
