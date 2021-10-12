import React from 'react'
import '../style.css'


function Nav({currentPage, handlePageChange}) {
    return (
    <nav className="navbar has-background-grey-light is-spaced" role="navigation" aria-label="main navigation">
        <div className ="navbar-brand block">
            <h1 className="block navbar-item">Eric Duwe</h1>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" id="burger" data-target="navbarBasicExample" onclick='toggleBurger()'>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div> 
        <h6>Web Development Portfolio</h6>
        <ul className="navbar-menu has-background-grey-light" id="navbar-menu">
            <div className="navbar-start">
                <li className="navbar-item"><a href="#about-me" onClick={() => handlePageChange("About")}>About Me</a></li>
                <li className="navbar-item"><a href="#portfolio" onClick={() => handlePageChange('MyWork')}>My Work</a></li>
                <li className="navbar-item"><a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a></li>
                <li className="navbar-item"><a href={"https://docs.google.com/document/d/1fA2QK3tCP5Js0bEtjsRqw7YkvB521kq_KTqpSSA40YE/edit?usp=sharing"} target="_blank">CV</a></li>
            </div>
        </ul>
    </nav>
    )
}

export default Nav
