import React, { Component } from 'react'
import { connect } from 'react-redux'

class StepOneContainer extends Component {

  state = {
    time_dimension: 30,
    average_order_value: ""
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  componentDidMount() {
    console.log("Step 1 Mounted");
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return(
      <div>
          <span className="text-gray-500">Over the last...</span>

          <div class="relative">
            <select
              onChange={event => this.handleChange(event)}
              name="time_dimension"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="time_dimension_input"
            >
              <option value="1">Day</option>
              <option value="7">Week</option>
              <option value="30" selected>Month</option>
              <option value="365">Year</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

          <span className="text-gray-500">My Average Order Value is...</span>

          <input
            onChange={event => this.handleChange(event)}
            type="number"
            name="average_order_value"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />

          <button onClick={event => event.preventDefault()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Next Step</button>
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

export default connect(mapStateToProps)(StepOneContainer)
