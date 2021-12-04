import { Component } from "react";
// import { Link } from "react-router-dom";



class About extends Component{
  

    render(){
        return(
           <div>
               <h1>About</h1>
              <div>
                  <h2>Project Description</h2>
                  <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sequi, est aliquid dolor eos magni, quidem eveniet quia labore perferendis nisi officiis facilis error esse dolores maiores recusandae consequatur laboriosam. </p>
              </div>

                <div>
                    <h3>Team bios</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus saepe doloremque dolorum at sed cumque sequi consequuntur aliquam? Delectus optio, nam quibusdam laboriosam perferendis voluptatibus ipsum cum inventore consequatur.</p>
                </div>

                <div>
                    <h3>GitHub Links</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aut illo! Adipisci molestiae perferendis, fugiat error nobis reprehenderit illo id unde sapiente officiis quaerat laborum dolor repudiandae maxime veritatis asperiores.</p>
                </div>
           </div>
        )
    }
}

export default About;