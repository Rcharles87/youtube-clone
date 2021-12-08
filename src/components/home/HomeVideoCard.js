import {Component} from 'react';
import YouTube from 'react-youtube';
import './HomeCard.css'
import formatViews from '../../helperFunctions/formatViews';
import { CheckCircle } from '@material-ui/icons';


class HomeVideoCard extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    //add like, 

    render () {


        console.log(this.props.recomendedVideosOnLoad)
          //what do i need from you tube :P
        const {id, contentDetails, snippet, statistics } = this.props.recomendedVideosOnLoad

        return (
            <article className='video-card' alt={snippet.channelTitle} > 

                <div className='video-thumbnail'> 
                   {/* <YouTube videoId={id} opts={{height:'256', width:'420'}}/> */}
                   <img src={snippet.thumbnails.medium.url} />
                </div>

                <div className="video-title">
                    <h5>{snippet.localized.title}</h5>
                </div>
                
                <div className="video-details"> 
                    <p> {snippet.channelTitle} <CheckCircle className='verified'/> </p>
                    <p className='viewCount'> {formatViews(statistics.viewCount)} views</p>
                    <span> Upload Date: {snippet.publishedAt} </span>
                </div>   

            </article>
        )
    }
}

export default HomeVideoCard;