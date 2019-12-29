import React from 'react'

class Navigation extends React.Component {
  render() {
    return (
      <>
        <div className="float-left">
          <div className="text-lg text-indigo-600">
            <a href="/">Leakfinder</a>
          </div>
        </div>

        <ul className="float-right">
          <a className="p-2" href="/">Home</a>
          <a className="p-2" href="/about">About</a>
          <a className="p-2" href="/programmatic">API</a>
        </ul>
      </>
    )
  }
}

export default Navigation
