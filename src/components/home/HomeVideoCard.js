import {Component} from 'react';
import './HomeCard.css'
import formatViews from '../../helperFunctions/formatViews';
import formatDate from '../../helperFunctions/formatDate'
import { AccountCircle, CheckCircle, MoreHoriz, DonutSmall,} from '@material-ui/icons';


class HomeVideoCard extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render () {

        const { snippet, statistics } = this.props.recomendedVideosOnLoad

        return (
            <article className='video-card' alt={snippet.channelTitle} > 
                
                <div className='video-thumbnail'> 
                   <img src={snippet.thumbnails.medium.url} alt="video-thumbnail snippet"/>
                </div>

                <div className="video-title">
                    <h5>{snippet.localized.title}</h5> 
                </div>

                <div className="channel-title"> 
                    <AccountCircle className='verified-icon'/> {snippet.channelTitle} <CheckCircle className='verified'/>                     
                </div>  

                <div className='video-stats'>
                    <div className='video-view-count'>{formatViews(statistics.viewCount)} views </div> 
                    <DonutSmall className='verified-icon-dot'/>
                    <span className='video-upload-date'>{formatDate(snippet.publishedAt)} </span>
                    <MoreHoriz className='verified-options'/>
                </div>

            </article>
        )
    }
}

export default HomeVideoCard;