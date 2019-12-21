import React from 'react'
import Navigation from '../components/navigation'
import App from '../App'

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
    return <button ref='cta' onClick={event => this.handleClick(event)}>New Calculation</button>
  }

  render() {

    return (
      <div className="container mx-auto p-4 mt-4">
        <p>Welcome to Leakfinder</p>
        {this.state.showApp ? <App /> : this.renderCta()}
      </div>
    )
  }
}

export default HomePage
