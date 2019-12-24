import React from 'react'

class FunnelStepsContainer extends React.Component {

  render() {
    return(
      <div id="steps">
        <div className="mx-4 my-3">
              <div className="w-full mb-6 lg:mb-1 lg:w-full px-4 flex flex-col">
                <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
                  <div className="border-b p-6 mx-auto">
                    iterate over steps here
                  </div>
                </div>
              </div>
        </div>
      </div>
    )
  }
}

export default FunnelStepsContainer
