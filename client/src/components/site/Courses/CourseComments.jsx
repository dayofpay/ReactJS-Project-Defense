import { useEffect, useState } from 'react';
import './Comments.css';
import { getComments } from '../../../services/courseServices';
import { useParams } from 'react-router-dom';
import getAvatar from '../../../utils/getAvatar';
import convertTimestamp from '../../../utils/timeConvert';
export default function ShowComments(){

    const [comments,setComments] = useState([]);

    const {id} = useParams();
    useEffect(() => {
        getComments(id).then((response) => {
            setComments(response);
        })
    },[])
    return (
        <div className="comments-container">
            {comments.length ? (comments.map((comment,index) => 
                        <div className="comment" key={index}>
                        <div className="comment-header">
                            <img src={`https://gravatar.com/avatar/${getAvatar(comment.author_email)}.jpg`}
                                alt="User 1" className="user-image" />
                            <div className="comment-header-text">
                                <span className="comment-author">{comment.author}</span>
                                <span className="comment-date"> {convertTimestamp(comment._createdOn)}</span>
                            </div>
                        </div>
                        <div className="comment-text">
                            {comment.comment}
                        </div>
                    </div>)) : <div>No comments yet</div>}
        </div>
    )
}