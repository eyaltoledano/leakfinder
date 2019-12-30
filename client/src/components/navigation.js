import React from 'react'

class Navigation extends React.Component {
  render() {
    return (
      <>
        <div className="float-left">
          <a className="text-indigo-500" href="/">Leakfinder</a>
        </div>
        <div className="float-right">
          <a className="p-2 text-gray-500 text-sm" href="/about">About</a>
          <a className="p-2 text-gray-500 text-sm" href="/programmatic">API</a>
        </div>
      </>
    )
  }
}

export default Navigation
