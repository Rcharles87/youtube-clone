import { Component } from "react";
import "./SideBar.css";
import { Home, Info,  } from "@material-ui/icons";
import { Link } from "react-router-dom";

class SideBar extends Component{



    render(){
        return(
            <aside className="sidebar-container" style={{left: this.props.showSideBar ? "0px" : "-250px"}}>  
                <hr/>
                <ul className="sidebar-list">
                    <Link to="/">
                    <li className="row">
                        <div className="icon">
                            <Home />
                        </div>
                        <div className="title">
                            Home
                        </div>
                    </li>
                    </Link>
                    <hr />
                        <Link to="/about">
                    <li className="row">
                        <div className="icon">
                            <Info />
                        </div>
                        <div className="title">
                            About
                        </div>
                    </li>
                        </Link>
                        <hr/>
                   
                </ul> 

               
            </aside>
        )
    }
}

export default SideBar