 <!-- componentDidMount = () => {
        this.handleHomePageFetch()
  
    }



    handleHomePageFetch = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=28&regionCode=US&key=${process.env.REACT_APP_API_KEY}`)
            .then((res)=> {
                return res.json();
            }).then((data)=> {
                console.log(data.items)
                this.setState({
                    recomendedVideosOnLoad: data.items
                })
            })
    } -->