import React from 'react'

import '../style.css'


function Nav({currentPage, handlePageChange}) {
    const [isActive, setisActive] = React.useState(false);
    return (
     
    <nav className="navbar has-background-grey-light is-spaced" role="navigation" aria-label="main navigation">
        <div className ="navbar-brand block">
            <h1 className="block navbar-item">Eric Duwe</h1>
            <a onClick={() => {
              setisActive(!isActive);
            }} role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" id="burger" data-target="navbar-menu" onclick='toggleBurger()'>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div> 
        <h6>Web Development Portfolio</h6>
        <ul className={`navbar-menu ${isActive ? "is-active" : ""}`} id="navbar-menu">
            <div className="navbar-start">
                <li className={currentPage === 'About' ? 'nav-item-clicked' : 'navbar-item'}><a href="#about-me" onClick={() => handlePageChange("About")}>About Me</a></li>
                <li className={currentPage === 'MyWork' ? 'nav-item-clicked' : 'navbar-item'}><a href="#portfolio" onClick={() => handlePageChange('MyWork')}>My Work</a></li>
                <li className={currentPage === 'Contact' ? 'nav-item-clicked' : 'navbar-item'}><a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a></li>
                <li className="navbar-item"><a href={"https://docs.google.com/document/d/1fA2QK3tCP5Js0bEtjsRqw7YkvB521kq_KTqpSSA40YE/edit?usp=sharing"} target="_blank">CV</a></li>
            </div>
        </ul>
    </nav>
    )
}

export default Nav
