import React, {Component} from 'react'

//functional Components
const Comment = (props) => {
  console.log(props.commentObj.author)
  return (
    <div className="comment">
      {`"${props.commentObj.content}" - ${props.commentObj.author}`}
    </div>
  )
}

//class Component
// class Comment extends Component{
//   render(){
//     console.log(this.props.comment.id)
//     return (
//       <div className="comment">
//         {`"${this.props.comment.content}" - ${this.props.comment.author}`}
//       </div>
//     )
//   }
// }

export default Comment
