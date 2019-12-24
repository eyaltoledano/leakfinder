import React, { Component } from 'react'
import axios from 'axios'

class ResultContainer extends Component {

  state = {
    result: {}
  }

  componentDidMount() {
    let props = this.props

    console.log(props);

    fetch('http://localhost:3000/api/calculations',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.props)
    }).then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })

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
