import React from "react";
import "../../style.css";
import profPhoto from "../../assets/images/profile-photo.jpg";
export default function AboutMe() {
  return (
    <div>
      <section id="about-me" className="hero is-fullheight">
        <div className="hero-body is-flex-wrap-wrap">
          <p className="image">
            <img src={profPhoto} alt="profile photo" />
          </p>
          <p className="content-box p-3" style={{ maxWidth: "800px" }}>
            <h3>Bio</h3>
            <p id="about-me-text">
              I’m a full-stack JavaScript developer with a professional
              background in project management. I have my undergraduate degrees
              in Economics and International Studies from the University of
              Wisconsin-Madison, and a Certificate in Full Stack Web Development
              from Southern Methodist University. My life has taken me in many
              different directions -- from music school to non-profit campaign
              management to web design and coding. I've always had a passion for
              creating things and I'm always looking forward to new endeavors. I
              live in Dallas with my partner and our three dogs: Remy, Maxy, and
              Flint.
            </p>
            <h3>Primary Languages</h3>
            <p>HTML5, CSS, JavaScript</p>
            <h3>Technologies, Frameworks, and Libraries I work with</h3>
            <p>
              React.js, node.js, Express.js, mySQL, Sequelize, MongoDB,
              Mongoose, GraphQL, REST APIs, Bulma, Bootstrap, Github, Heroku
            </p>
          </p>
        </div>
      </section>
    </div>
  );
}
