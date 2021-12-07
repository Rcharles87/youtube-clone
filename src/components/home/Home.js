import { Component } from "react";
import HomeVideoCard from './HomeVideoCard'

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
            <div id='home-display-container'>
                <div id='all-videos'>

                <h2> Popular Videos </h2>
                {recommendedVideos}
                </div>
            </div>
        )
    }
}

export default Home;