import React,{useState,useEffect} from 'react'
import commentservice from '../../Services/commentservice'

const Listcomments = () => { 
    const [comments, setcomments] = useState([])
    useEffect(() => {
      commentservice.getAllComments().then((response)=>{
        setcomments(response.data)
        console.log(response.data);

      }
      ).catch(error=>{
        console.log(error);
      })
    }, [])
    
  return (
    <div className="container">
       <h2 className="text-center">Recent comments</h2>
       <table classname="table table-bordered table-striped">
          <thead>
            <th> commentid</th>
            <th>postid</th>
            <th> commenttext</th>
          </thead>
          <tbody>
            {
                comments.map(
                    comment=>
                    <tr key={comment.id}>
                        <td>comment. commentid</td>
                        <td>comment.postid</td>
                        <td>comment.commenttext</td>
                    </tr>
                )
            }
          </tbody>
       </table>
    </div>
  )
}
export default Listcomments
