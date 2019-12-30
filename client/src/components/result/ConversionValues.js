import React from 'react'
import NumberFormat from 'react-number-format';

class ConversionValues extends React.Component {

  render() {

    let values = Object.entries(this.props.conversionValues).map(([key,value]) =>
      <div className="flex" key={`${key}-${value}`}>
        <div className="w-1/2 p-2">{key}</div>
        <div className="w-1/2 p-2">
          <NumberFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </div>
      </div>
    )

    return(
      <div id="steps">
        <div className="mx-4 my-3">
          <div className="w-full mb-6 lg:mb-1 lg:w-full px-4 flex flex-col">
            <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
              <div className="border-b px-6 py-6 mx-4">
                <h3 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Value of each conversion</h3>
                  <div className="flex-col">
                    { values }
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ConversionValues
