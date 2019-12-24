import React from 'react'
import FunnelStep from '../../components/form/funnelStep'

class FunnelStepsContainer extends React.Component {

  state = {
    funnelSteps: [
      { name: "", value: ""}
    ]
  }

  addStep = (event) => {
    event.preventDefault()
    this.setState((prevState) => ({
      funnelSteps: [...prevState.funnelSteps, {name: "", value: ""}]
    }))
  }

  handleChange = (event) => {
    let eventName = event.target.name.split('-')[0] // name/value
    let id = event.target.name.split('-')[1] // 0, 1, 2, 3, 4...
    let value = event.target.value // some string

    if (["name", "value"].includes(eventName)) {
      let funnelSteps = [...this.state.funnelSteps]
      funnelSteps[id][eventName] = event.target.value
      this.setState({funnelSteps}, () => console.log(this.state.funnelSteps))
    } else {
      this.setState({ [eventName]: event.target.value })
    }
  }

  render() {
    let funnelSteps = this.state.funnelSteps
    return(
      <div id="steps">
        <div className="mx-4 my-3">
          <div className="w-full mb-6 lg:mb-1 lg:w-full px-4 flex flex-col">
            <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
              <div className="border-b p-6 mx-auto">

                { funnelSteps.map((val, idx) => {
                  let stepId = `step-${idx}`
                  return(
                    <div key={idx}>
                      <FunnelStep handleChange={event => this.handleChange(event)} id={idx} name={val.name} value={val.value} />
                    </div>
                  )
                })}

                <button className='block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={event => this.addStep(event)}>Add a Funnel Step</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FunnelStepsContainer
