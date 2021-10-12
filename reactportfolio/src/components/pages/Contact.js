import React from 'react';
import '../../style.css';
import profPhoto from '../../assets/images/profile-photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
return (
<div>
<section id="contact" classNameName="hero is-fullheight">
                <div className="container contact-grid">
                    <div classNameName="block tile contact-item">
                        <h4><a href="mailto:ericduwe@gmail.com">ericduwe@gmail.com</a></h4>
                    </div> 
                    <div className="block tile contact-item">
                        <h4><a href="https://www.linkedin.com/in/eric-duwe/" target="_blank">LinkedIn</a></h4>
                    </div>
                    <div className="block tile contact-item">
                        <h4><a href="https://github.com/ericduwe" target="_blank">Github</a></h4>
                    </div>
                    <div className="block tile contact-item">
                        <h4>(708) 217-7579</h4>
                    </div>
                    <div className="block tile contact-item">
                        <figure className="level-item image is-16by16">
                            <img src={profPhoto} alt="profile photo" className="is-rounded" id="profile-photo" />
                        </figure>
                    </div>
                </div>        
    </section>
</div>
)
}

