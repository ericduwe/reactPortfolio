import React from 'react';
import '../../style.css';
import project1 from '../../assets/images/Project-Screenshot.PNG';
import weatherApp from '../../assets/images/WeatherApp_Screenshot2.PNG';
import exerciseLog from '../../assets/images/myworkoutlog_screenshot.png';

export default function MyWork() {
return (

<section id="portfolio" className="hero is-fullheight">
            <div className="hero-body">
                <h2 className="section-heading title">My Work</h2>
                <div className="tile is-parent is-8" id="project-grid">
                    <div className="tile is-child project-card">
                        <a className="project-link" href="https://jpolmon.github.io/Project01/" target="_blank"><figure className="image is-3by2" ><img src={project1}/></figure>Personalized Home Page</a>{"\n"}<a className="repo-link" href="https://github.com/jpolmon/Project01" target="_blank">Github Repo</a>
                    </div>
                    <div className="tile is-child project-card">
                        <a className="project-link" href="https://ericduwe.github.io/weatherApp/"><figure className="image is-3by2"><img src={weatherApp}/></figure>Weather Forecast App</a>{"\n"}<a className="repo-link" href="https://github.com/ericduwe/weatherApp" target="_blank">Github Repo</a>
                    </div>
                    <div className="tile is-child project-card">
                        <a className="project-link" href="https://blooming-gorge-57212.herokuapp.com/login"><figure className="image is-3by2"><img src={exerciseLog}/></figure>myWorkoutLog</a>{"\n"}<a className="repo-link" href="https://github.com/jsoh11/ExerciseLog" target="_blank">Github Repo</a>
                    </div>
                </div>
            </div>
</section>

)
}
