import React from 'react'
import { Helmet } from 'react-helmet'

class AboutPage extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-4 mt-4">
        <Helmet>
          <title>About Leakfinder</title>
          <meta name="description" content="Get an instant breakdown of your conversion funnel, what each conversion event is worth to you, and where the most value is evaporating" />
        </Helmet>

        <p>About Leakfinder</p>
        <p>Created by <a href="https://www.twitter.com/eyaltoledano">@eyaltoledano</a>.</p>
      </div>
    )
  }
}

export default AboutPage
