import bookSearch from '../images/booksearch.png';
import budgetTracker from '../images/budgettracker.png';
import employeeManager from '../images/employeemanager.png';
import feedingTimeTracker from '../images/feedingtimetracker.png';
import siteMate from '../images/sitemate.png';
import teamProfileGenerator from '../images/teamprofilegenerator.png';

const Portfolio = () => {

    return (
        <div class="portfolio">
        <div class="portfolio-content">
            <article class="sample-work">
                <div class="sample-work-title">
                    <h3>Site Mate</h3>
                    <a href="https://github.com/Normksb/site-mate" target="_blank" rel="noreferrer">
                        github <i class="fab fa-github"></i>
                    </a>
                </div>
                <a href="https://construction-site-mate.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img src={siteMate} alt="site mate" class="sample-work-image"/>
                </a>
            </article>
            <article class="sample-work">
                <div class="sample-work-title">
                    <h3>Employee Manager</h3>
                    <a href="https://github.com/Normksb/employee-manager" target="_blank" rel="noreferrer">
                        github <i class="fab fa-github"></i>
                    </a>
                </div>
                <a href="https://github.com/Normksb/employee-manager" target="_blank" rel="noreferrer">
                    <img src={employeeManager} alt="Employee Manager" class="sample-work-image"/>
                </a>
            </article>
            <article class="sample-work">
                <div class="sample-work-title">
                    <h3>Feeding Time Tracker</h3>
                    <a href="https://github.com/yurikitchin/Project1-FeedingTimeTracker" target="_blank" rel="noreferrer">
                        github <i class="fab fa-github"></i>
                    </a>
                </div>
                <a href="https://yurikitchin.github.io/Project1-FeedingTimeTracker/" target="_blank" rel="noreferrer">
                    <img src={feedingTimeTracker} alt="Feeding Time Tracker" class="sample-work-image"/>
                </a>
            </article>
            <article class="sample-work">
                <div class="sample-work-title">
                    <h3>Budget Tracker</h3>
                    <a href="https://github.com/Normksb/PWA-Budget-Tracker" target="_blank" rel="noreferrer">
                        github <i class="fab fa-github"></i>
                    </a>
                </div>
                <a href="https://nk-budget-tracker.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img src={budgetTracker} alt="Budget Tracker" class="sample-work-image"/>
                </a>
            </article>
            <article class="sample-work">
                <div class="sample-work-title">
                    <h3>Team Profile Generator</h3>
                    <a href="https://github.com/Normksb/team-profile-generator" target="_blank" rel="noreferrer">
                        github <i class="fab fa-github"></i>
                    </a>
                </div>
                <a href="https://github.com/Normksb/team-profile-generator" target="_blank" rel="noreferrer">
                    <img src={teamProfileGenerator} alt="Team Profile Generator" class="sample-work-image"/>
                </a>
            </article>
            <article class="sample-work">
                <div class="sample-work-title">
                    <h3>Book Search Engine</h3>
                    <a href="https://github.com/Normksb/Book-Search-Engine" target="_blank" rel="noreferrer">
                        github <i class="fab fa-github"></i>
                    </a>
                </div>
                <a href="https://nk-book-search-engine.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img src={bookSearch} alt="Book Search" class="sample-work-image"/>
                </a>
            </article>


        </div>
    </div>
    )
}

export default Portfolio;