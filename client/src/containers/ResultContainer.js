import React, { Component } from 'react'
import { connect } from 'react-redux'
import Runrate from '../components/result/Runrate'
import FunnelBreakdown from '../components/result/FunnelBreakdown'
import ConversionValues from '../components/result/ConversionValues'
import LeakingVolume from '../components/result/LeakingVolume'

class ResultContainer extends Component {

  state = {
    calculation: {},
    result: {}
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

      const response = await fetch('http://localhost:3001/api/calculations', requestOptions)

      const json = await response.json()
      const id = json.id

      this.props.dispatch({ type: 'ADD_CALCULATION_ID', id: id })

      this.setState({
        calculation: json
      })

      const getCalculationResults = async () => {
        const response = await fetch(`http://localhost:3001/api/calculations/${this.state.calculation.id}/result`)

        const returnedResult = await response.json()

        this.props.dispatch({ type: 'ADD_RESULT', result: returnedResult })

        console.log("Result is now in props:");
        console.log(this.props.result);
      }
      getCalculationResults()
    }
    postCalculationParams()
  }

  render() {
    return(
      <div className='container mx-auto mt-4'>
        <div className="flex flex-wrap -mx-4">
              <div className="w-full mb-6 lg:mb-1 lg:w-full px-4 flex flex-col">
                <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
                  <div className="border-b p-6">
                    <div className="flex mb-4">
                      <div className="w-1/2 h-auto">
                        <Runrate runrate={this.props.result.runrate} />
                      </div>
                      <div className="w-1/2 h-auto">
                        <FunnelBreakdown conversionRates={this.props.result.conversion_rates}/>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-1/2 h-auto">
                        <ConversionValues conversionValues={this.props.result.conversion_values} />
                      </div>
                      <div className="w-1/2 h-auto">
                        <LeakingVolume leakingVolume={this.props.result.leaking_volume}/>
                      </div>
                    </div>
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
