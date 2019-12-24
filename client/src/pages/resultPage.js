import React from 'react'
import ResultContainer from '../containers/ResultContainer'
import { connect } from 'react-redux'

class ResultPage extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-4 mt-4">
        <ResultContainer props={this.props}/>
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

export default connect(mapStateToProps)(ResultPage)
