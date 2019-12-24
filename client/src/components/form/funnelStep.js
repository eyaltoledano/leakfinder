import React from 'react'

class FunnelStep extends React.Component {
  state = {
    name: "",
    value: ""
  }

  onChange = event => {
    this.props.handleChange(event)
  }

  render() {
    let stepName = `name-${this.props.id}`
    let stepValue = `value-${this.props.id}`
    return (
      <>
      <div className="flex flex-wrap -mx-3 mb-6" key={this.props.id}>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={stepName}>
            Event Name
          </label>
          <input name={stepName} onChange={event => this.onChange(event)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white stepName" id={stepName} type="text" placeholder="i.e. Website Visits" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={stepValue}>
            Event Value
          </label>
          <input name={stepValue} onChange={event => this.onChange(event)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 stepValue" id={stepValue} type="text" placeholder="i.e. 1000" />
        </div>
      </div>
      </>
    )
  }
}

export default FunnelStep
