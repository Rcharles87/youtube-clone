import  YouTube from "react-youtube";
import { Component } from "react";
import Comments from "./Comments";
import "./VideoPage.css"


class VideoPage extends Component {
  constructor() {
    super();
    this.state = {
      idNumber: ""
    }
  }

  componentDidMount = () => {
    this.setState({
      idNumber: this.props.match.params.id
    })
  }

    render(){ 

      return(
          <div >
            <div className="video-container">
              <YouTube videoId={this.state.idNumber} opts={{ height: '420', width: '1080' }}/>
            </div>
            <hr />
            <div className="comments-container">
              <Comments />
            </div>

          </div>
      ) 
    }
}
  

export default VideoPage


