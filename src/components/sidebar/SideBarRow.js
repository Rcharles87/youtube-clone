import { Component } from "react";


class SideBarRow extends Component{

    render(){

        const { title } = this.props
        return(
            <div className="sidebar-row">
                <h2>{title}</h2>
            </div>
        )
    }
}

export default SideBarRow