import React from 'react';
import '../../style.css';
import project1 from '../../assets/images/Project-Screenshot.PNG';
import weatherApp from '../../assets/images/WeatherApp_Screenshot2.PNG';
import exerciseLog from '../../assets/images/myworkoutlog_screenshot.png';
import dayPlanner from '../../assets/images/dayPlanner_Screenshot.PNG';
import budgetTracker from '../../assets/images/Budget_screenshot.PNG';
import noteTaker from '../../assets/images/NoteTaker_Screenshot.PNG';


export default function MyWork() {
return (

<section id="portfolio" className="hero is-fullheight">
            <div className="hero-body">
                <div className="tile is-parent is-12" id="project-grid">
                    <div className="tile is-child project-card">
                        <a className="project-link" href="https://jpolmon.github.io/Project01/" target="_blank"><figure className="image is-3by2" ><img src={project1}/></figure>Custom Homepage</a>{"\n"}<a className="repo-link" href="https://github.com/jpolmon/Project01" target="_blank">Github Repo</a>
                    </div>
                    <div className="tile is-child project-card">
                        <a className="project-link" href="https://ericduwe.github.io/weatherApp/"><figure className="image is-3by2"><img src={weatherApp}/></figure>Weather Forecast</a>{"\n"}<a className="repo-link" href="https://github.com/ericduwe/weatherApp" target="_blank">Github Repo</a>
                    </div>
                    <div className="tile is-child project-card">
                        <a className="project-link" href="https://blooming-gorge-57212.herokuapp.com/login"><figure className="image is-3by2"><img src={exerciseLog}/></figure>myWorkoutLog</a>{"\n"}<a className="repo-link" href="https://github.com/jsoh11/ExerciseLog" target="_blank">Github Repo</a>
                    </div>
                    <div className="tile is-child project-card">
                        <a className="project-link" href="https://ericduwe.github.io/dayPlanner/"><figure className="image is-3by2"><img src={dayPlanner}/></figure>Workday Planner</a>{"\n"}<a className="repo-link" href="https://github.com/ericduwe/dayPlanner" target="_blank">Github Repo</a>
                    </div>
                    <div className="tile is-child project-card">
                        <a className="project-link" href="https://rocky-beyond-24483.herokuapp.com/"><figure className="image is-3by2"><img src={budgetTracker}/></figure>Budget Tracker</a>{"\n"}<a className="repo-link" href="https://github.com/ericduwe/budgetTracker" target="_blank">Github Repo</a>
                    </div>
                    <div className="tile is-child project-card">
                        <a className="project-link" href="https://ancient-reaches-73596.herokuapp.com/notes"><figure className="image is-3by2"><img src={noteTaker}/></figure>Digital Note Taker</a>{"\n"}<a className="repo-link" href="https://github.com/jsoh11/ExerciseLog" target="_blank">Github Repo</a>
                    </div>
                </div>
            </div>
</section>

)
}

