import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import individual result components

class ResultContainer extends Component {
  render() {
    return(
      <div className='container mx-auto mt-4'>
        <div class="flex flex-wrap -mx-4">
              <div class="w-full mb-6 lg:mb-1 lg:w-full px-4 flex flex-col">
                <div class="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
                  <div class="border-b p-6">
                  Results will go here
                  </div>
                </div>
              </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     result: state.result
//   }
// }

export default ResultContainer
