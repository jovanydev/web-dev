
import React from "react"
import logo from '../images/react-logo.png';

export default function Navbar() {
  return (
    <nav>
      <img src={logo} id="icon" alt="logo" />
      <h3 id="logo-text">ReactFacts</h3>
      <h4 id="nav-description">React Course - Project 1</h4>
    </nav>
  )
}
