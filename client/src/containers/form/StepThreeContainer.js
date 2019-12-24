import React, { Component } from 'react'
import { connect } from 'react-redux'

class StepThreeContainer extends Component {

  state = {
    email: ""
  }

  handleFinishedClick = (event) => {
    event.preventDefault()
    this.props.dispatch({ type: 'STEP3_COMPLETE', email: this.state.email })
  }

  handleChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    return(
      <div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email address
          </label>
          <input name='email' onChange={event => this.handleChange(event)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white stepName" type="text" placeholder="Enter an email to get results" />
        </div>

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right' onClick={event => this.handleFinishedClick(event)}>Get Results</button>
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

export default connect(mapStateToProps)(StepThreeContainer)
