import React from 'react'

class Navigation extends React.Component {
  render() {
    return (
      <>
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
