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
      <div>
        <h1>Welcome to Leakfinder</h1>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' ref='cta' onClick={event => this.handleClick(event)}>New Calculation</button>
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
