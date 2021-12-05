import { Component } from "react";
import "./NavBar.css"

class Nav extends Component {
constructor(){
    super();
    this.state = {
        search:""
    }
}

handleformSubmit=(event)=>{
    event.preventDefault();
}

render(){
    return(
        <div className="Navbar">
        <article>
        <h1>
       Youtube Clone
      </h1>
      </article>
      <div>
      <form onSubmit={this.handleformSubmit}>
       <input
       type="text" name="name"
       />
       <input type="submit" value="Submit"
       />
      </form>
      </div>
      <aside>
      <h3>
          About Us 
        </h3>
        </aside>
      </div>
    )
}
}

export default Nav