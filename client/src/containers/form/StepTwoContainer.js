import React, { Component } from 'react'
import { connect } from 'react-redux'

class StepTwoContainer extends Component {

  componentDidMount() {
    console.log("Step 2 Mounted with " + this.props);
  }

  render() {
    return(
      <div>
        Step 2
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

export default connect(mapStateToProps)(StepTwoContainer)
