import { Component } from "react";
import SideBarRow from "./SideBarRow";

class SideBar extends Component{



    render(){
        return(
            <div className="sidebar-container">

                <SideBarRow title="Home"/>
                <SideBarRow title="About"/>

            </div>
        )
    }
}

export default SideBar