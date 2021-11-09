import React from "react";
import "../../style.css";
import project1 from "../../assets/images/Project-Screenshot.PNG";
import weatherApp from "../../assets/images/WeatherApp_Screenshot2.PNG";
import exerciseLog from "../../assets/images/myworkoutlog_screenshot.png";
import budgetTracker from "../../assets/images/Budget_screenshot.PNG";
import noteTaker from "../../assets/images/NoteTaker_Screenshot.PNG";
import studentPortal from "../../assets/images/StudentPortal.PNG";

export default function MyWork() {
  return (
    <section id="portfolio" className="hero is-fullheight">
      <div className="hero-body">
        <div className="tile is-parent is-12 content-box" id="project-grid">
          <div className="tile is-child project-card">
            <a
              className="project-link"
              href="https://jpolmon.github.io/NewTabHomepage/"
              target="_blank"
            >
              <figure className="image is-3by2">
                <img src={project1} />
              </figure>
              Custom Homepage*
            </a>
            <p>
              <a
                className="repo-link"
                href="https://github.com/jpolmon/NewTabHomepage"
                target="_blank"
              >
                Github Repo
              </a>
            </p>
           
            <p>
              <strong>About</strong>: Custom browser homepage that hooks into
              external APIs to retrieve data like weather on "On this day"
              history facts
            </p>
            
            <p>
              <strong>Technologies</strong>: HTML5, CSS3, JavaScript, APIs
            </p>
          </div>
          <div className="tile is-child project-card">
            <a
              className="project-link"
              href="https://ericduwe.github.io/weatherApp/"
            >
              <figure className="image is-3by2">
                <img src={weatherApp} />
              </figure>
              Weather Forecast
            </a>
           
            <p>
              <a
                className="repo-link"
                href="https://github.com/ericduwe/weatherApp"
                target="_blank"
              >
                Github Repo
              </a>
            </p>
            <p>
              <strong>About: </strong>Lookup current conditions and five-day
              forecast for any city. Displays active government-issued alerts
              when relevant
            </p>
            <p>
              <strong>Technologies: </strong>HTML5, CSS3, JavaScript, APIs, Bootstrap, Bulma
            </p>
          </div>
          <div className="tile is-child project-card">
            <a
              className="project-link"
              href="https://blooming-gorge-57212.herokuapp.com/login"
            >
              <figure className="image is-3by2">
                <img src={exerciseLog} />
              </figure>
              myWorkoutLog*
            </a>
            
            <p>
              <a
                className="repo-link"
                href="https://github.com/jsoh11/ExerciseLog"
                target="_blank"
              >
                Github Repo
              </a>
            </p>
            <p>
              <strong>About: </strong>Create a profile, add your own workouts
              and view those of others. Track personal exercise stats in
              profile.
            </p>
            <p>
              <strong>Technologies: </strong>Node.js, Express.js, mySQL,
              Sequelize, HTML5, CSS3, Bulma, JavaScript
            </p>
          </div>
          <div className="tile is-child project-card">
            <a
              className="project-link"
              href="https://enigmatic-anchorage-73244.herokuapp.com/"
            >
              <figure className="image is-3by2">
                <img src={studentPortal} />
              </figure>
              Student Portal*
            </a>
            
            <p>
              <a
                className="repo-link"
                href="https://github.com/salvarenga74/StudentPortal"
                target="_blank"
              >
                Github Repo
              </a>
            </p>
            <p>
              <strong>About: </strong>Create a student account to post questions
              to your peers and teachers and comment on other users' posts.
            </p>
            <p>
              <strong>Technologies: </strong>React.js, GraphQL, MongoDB, Apollo,
              Express.js, JWT, HTML5, CSS3, Bulma, JavaScript
            </p>
          </div>
          <div className="tile is-child project-card">
            <a
              className="project-link"
              href="https://rocky-beyond-24483.herokuapp.com/"
            >
              <figure className="image is-3by2">
                <img src={budgetTracker} />
              </figure>
              Budget Tracker
            </a>
           
            <p>
              <a
                className="repo-link"
                href="https://github.com/ericduwe/budgetTracker"
                target="_blank"
              >
                Github Repo
              </a>
            </p>
            <p>
              <strong>About: </strong>Progressive budget tracker with offline
              functionality
            </p>
            <p>
              <strong>Technologies: </strong>HTML5, JavaScript, Node.js,
              Mongoose, MongoDB, Express.js, Web Manifest, Service Worker
            </p>
          </div>
          <div className="tile is-child project-card">
            <a
              className="project-link"
              href="https://ancient-reaches-73596.herokuapp.com/"
            >
              <figure className="image is-3by2">
                <img src={noteTaker} />
              </figure>
              Digital Note Taker
            </a>
            
            <p>
              <a
                className="repo-link"
                href="https://github.com/ericduwe/noteTaker"
                target="_blank"
              >
                Github Repo
              </a>
            </p>
            <p>
              <strong>About: </strong>Node app that can be used to record and
              save simple notes
            </p>
            <p>
              <strong>Technologies: </strong>Node.js, Express.js, JavaScript,
              HTML5
            </p>
          </div>
        </div>
        
      </div>
      <p className="hero-body">* - Project created in collaboration with other developers and/or classmates</p>
    </section>
  );
}
