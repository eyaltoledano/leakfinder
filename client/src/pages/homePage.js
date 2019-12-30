import React from 'react'
import FormContainer from '../containers/FormContainer'
import HeroImage from '../components/search.svg'

class HomePage extends React.Component {
  state = {
    showApp: false
  }

  handleClick = (event) => {
    this.setState({
      showApp: true
    })
  }

  renderCtaSection = () => {
    // This will need some love with Tailwind. Namely a hero unit
    return(
      <>
      <div className='container mx-auto mt-4 flex'>
        <div className="w-2/3">
          <h1 className="text-center my-8 text-5xl md:text-5xl text-gray-800 font-bold leading-relaxed md:text-left slide-in-bottom-h1 mt-8">Analyze your conversion funnel</h1>
          <h3 className="text-2xl text-gray-700 leading-relaxed mb-5">Get an instant breakdown of your conversion funnel, what each conversion event is worth to you, and where the most value is evaporating.</h3>
          <button className='mt-7 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-6 px-10 rounded-full text-lg' onClick={event => this.handleClick(event)}>Get funnel analysis</button>
          <span className="text-gray-500 text-sm ml-3">Results in less than 30 seconds and totally free to use.</span>
        </div>
        <div className="w-1/3 h-10">
          <img src={HeroImage} style={{height: 350}} />
        </div>
      </div>
      <div>
      </div>
      </>
    )
  }

  render() {
    return (
      <div className="container mx-auto p-4 mt-4">
        <p>{this.props.calculation_complete}</p>
        {this.state.showApp ? <FormContainer /> : this.renderCtaSection()}
      </div>
    )
  }
}

export default HomePage
