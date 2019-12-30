import React from 'react'

class Runrate extends React.Component {
  state = {
    runrate: this.props.monthly
  }

  handleDaily = event => {
    event.preventDefault()
    this.setState({
      runrate: this.props.daily
    })
  }

  handleWeekly = event => {
    event.preventDefault()
    this.setState({
      runrate: this.props.weekly
    })
  }

  handleMonthly = event => {
    event.preventDefault()
    this.setState({
      runrate: this.props.monthly
    })
  }

  handleYearly = event => {
    event.preventDefault()
    this.setState({
      runrate: this.props.yearly
    })
  }

  render() {
    return(
      <div id="steps">
        <div className="mx-4 my-3">
          <div className="w-full mb-6 lg:mb-1 lg:w-full px-4 flex flex-col">
            <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
              <div className="border-b p-6">

                <h3 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Revenue Runrate
                  <div className="float-right text-indigo-800">
                    <button onClick={event => this.handleDaily(event)} className="p-1">D</button>
                    <button onClick={event => this.handleWeekly(event)} className="p-1">W</button>
                    <button onClick={event => this.handleMonthly(event)} className="p-1">M</button>
                    <button onClick={event => this.handleYearly(event)} className="p-1">Y</button>
                  </div>
                </h3>

                <div class="text-grey-darker mb-2">
                  <span class="text-3xl align-top">$</span>
                  <span class="text-5xl">{this.state.runrate}</span>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Runrate
