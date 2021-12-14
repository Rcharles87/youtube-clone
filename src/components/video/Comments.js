import { Component } from "react"
import "./Comments.css"


class Comments extends Component{
 constructor(){
     super()
     this.state={
         comment:"",
         commArr:[]
     }
 };
  
handleInput=(event)=>{
    this.setState({
        [event.target.name]:event.target.value
    })
}

handleSubmit=(event)=>{
    event.preventDefault()
     const {  comment} = this.state
        this.setState({ 
        commArr:[...this.state.commArr,{ comment}]
   })
}

 render(){
     let comment = this.state.commArr.map((info)=>{
         return(
                <li className="single-comment">
                    <div className="comment-info"> {info.comment} </div>
                </li>
     )})
     
    return (
       
    <section className="comment-container"> 
           
        <form onSubmit={this.handleSubmit}>
            <input  onInput={this.handleInput}
            name="comment" 
            id="comment"
            placeholder="Add a comment..."
            value={this.state.comment} 
                />
            
            <button id="button" type="Submit" > Add Comment</button>   
    
        </form>
    
       
        <ul className="comments-list">
           {comment}
        </ul>
       

    </section>


    )
 }

}

export default Comments