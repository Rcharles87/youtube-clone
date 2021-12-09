import { useParams  } from "react-router-dom";
import YouTube from "react-youtube";


function Videos () {
    const { id } = useParams();
      return(
          <div>
            <YouTube videoId={id}/>
          </div>
      ) 
    }
  

export default Videos