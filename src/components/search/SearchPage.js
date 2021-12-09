import { Component } from "react";
import SearchCard from './SearchCard'
import "./SearchPage.css"

class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            videosOnSearch : []
        }
    }

   


    render () {

        let recommendedVideos = this.props.youtubeData.map((videoObj, i)=>{
            return <SearchCard videosOnSearch={videoObj} key={i} />
        })

        return (

            <div className='search-display-container'>
                <div className='all-videos'>
                    {recommendedVideos ? recommendedVideos:"no videos to display"}
                </div>
            </div>
          
        )
    }
}

export default SearchPage;