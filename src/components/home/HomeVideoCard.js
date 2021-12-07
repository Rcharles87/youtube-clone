import {Component} from 'react';
import YouTube from 'react-youtube';


class HomeVideoCard extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render () {


        console.log(this.props.recomendedVideosOnLoad)
          //what do i need from you tube :P
        const {id, contentDetails, snippet, statistics } = this.props.recomendedVideosOnLoad

        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay:1
            },
        };

        return (
            <article className='video-card' alt={snippet.channelTitle} > 

                <h4>{snippet.localized.title}</h4>

                <div className='video-thumbnail'> 
                   <YouTube videoId={id} opts={{height:'195', width:'320'}}/>
                </div>
                
                <div className="video-details"> 
                    <p> {snippet.channelTitle} </p>
                    <p className='viewCount'> {statistics.viewCount} views</p>
                </div>   

            </article>
        )
    }
}

export default HomeVideoCard;