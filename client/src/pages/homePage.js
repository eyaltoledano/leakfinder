import React from 'react'
import FormContainer from '../containers/FormContainer'

class HomePage extends React.Component {
  state = {
    showApp: false
  }

  handleClick = (event) => {
    this.setState({
      showApp: true
    })
  }

  renderCta = () => {
    // This will need some love with Tailwind. Namely a hero unit
    return(
      <div className='container mx-auto mt-4'>
        <div className="flex flex-wrap -mx-4">
              <div className="w-full mb-6 lg:mb-1 lg:w-full px-4 flex flex-col">
                <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
                  <div className="border-b p-6 mx-auto">
                    <h1 className="mb-4">Welcome to Leakfinder</h1>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={event => this.handleClick(event)}>New Calculation</button>
                  </div>
                </div>
              </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container mx-auto p-4 mt-4">
        <p>{this.props.calculation_complete}</p>
        {this.state.showApp ? <FormContainer /> : this.renderCta()}
      </div>
    )
  }
}

export default HomePage
