import React, { Component } from 'react'
import { connect } from 'react-redux'
import Runrate from '../components/result/Runrate'
import FunnelBreakdown from '../components/result/FunnelBreakdown'
import ConversionValues from '../components/result/ConversionValues'
import LeakingVolume from '../components/result/LeakingVolume'
import { usePromiseTracker } from 'react-promise-tracker';
import { trackPromise } from 'react-promise-tracker';
import Loader from 'react-loader-spinner'


class ResultContainer extends Component {

  state = {
    calculation: {},
    result: {},
    requesting: false
  }

  componentDidMount() {
    // deal with CORS not allowed
    const postCalculationParams = async () => {

      const payload = {
        email: this.props.email,
        calculation: this.props.calculation
      }

      let data = new FormData()
      data.append("json", JSON.stringify(payload))

      let readyData = JSON.stringify(payload)

      const requestOptions = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: readyData
      }


      const response = await fetch('https://leakfinder.herokuapp.com/api/calculations', requestOptions)

      const json = await response.json()
      const id = json.id

      this.props.dispatch({ type: 'ADD_CALCULATION_ID', id: id })

      this.setState({
        calculation: json
      })

      const getCalculationResults = async () => {
        this.setState({
          requesting: true
        })

        const response = await fetch(`https://leakfinder.herokuapp.com/api/calculations/${this.state.calculation.id}/result`)

        const returnedResult = await response.clone().json()

        this.props.dispatch({ type: 'ADD_RESULT', result: returnedResult })

        this.setState({
          requesting: 'completed'
        })

        console.log("Thanks for using Leakfinder! Here are your results:");
        console.log(this.props.result);
      }
      getCalculationResults()
    }
    postCalculationParams()
  }

  renderResultGrid = () => {
    return(
      <div>
        <div className="flex mb-4">
          <div className="w-1/2 h-auto">
            { this.state.requesting === 'completed' ? <Runrate daily={this.props.result.runrate.daily} weekly={this.props.result.runrate.weekly}
            monthly={this.props.result.runrate.monthly}
            yearly={this.props.result.runrate.yearly} /> : null }
          </div>
          <div className="w-1/2 h-auto">
            { this.state.requesting === 'completed' ? <FunnelBreakdown conversionRates={this.props.result.conversion_rates} />
            : null }
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 h-auto">
            { this.state.requesting === 'completed' ? <ConversionValues conversionValues={this.props.result.conversion_values} />
            : null }
          </div>
          <div className="w-1/2 h-auto">
            { this.state.requesting === 'completed' ? <LeakingVolume leakingVolume={this.props.result.leaking_volume} />
            : null }
          </div>
        </div>
      </div>
    )
  }

  renderLoadingIndicator = () => {
    return(
      <div style={{
           width: "100%",
           height: "100",
           display: "flex",
           justifyContent: "center",
           alignItems: "center" }}>
       <Loader type="ThreeDots" color="#677EEA" height="100" width="100" />
     </div>
   )
  }

  render() {

    return(
      <div className='container mx-auto mt-4'>
        <div className="flex flex-wrap -mx-4">
              <div className="w-full mb-6 lg:mb-1 lg:w-full px-4 flex flex-col">
                <div className="flex-grow flex flex-col ">
                  <div className=" p-6">

                    { this.state.requesting !== 'completed' ? this.renderLoadingIndicator() : this.renderResultGrid() }

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
    email: state.email,
    calculation: state.calculation,
    result: state.result
  }
}

export default connect(mapStateToProps)(ResultContainer)
