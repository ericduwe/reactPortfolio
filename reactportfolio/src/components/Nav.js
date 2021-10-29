import React from 'react'

import '../style.css'


function Nav({currentPage, handlePageChange}) {
    const [isActive, setisActive] = React.useState(false);
    return (
     
    <nav className="navbar is-spaced" role="navigation" aria-label="main navigation" id="main-menu">
        <div className ="navbar-brand block">
            <h1 className="block navbar-item">Eric Duwe</h1>
            {/* <a onClick={() => {
              setisActive(!isActive);
            }} role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" id="burger" data-target="navbar-menu" onclick='toggleBurger()'>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a> */}
        </div> 
        
        <ul className="navbar-menu is-active" id="navbar-menu">
            <div className="navbar-start">
                <li className={currentPage === 'About' ? 'nav-item-clicked' : 'navbar-item'}><a href="#about-me" onClick={() => handlePageChange("About")}>About Me</a></li>
                <li className={currentPage === 'MyWork' ? 'nav-item-clicked' : 'navbar-item'}><a href="#portfolio" onClick={() => handlePageChange('MyWork')}>Projects</a></li>
                <li className={currentPage === 'Contact' ? 'nav-item-clicked' : 'navbar-item'}><a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a></li>
                <li className={currentPage === 'CV' ? 'nav-item-clicked' : 'navbar-item'}><a href="#CV" onClick={() => handlePageChange('CV')}>CV</a></li>
            </div>
        </ul>
    </nav>
    )
}

export default Nav
// ${isActive ? "is-active" : ""}