import { Component } from "react";
import "./NavBar.css"
import MenuIcon from "@material-ui/icons/Menu";
import { Search } from "@material-ui/icons";
import { VideoCall } from "@material-ui/icons";
import { Apps } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";
import {Info} from '@material-ui/icons';
import {Link} from 'react-router-dom';


class NavBar extends Component{
    constructor(){
        super()
        this.state={
        fetchData: [],
        userInput: ""      
        }

    }


    handleYoutubeFetch = () => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.state.userSearch}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            this.setState({
                fetchData: data.items
            })
        })
    }

    handleSearch=(event)=>{
        event.preventDefault()
        this.handleYoutubeFetch()
    }

    handleInput=(event)=>{
        this.setState({
            userSearch: event.target.value
        })
    }


    render(){
        console.log(this.state.fetchData)
        console.log(this.state.userInput)

        return(

            <div className="navbar">

                <div className="navbar-left">
                    <MenuIcon />
                <Link to="/">    
                    <img
                    className="navbar-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                    alt="" 
                    />
                 </Link>
                </div>

                <form className="navbar-input" onSubmit={this.handleSearch} >
                 <input 
                 placeholder="Search..." 
                 type="text" 
                 onInput={this.handleInput}
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