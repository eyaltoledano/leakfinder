import React from 'react'

class FunnelBreakdown extends React.Component {

  render() {
    return(
      <div id="steps">
        <div className="mx-4 my-3">
          <div className="w-full mb-6 lg:mb-1 lg:w-full px-4 flex flex-col">
            <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
              <div className="border-b p-6 mx-auto">
                <h3 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Conversion Rates</h3>
                {this.props.conversionRates}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FunnelBreakdown
