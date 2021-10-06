import React from 'react';
import '../style.css'

function MyWork() {
return (

<section id="portfolio" className="hero is-fullheight">
            <div className="hero-body">
                <h2 className="section-heading title">My Work</h2>
                <div className="tile is-parent is-8" id="project-grid">
                    <div className="tile is-child project-card">
                        <a className="project-link" href="https://jpolmon.github.io/Project01/" target="_blank"><figure className="image is-3by2" ><img src="./assets/images/Project-Screenshot.PNG"/></figure>Personalized Home Page</a><a className="repo-link" href="https://github.com/jpolmon/Project01" target="_blank">Github Repo</a>
                    </div>
                    <div className="tile is-child project-card">
                        <a className="project-link" href="https://ericduwe.github.io/weatherApp/"><figure className="image is-3by2"><img src="./assets/images/WeatherApp_Screenshot2.PNG"/></figure>Weather Forecast App</a><a className="repo-link" href="https://github.com/ericduwe/weatherApp" target="_blank">Github Repo</a>
                    </div>
                    <div className="tile is-child project-card">
                        <a className="project-link" href="https://blooming-gorge-57212.herokuapp.com/login"><figure className="image is-3by2"><img src="./assets/images/myworkoutlog_screenshot.png"/></figure>myWorkoutLog</a><a className="repo-link" href="https://github.com/jsoh11/ExerciseLog" target="_blank">Github Repo</a>
                    </div>
                </div>
            </div>
</section>

)
}

export default MyWork;
