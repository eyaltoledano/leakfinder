import React from 'react'

class FunnelBreakdown extends React.Component {

  render() {

    let rates = Object.entries(this.props.conversionRates).map(([key,value]) =>
      <div className="flex" key={`${key}-${value}`}>
        <div className="w-1/2 p-2">{key}</div>
        <div className="w-1/2 p-2">{value*100}%</div>
      </div>
    )

    return(
      <div id="steps">
        <div className="mx-4 my-3">
          <div className="w-full mb-6 lg:mb-1 lg:w-full px-4 flex flex-col">
            <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
              <div className="border-b px-6 py-6 mx-4">
                <h3 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Funnel Breakdown</h3>
                  <div className="flex-col">
                    { rates }
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FunnelBreakdown
