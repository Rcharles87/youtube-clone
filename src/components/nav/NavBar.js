import { Component } from "react";
import "./NavBar.css"
import MenuIcon from "@material-ui/icons/Menu";
import { Search, VideoCall, Apps, Notifications, Info } from "@material-ui/icons";
import {Link} from 'react-router-dom';


class NavBar extends Component{
    // constructor() {
    //     super();
    //     this.state = {
    //         shouldDisplayVideo: true,
    //     }
    // }


    handleSearch=(event)=>{
        event.preventDefault();
        this.props.handleYoutubeFetch();
    }


    render(){

        return(

            <div className="navbar">

                <div className="navbar-left">
                    <MenuIcon />
                    <Link to="/">    
                        <img
                        className="navbar-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                        alt="" 
                        onClick={this.props.handleResetSearch}/>
                    </Link>
                </div>

                <form className="navbar-input" onSubmit={this.handleSearch} >
                    <input 
                        placeholder="Search..." 
                        type="text" 
                        onInput={this.props.handleInput}
                        value={this.props.userInput}
                    />
                    <button>
                        <Search className="navbar-inputButton"/>
                    </button>
                </form>

                <div className="navbar-icons">
                    <VideoCall className="navbar-icon"/>
                    <Apps className="navbar-icon"/>
                    
                    <Notifications className="navbar-icon"/>

                    <Link to="/about">
                        <Info/>
                    </Link>
            
                </div>

  
            </div>
        )
    }
}


export default NavBar