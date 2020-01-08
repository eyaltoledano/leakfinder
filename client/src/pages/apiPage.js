import React from 'react'
import { Helmet } from 'react-helmet'

class ApiPage extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-4 mt-4">
        <Helmet>
          <title>Leakfinder API</title>
          <meta name="description" content="Get an instant breakdown of your conversion funnel, what each conversion event is worth to you, and where the most value is evaporating" />
        </Helmet>
        <p>Leakfinder API Docs coming soon.</p>
      </div>
    )
  }
}

export default ApiPage
