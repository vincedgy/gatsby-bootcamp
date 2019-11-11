import React from "react"
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header>
      <p>Gatsby Bootcamp</p>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </header>
  )
}
export default Header