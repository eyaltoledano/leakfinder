import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import individual result components

class ResultContainer extends Component {

  componentDidMount() {
    console.log(this.props);
    
  }

  render() {
    return(
      <div className='container mx-auto mt-4'>
        <div className="flex flex-wrap -mx-4">
              <div className="w-full mb-6 lg:mb-1 lg:w-full px-4 flex flex-col">
                <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
                  <div className="border-b p-6">
                  Calculation results here

                  </div>
                </div>
              </div>
        </div>
      </div>
    )
  }
}

export default ResultContainer
