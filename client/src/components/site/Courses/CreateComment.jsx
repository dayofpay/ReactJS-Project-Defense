import { useContext, useState } from 'react';
import './CreateComment.css';
import AuthContext from '../../../contexts/authContext';
import useForm from '../../../hooks/useForm';
import { CommentKeys } from '../../../keys/form-keys';
import { useParams } from 'react-router-dom';

export default function ShowCreateComment(){
    const {createCommentHandler,email,isAuthenticated} = useContext(AuthContext);
    const {id} = useParams();
    const [message,setMessage] = useState('');
    const {values,onChange, onSubmit, errors } = useForm(
        async () => {
          try {
            await createCommentHandler(values);
            setMessage(`Comment created successfuly!`);
          } catch (error) {
            throw new Error(error);
          }
        },
          {
              [CommentKeys.CommentContent]: "",
              [CommentKeys.CourseId] : id,
              [CommentKeys.UserEmail] : email || "guest@abv.bg",
              [CommentKeys.Username] : email ? email.split("@")[0] : 'Guest' || "Guest",
            },
          {
            [CommentKeys.CommentContent]: (value) => {
              if (!value) {
                return "Please enter valid comment !";
              }
        
              return "";
            },
            [CommentKeys.Username] : (value) => {
                if(!value){
                    return "Please enter your username";
                }
                return "";
            }
          }
        );
    return (
        <div className="comment-form-container">
  <h2>Create a Comment</h2>
  <form className="comment-form" onSubmit={onSubmit}>
    <div className="form-group">
        <p>Please login in order to create comment !</p>
      <label htmlFor="author">Your Name:</label>
      <input type="text" id={CommentKeys.Username} name={CommentKeys.Username} onChange={onChange} value={values[CommentKeys.Username]} readOnly={true} required/>
    </div>
    <div className="form-group">
      <label htmlFor="comment">Your Comment:</label>
      <textarea id={CommentKeys.CommentContent} name={CommentKeys.CommentContent} onChange={onChange} value={values[CommentKeys.CommentContent]} rows="4" required></textarea>
    </div>
    <button type="submit" disabled={!isAuthenticated}>Submit Comment</button>
  </form>
  {Object.keys(errors)
  .filter((fieldName) => errors[fieldName])
  .map((fieldName) => (
    <p key={fieldName} className='bg-danger'>
      {errors[fieldName]}
    </p>
))}
    {message && (
        <div className='success-message'>{message}</div>
    )}
</div>
    )
}