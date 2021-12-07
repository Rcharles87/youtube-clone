import { Component } from "react";
import "./NavBar.css"
import MenuIcon from "@material-ui/icons/Menu";
import { Search } from "@material-ui/icons";
import { VideoCall } from "@material-ui/icons";
import { Apps } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";


class NavBar extends Component{
    constructor(){
        super()
    }

    render(){
        return(

            <div className="navbar">

                <div className="navbar-left">
                    <MenuIcon />
                <img
                className="navbar-logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                 alt="" 
                 />
                </div>

                <div className="navbar-input">
                 <input placeholder="Search..." type="text" />
                <Search className="navbar-inputButton"/>
                </div>

                <div className="navbar-icons">
                <VideoCall className="navbar-icon"/>
                <Apps className="navbar-icon"/>
                <Notifications className="navbar-icon"/>
                </div>

  
            </div>
        )
    }
}


export default NavBar