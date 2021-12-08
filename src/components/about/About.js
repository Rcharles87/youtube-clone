import { Component } from "react";
import "./About.css"
// import { Link } from "react-router-dom";git 



class About extends Component{

    render(){
        return(
           <div className="about-container">
               <h1>About</h1>
              <div className="project-description">
                  <h2>Project Description</h2>
                  <p>A small team of three people building a working youtube clone from scratch. 
                      A React application was created that allows users to search for YouTube videos using Google's YouTube API. 
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
                    <h3>Team Bios</h3>
                    <div className="rae">
                        <h4>Rae Charles</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus saepe doloremque dolorum at sed cumque sequi consequuntur aliquam? Delectus optio, nam quibusdam laboriosam perferendis voluptatibus ipsum cum inventore consequatur.</p>
                    </div>
                    <div className="stephanie">
                        <h4>Stephanie Reyes </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus saepe doloremque dolorum at sed cumque sequi consequuntur aliquam? Delectus optio, nam quibusdam laboriosam perferendis voluptatibus ipsum cum inventore consequatur.</p>
                    </div>
                    <div className="laiba">
                        <h4>Laiba Sajid</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus saepe doloremque dolorum at sed cumque sequi consequuntur aliquam? Delectus optio, nam quibusdam laboriosam perferendis voluptatibus ipsum cum inventore consequatur.</p>
                    </div>
                </div>

                <div className="github-links">
                    <h3>GitHub Links:</h3>
                    <a href="https://github.com/Rcharles87">Rae Charles</a>
                    <br />
                    <a href="https://github.com/stephr10452">Stephanie Reyes</a>
                    <br />
                    <a href="https://github.com/lsajid">Laiba Sajid</a>
                </div>
           </div>
        )
    }
}

export default About;