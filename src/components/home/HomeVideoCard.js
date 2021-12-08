import {Component} from 'react';
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
        const { snippet, statistics } = this.props.recomendedVideosOnLoad

        console.log(snippet.channelId)

        return (
            <article className='video-card' alt={snippet.channelTitle} > 

                <div className="try-this">
                    <h4>{snippet.localized.title}</h4>
                </div>
                <div className='video-thumbnail'> 
                   <img src={snippet.thumbnails.medium.url} alt="screen-grab"/>
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