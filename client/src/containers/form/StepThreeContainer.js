import React, { Component } from 'react'
import { connect } from 'react-redux'

class StepThreeContainer extends Component {

  componentDidMount() {
    console.log("Step 3 Mounted with " + this.props);
  }

  render() {
    return(
      <div>
        Step 3
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

export default connect(mapStateToProps)(StepThreeContainer)
