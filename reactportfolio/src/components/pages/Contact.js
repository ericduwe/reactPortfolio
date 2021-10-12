import React from 'react';
import '../../style.css';
import profPhoto from '../../assets/images/profile-photo.jpg';

export default function Contact() {
return (
<div>
<section id="contact" classNameName="hero is-fullheight">
            <h2 className="section-heading">Contact</h2>
                <div className="container contact-grid">
                    <div classNameName="block tile contact-item">
                        <h4><a href="mailto:ericduwe@gmail.com"><span className="icon"><i className="fas fa-paper-plane"></i></span> ericduwe@gmail.com</a></h4>
                    </div> 
                    <div className="block tile contact-item">
                        <h4><a href="https://www.linkedin.com/in/eric-duwe/" target="_blank"><span className="icon"><i className="fab fa-linkedin"></i></span> LinkedIn</a></h4>
                    </div>
                    <div className="block tile contact-item">
                        <h4><a href="https://github.com/ericduwe" target="_blank"><span className="icon"><i className="fab fa-github"></i></span> Github</a></h4>
                    </div>
                    <div className="block tile contact-item">
                        <h4><i className="fas fa-phone-square"></i>(708) 217-7579</h4>
                    </div>
                    <div className="block tile is-4 contact-item">
                        <figure className="level-item image is-16by16">
                            <img src={profPhoto} alt="profile photo" className="is-rounded" id="profile-photo" />
                        </figure>
                    </div>
                </div>        
    </section>
</div>
)
}

