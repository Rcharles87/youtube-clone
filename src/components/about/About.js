import { Component } from "react";
import "./About.css"
import raeProfile from './images/raeProfile.jpeg';
import laibaProfile from './images/laibaProfile.png';


class About extends Component{

    render(){
        return(
           <div className="about-container">
                <h1>About</h1>
                <div className="project-description">
                    <h2>Project Description</h2>
                    <p>A small team of three people building a working youtube clone from scratch. 
                        A React application was created. This React applications allows users to search for YouTube videos using Google's YouTube API. 
                        Once the user has entered their desired "search input", a series of videos are displayed for the user to select from. 
                        Data was retrieved from API and rendered accordingly to display desired videos. 
                        Additionally, users are able to select a video from a list to watch based on inputted fields within the search bar. 
                        The project aims to recreate parts of the YouTube application, mimicking YouTube functionality. 
                        Furthermore, YouTube Clone consists of a multiple features, such as but not limitng, to nav-Bar, home-page, and side-Bar. 
                        Components have been rendered and displayed through data to present precise information at the area of interest. 
                        When the user lands upon the home page, a series of "popular videos" are displayed. 
                        These popular videos have mounted upon initial user arrival.</p>
                </div>

                <div className="team-bio">
                    <h2>Team Bios</h2>
                    <div className="rae">
                        <h4>Rae Charles</h4>
                        <img src={raeProfile} alt="profile"/>
                        <p>I am a future Full-stack web Developer interested in creating apps with clean code and excellent UI. 
                            I am studying full-stack web development at Pursuit which is a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate whose graduates 
                            have been hired as developers at leading companies such as Pinterest, JP Morgan, and Spotify. 
                            With my art background, I have an eye for design and a creative perspective.
                            The technical skills I will learn to implement include JavaScript, HTML, CSS, Node, Express, React/Redux, PostgreSQL, APIs, Git, sprints, Agile, code reviews, Pair Programming.
                            Outside of my current training as a software developer, I am the owner and sole operator of my own website that I use to sell my art. 
                            My career goals have shifted from pursuing a career in the arts to a career in tech. 
                            I love that tech allows me to use my creativity and share content I am proud of with a larger audience.
                        </p>
                        <div className="github-links"></div>
                    </div>
                    <div className="stephanie">
                        <h4>Stephanie Reyes </h4>
                        <img src="" alt="" />
                        <p>Through out my career in social services and in the food industry I saw a common problem outdated technology. 
                            Companies had to pay outside parties to either get new software or develop a new system. 
                            I became very attracted to how technology was changing and innovating the workforce which is why I decided to take the leap into a new career to pursue software engineering. 
                            I am now a full time fellow at Pursuit were I am becoming a software engineer. 
                            The lack of women of color in the industry has inspired me to continue to become successful in this new career. 
                        </p>
                        <div className="github-links"></div>
                    </div>
                    <div className="laiba">
                        <h4>Laiba Sajid</h4>
                        <img src={laibaProfile} alt="" />
                        <p>My name is Laiba Sajid! I go by she/her. I am a Pursuit fellow with experience at the intersection of software and an environmental engineer within clean tech. 
                            My journey into software engineering began when I became frustrated with some of the tools and programs that PE is equipped with. 
                            Given my passion for problem solving I am currently working to understand the effects of garbage disposal, water treatment and air quality on different income groups and what we can do to negate the effects of climate change on marginalized communities. 
                            My skills include R+, QGIS, MATLAB, JavaScript, HTML, CSS.   What you won’t find on my resume is that I enjoy gardening and I’m currently learning how to play the piano.
                        </p>
                        <div className="github-links"></div>
                    </div>
                </div>

                <div className="github-links">
                    <h3>GitHub Links:</h3>
                    <a href="https://github.com/Rcharles87">Rae Charles</a>
                    
                    <a href="https://github.com/stephr10452">Stephanie Reyes</a>
                    
                    <a href="https://github.com/lsajid">Laiba Sajid</a>
                </div>
           </div>
        )
    }
}

export default About;