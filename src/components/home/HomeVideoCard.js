import {Component} from 'react';
import YouTube from 'react-youtube';
import './HomeCard.css'
import formatViews from '../../helperFunctions/formatViews';
import formatDate from '../../helperFunctions/formatDate'
import { AccountCircle, CheckCircle, MoreHoriz } from '@material-ui/icons';


class HomeVideoCard extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render () {

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

                <div className="channel-title"> 
                    <AccountCircle className='verified-icon'/> {snippet.channelTitle} <CheckCircle className='verified'/>                     
                </div>  

                <div className='video-stats'>
                    <span className='video-upload-date'>{formatDate(snippet.publishedAt)} </span>
                    <div className='video-view-count'>{formatViews(statistics.viewCount)} views </div> 
                    <MoreHoriz className='verified-options'/>
                </div>

            </article>
        )
    }
}

export default HomeVideoCard;