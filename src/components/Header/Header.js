import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Web Development</h1>
        <Typed 
          className='typed-text'
          strings={["Web Design", "Web Developement"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link href="#" to="contactme" offset={-110} className="btn-main-offer">Contact Me</Link>
      </div>
    </div>
  )
}

export default Header
