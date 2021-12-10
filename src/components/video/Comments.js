import { Component } from "react"
import "./Comments.css"


class Comments extends Component{
 constructor(){
     super()
     this.state={
         userName:"",
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
     const {userName , comment} = this.state
        this.setState({ 
        commArr:[...this.state.commArr,{userName, comment}]
   })
}

 render(){
     let comment = this.state.commArr.map((info)=>{
         return(
                <li className="single-comment">
                    <div className="comment-info">`${info.userName}: ${info.comment}`</div>
                </li>
     )})
     
    return (
       
    <section className="comment-container"> 
        <div className="comment-form">
            <form onSubmit={this.handleSubmit}>
            
                <label htmlFor="userName"> Name </label>
                <input onInput={this.handleInput} name="userName" id="userName" value={this.state.userName} />
            
            
                <label htmlFor="comment"> Comment </label>
                <input onInput={this.handleInput} name="comment" id="comment" value={this.state.comment} />
            
                <button  type="submit"> Submit Comment</button>    
            </form>
        </div>
        <hr/>
        <ul className="comments-list">
           {comment}
        </ul>
        <hr/>

    </section>


    )
 }

}

export default Comments