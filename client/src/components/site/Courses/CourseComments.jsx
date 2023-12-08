import React, { useEffect, useState } from 'react';
import './Comments.css';
import { getComments } from '../../../services/courseServices';
import { useParams } from 'react-router-dom';
import getAvatar from '../../../utils/getAvatar';
import convertTimestamp from '../../../utils/timeConvert';

export default function ShowComments() {
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getComments(id);
                setComments(response); // Assuming response is an array
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="comments-container">
            {Array.isArray(comments) && comments.length > 0 ? (
                comments.map((comment, index) => (
                    <div className="comment" key={index}>
                        <div className="comment-header">
                            <img
                                src={`https://gravatar.com/avatar/${getAvatar(comment.author_email)}.jpg`}
                                alt="User 1"
                                className="user-image"
                            />
                            <div className="comment-header-text">
                                <span className="comment-author">{comment.author}</span>
                                <span className="comment-date"> {convertTimestamp(comment._createdOn)}</span>
                            </div>
                        </div>
                        <div className="comment-text">{comment.comment}</div>
                    </div>
                ))
            ) : (
                <div>No comments yet</div>
            )}
        </div>
    );
}
