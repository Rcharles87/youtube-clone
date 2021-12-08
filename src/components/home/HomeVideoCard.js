import {Component} from 'react';
import YouTube from 'react-youtube';
import './HomeCard.css'


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

        return (
            <article className='video-card' alt={snippet.channelTitle} > 

                <div className="try-this">
                    <h4>{snippet.localized.title}</h4>
                </div>
                <div className='video-thumbnail'> 
                   {/* <YouTube videoId={id} opts={{height:'256', width:'420'}}/> */}
                   <img src={snippet.thumbnails.medium.url} />
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