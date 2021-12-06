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
                  <p>A small team of three people building a working youtube clone from scratch.</p>
              </div>

                <div className="team-bio">
                    <h3>Team Bios</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus saepe doloremque dolorum at sed cumque sequi consequuntur aliquam? Delectus optio, nam quibusdam laboriosam perferendis voluptatibus ipsum cum inventore consequatur.</p>
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