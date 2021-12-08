import { Component } from "react";
import HomeVideoCard from './HomeVideoCard'
import './Home.css'

class Home extends Component {
    constructor() {
        super();
        //note this is data.items and if you need more its inside
        this.state = {
            recomendedVideosOnLoad : []
        }
    }

    componentDidMount = () => {
        this.handleHomePageFetch()
    }

    handleHomePageFetch = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=${process.env.REACT_APP_API_KEY}`)
            .then((res)=> {
                return res.json();
            }).then((data)=> {
                console.log(data.items)
                this.setState({
                    recomendedVideosOnLoad: data.items
                })
            })
    }


    render () {

        let recommendedVideos = this.state.recomendedVideosOnLoad.map((videoObj, i)=>{
            return <HomeVideoCard recomendedVideosOnLoad={videoObj} key={i} />
        })

        return (
            <div className='home-display-container'>
                <h2> Popular Videos </h2>
                <div className='all-videos'>

                {recommendedVideos}
                </div>

                <hr
                    style={{
                        color: 'grey',
                        backgroundColor: 'grey',
                        height: 5
                    }}
                />
                
            </div>
        )
    }
}

export default Home;