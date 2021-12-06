import { Component } from "react";
import YouTube from "react-youtube";

class Videos extends Component {
    constructor(){
        super()
        this.state={
            userInput: ""
        }
    }



    handleSearchform(event){
        event.preventDefault()
        // this.setState({
        //     userInput: event.target.value
        // })
        console.log(event.target.value)
    }
    

    render() {
        // console.log(this.state.userInput)

      const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  
      return(
          <div>
             <form onInput ={this.handleSearchform}>
                 <input type="text" id="search" name="search"/>
                 <input type="submit" value="submit"/>
             </form>
            <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />

          </div>
      ) 
    }
  
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }

export default Videos