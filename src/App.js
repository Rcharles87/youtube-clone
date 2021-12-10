import { Component } from 'react';
import './App.css';
import About from './components/about/About';
import Nav from './components/nav/NavBar';
import VideoPage from './components/video/VideoPage';
import SearchPage from './components/search/SearchPage';
import SideBar from './components/sidebar/SideBar';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state={

    searchData: [],
    userInput: "",
    showSideBar: false,      
    }


}



handleYoutubeFetch = (url) => {
  //fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=28&regionCode=US&key=${process.env.REACT_APP_API_KEY}`)
  //do not pass key, raise youtube state
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.state.userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
  .then((res)=>{
      return res.json()
  }).then((data)=>{
      this.setState({
          searchData: data.items
      })
  })
}

handleInput=(event)=>{
  this.setState({
      userInput: event.target.value
  })
}


handleToggleSideBar=()=>{
  this.setState({
    showSideBar: !this.state.showSideBar
  })
}

handleResetSearch = ()=> {
  this.setState({
    searchData:[],
    userInput:"",
  })
}





  render(){

    return (
      <div>


        <Nav userInput={this.state.userInput} handleInput={this.handleInput} handleYoutubeFetch={this.handleYoutubeFetch} handleToggleSideBar={this.handleToggleSideBar} handleResetSearch={this.handleResetSearch}/>
        <SideBar showSideBar={this.state.showSideBar}/>


        <Switch>
          <Route exact path="/">
            <SearchPage searchData={this.state.searchData} />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/videos/:id" component={VideoPage} />

        </Switch>
      </div>
    );

  }
}

export default App;