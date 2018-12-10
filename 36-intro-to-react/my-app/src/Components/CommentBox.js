import React, {Component} from 'react'
import Comment from './Comments'

const commentData = [
  {id: 1, content: "hello", author: "Ann"},
  {id: 2, content: "sup", author: "Lane"},
  {id: 3, content: "wasssuppppppp", author: "Hillary"},
]

//goal: render a comment for each object in commentData
const CommentBox = () => {
    return (
      <div className="comment-box">CommentBox
        {commentData.map(comment =>
          <Comment key={comment.id} commentObj={comment}/>)}
      </div>
    )
}

// class CommentBox extends Component {
//   render(){
//     return (
//       <div className="comment-box">CommentBox
//         <Comment />
//       </div>
//     )
//   }
// }

export default CommentBox
