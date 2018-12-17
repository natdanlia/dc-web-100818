import React, {Component} from 'react'

const Navbar = (props) => {
  return (
    <div className={`ui inverted ${props.color} menu`}>
      <a className="item" href="/">
        <h2 className="ui header">
          <i className="paint brush icon"></i>
          <div className="content">{props.title}</div>
          <div className="sub header">{props.tagline}</div>
        </h2>
      </a>
    </div>)
}

export default Navbar
