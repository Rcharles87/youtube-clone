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
        commArr:[...this.state.commArr,{userName, comment}],
        comment:"",
        userName:"",
   })
}

 render(){
    
    return (
    <section>
        <form onSubmit={this.handleSubmit}>
            <div className="name-conatiner">
                <label htmlFor="userName"> Name </label>
                <input onInput={this.handleInput} name="userName" id="userName" value={this.state.userName} />
            </div>
            <div className="comment-container">
                <label htmlFor="comment"> Comment </label>
                <input onInput={this.handleInput} name="comment" id="comment" value={this.state.comment} />
            </div>
                <button>Submit</button>    
        </form>
        <ul>
            {this.state.commArr.map(info=><li><><h3>{info.userName}</h3><div>{info.comment}</div></></li>)}
        </ul>
    </section>


    )
 }

}

export default Comments