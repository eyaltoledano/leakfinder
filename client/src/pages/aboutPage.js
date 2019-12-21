import React from 'react'
import Navigation from '../components/navigation'

class AboutPage extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-4 mt-4">
        <p>About Leakfinder</p>
        <p>Created by <a href="twitter.com/eyaltoledano">@eyaltoledano</a>.</p>
      </div>
    )
  }
}

export default AboutPage
