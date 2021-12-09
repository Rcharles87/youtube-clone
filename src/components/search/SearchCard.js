import {Component} from 'react';
import './SearchCard.css'
import formatDate from '../../helperFunctions/formatDate'
import { AccountCircle, CheckCircle, MoreHoriz,} from '@material-ui/icons';
import { Link } from "react-router-dom";


class SearchCard extends Component {
   

    render () {

        const { id, snippet } = this.props.videosOnSearch
        console.log(id)

        return (
            
            <article className='search-card' alt={snippet.channelTitle} > 

                <Link to={`/videos/${id.videoId}`}>
                    <div className='search-thumbnail'> 
                        <img src={snippet.thumbnails.medium.url} alt="video-thumbnail snippet"/>
                    </div>

                    <div className="search-title">
                        <h5>{snippet.title}</h5> 
                    </div>
                </Link>

                    <div className="channel-title"> 
                        <AccountCircle className='verified-icon'/> {snippet.channelTitle} <CheckCircle className='verified'/>                     
                    </div>  

                    <div className='search-stats'>
                        <span className='search-upload-date'>{formatDate(snippet.publishedAt)} </span>
                        <MoreHoriz className='verified-options'/>
                    </div>
            </article>
        )
    }
}

export default SearchCard;