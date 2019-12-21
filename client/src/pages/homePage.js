import React from 'react'
import Navigation from '../components/navigation'

class HomePage extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-4 mt-4">
        <p>Welcome to Leakfinder</p>
        <button>New Calculation</button>
      </div>
    )
  }
}

export default HomePage
