import React from 'react'
import ResultContainer from '../containers/ResultContainer'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

class ResultPage extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-4 mt-4">
        <Helmet>
          <title>Leakfinder - Free Conversion Analysis Tool</title>
          <meta name="description" content="Get an instant breakdown of your conversion funnel, what each conversion event is worth to you, and where the most value is evaporating" />
        </Helmet>
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
