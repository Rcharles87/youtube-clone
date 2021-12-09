import {Component} from 'react';
import './HomeCard.css'
import formatDate from '../../helperFunctions/formatDate'
import { AccountCircle, CheckCircle, MoreHoriz,} from '@material-ui/icons';
import { Link } from "react-router-dom";


class HomeVideoCard extends Component {
   

    render () {

        const { id, snippet } = this.props.recomendedVideosOnLoad
        console.log(id)

        return (
            
            <article className='video-card' alt={snippet.channelTitle} > 

                <Link to={`videos/${id.videoId}`}>
                    <div className='video-thumbnail'> 
                    <img src={snippet.thumbnails.medium.url} alt="video-thumbnail snippet"/>
                    </div>

                    <div className="video-title">
                        <h5>{snippet.title}</h5> 
                    </div>
                </Link>

                    <div className="channel-title"> 
                        <AccountCircle className='verified-icon'/> {snippet.channelTitle} <CheckCircle className='verified'/>                     
                    </div>  

                    <div className='video-stats'>
                        <span className='video-upload-date'>{formatDate(snippet.publishedAt)} </span>
                        <MoreHoriz className='verified-options'/>
                    </div>
            </article>
        )
    }
}

export default HomeVideoCard;