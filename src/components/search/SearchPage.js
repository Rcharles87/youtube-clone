import { Component } from "react";
import SearchCard from './SearchCard';
import { AccountCircle, CheckCircle, MoreHoriz,} from '@material-ui/icons';
import formatDate from '../../helperFunctions/formatDate';
import "./SearchPage.css";
import { Link } from "react-router-dom";


class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            videosOnSearch : [],
            popularVideos: [],
        }
    }

     componentDidMount = () => {
        this.handleHomePageFetch()
    }



    handleHomePageFetch = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=28&regionCode=US&key=${process.env.REACT_APP_API_KEY}`)
            .then((res)=> {
                return res.json();
            }).then((data)=> {
                console.log(data.items)
                this.setState({
                    popularVideos: data.items
                })
            }).catch((err)=> console.log(err))
    } 

    render () {
        console.log(this.state.popularVideos)
        let searchVideos = this.props.searchData.map((videoObj, i)=>{
            return <SearchCard videosOnSearch={videoObj} key={i} />
        })

        let initialdisplay = this.state.popularVideos.map((videoObj, i)=>{
            return (
                <article className='search-card' alt={videoObj.snippet.channelTitle} >  
                    <Link to={`/videos/${videoObj.id}`}>            
                    <div className='search-thumbnail'> 
                        <img src={videoObj.snippet.thumbnails.medium.url} alt="video-thumbnail snippet"/>
                    </div>

                    <div className="search-title">
                        <h5>{videoObj.snippet.title}</h5> 
                    </div>
                    </Link>

                    <div className="channel-title"> 
                        <AccountCircle className='verified-icon'/> {videoObj.snippet.channelTitle} <CheckCircle className='verified'/>                     
                    </div>  

                    <div className='search-stats'>
                        <span className='search-upload-date'>{formatDate(videoObj.snippet.publishedAt)} </span>
                        <MoreHoriz className='verified-options'/>
                    </div>
                </article>
            )
        })




        return (

            <div className='search-display-container'>
                <div className='all-videos'>
                    {searchVideos.length === 0 ? initialdisplay : searchVideos }
                </div>
            </div>
          
        )
    }
}

export default SearchPage;