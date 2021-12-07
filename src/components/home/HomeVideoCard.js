import {Component} from 'react';

class HomeVideoCard extends Component {

    render () {
          console.log(this.props.recomendedVideosOnLoad)
          //what do i need from you tube :P
          const {contentDetails, snippet, statistics } = this.props.recomendedVideosOnLoad
        return (
            <article className='video-card' alt={snippet.localized.title}> 

                <h4>{snippet.localized.title}</h4>

                <div className='video-thumbnail'> 
                   <img src= {snippet.thumbnails.medium.url} />
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