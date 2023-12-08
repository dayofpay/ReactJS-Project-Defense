import { useNavigate, useParams } from "react-router-dom"
import useForm from "../../../hooks/useForm";
import { useContext, useEffect, useState } from "react";
import { CourseFileKeys } from "../../../keys/form-keys";
import AuthContext from "../../../contexts/authContext";
import styles from "../../../../public/css/custom.module.css";
import { deleteCourseFile, getCourseFiles } from "../../../services/courseServices";
import convertTimestamp from "../../../utils/timeConvert";
import useRefresh from "../../../hooks/useRefresh";
export default function EditFiles(){
    const {id} = useParams();

    const {attachFileContext} = useContext(AuthContext);
    const [message,setMessage] = useState("");
    const [files,setFiles] = useState([]);
    const { refresh, incrementRefresh } = useRefresh(); // Used to cause force re-render (For the Course Files table)
    const navigate = useNavigate();
    const deleteFile = async(fileId) => {
      deleteCourseFile(fileId).then((response) => {
       incrementRefresh();
      })
    }
    const { values, onChange, onSubmit, errors,setValues } = useForm(
        async () => {
            try {
              await attachFileContext(values);
              setMessage(`File ${values["file-name"]} created successfully!`);
              incrementRefresh();
            } catch (error) {
              throw new Error(error);
            }
          },
        {
          [CourseFileKeys.FileName] : "",
          [CourseFileKeys.FileURL] : "",
          [CourseFileKeys.CourseId] : id,
        },
        {
          [CourseFileKeys.FileURL]: (value) => {
            if (!value) {
              return "Please provide a course file URL";
            }
    
            const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      
            if (!urlRegex.test(value)) {
              return "Please enter a valid URL for the file";
            }
      
            return "";
          },
          [CourseFileKeys.FileName]: (value) => {
            if(!value){
              return "Please provide file name !";
            }
            return "";
          }
        }
      );

      useEffect(() => {
        getCourseFiles(id).then((response) => {
          if(response.hasOwnProperty('error')){
            navigate('/');
          }
          setFiles(response);
        })
      },[refresh])
    return (
      <>
        <section className="is-hero-bar">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <h1 className="title">
              Edit Course Files {id}
            </h1>
          </div>
        </section>
        <div className="card mb-6">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon"><i className="mdi mdi-ballot"></i></span>
          Manage Files
        </p>
      </header>
      <div className="card-content">
        <form onSubmit={onSubmit}>
          <input type="hidden" name={CourseFileKeys.CourseId} value={id} />
          <hr/>
          <div className="field">
            <label className="label">File URL</label>

            <div className="control">
              <input className="input" name={CourseFileKeys.FileURL} value={values[CourseFileKeys.FileURL]} onChange={onChange} type="text" placeholder="e.g. https://example.com/file_url"/>
            </div>
            <p className="help">
              This field is required
            </p>
          </div>
          <hr/>
          <div className="field">
            <label className="label">File Name</label>

            <div className="control">
              <input className="input" name={CourseFileKeys.FileName} value={values[CourseFileKeys.FileName]} onChange={onChange} type="text" placeholder="e.g. English B2"/>
            </div>
            <p className="help">
              This field is required
            </p>
          </div>
          <div className="field grouped">
            <div className="control">
              <button type="submit" onSubmit={onSubmit} onClick={() => incrementRefresh()} className="button green">
                Attach File
              </button>
            </div>
          </div>
        </form>
        {Object.keys(errors)
  .filter((fieldName) => errors[fieldName])
  .map((fieldName) => (
    <p key={fieldName} className={styles["error-message"]}>
      {errors[fieldName]}
    </p>
))}
        {message && (      <div className={styles["success-edit-msg"]}>
        File {values[CourseFileKeys.FileName]} attached successfully!
      </div>)}
      </div>
    </div>
    <div className="card has-table">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon"><i className="mdi mdi-account-multiple"></i></span>
          Course Files
        </p>
      </header>
      <div className="card-content">
        <table>
          <thead>
            <tr>
              <th>File ID</th>
              <th>File</th>
              <th>File name</th>
              <th>Attached by</th>
              <th>Created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
            {files.map((file,index) => 
                        <tr key={index}>
                        <td data-label="Name">{file._id}</td>
                        <td data-label="Name"><a href={file.course_file_url}>{file.course_file_url}</a></td>
                        <td data-label="Company">{file.course_file_name}</td>
                        <td data-label="City">{file.attached_by}</td>
                        <td data-label="Created">
                          <small className="text-gray-500" title="Oct 25, 2021">{convertTimestamp(file._createdOn)}</small>
                        </td>
                        <td className="actions-cell">
                          <div className="buttons right nowrap">
                            <button className="button small red --jb-modal" onClick={() => deleteFile(file._id)} type="button">
                              <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                            </button>
                          </div>
                        </td>
                      </tr>)}
          </tbody>

        </table>
        {!files.length && <div className="card empty">
      <div className="card-content">
        <div>
          <span className="icon large"><i className="mdi mdi-emoticon-sad mdi-48px"></i></span>
        </div>
        <p>There are no course files for this course !</p>
      </div>
    </div>}
      </div>
    </div>
      </>


    )
}