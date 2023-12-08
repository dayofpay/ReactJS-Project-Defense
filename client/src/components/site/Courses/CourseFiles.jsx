import React, { useState } from 'react';
import './CourseFiles.css';

const CourseFiles = ({ courseFiles }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };
  console.log(courseFiles);
  return (
    <div className="course-files-container">
      <h2>Course Files</h2>
      <div className="files-dropdown">
        <label>Select a File:</label>
        <select onChange={(e) => handleFileSelect(JSON.parse(e.target.value))}>
          <option value="">Select a file</option>
          {courseFiles.map((file) => (
            <option key={file._id} value={JSON.stringify(file)}>
              {file.course_file_name}
            </option>
          ))}
        </select>
      </div>

      {selectedFile && (
        <div className="file-details">
          <h3>{selectedFile.course_file_name}</h3>
          <p>Attached by: {selectedFile.attached_by}</p>
          <p>Email: {selectedFile.email}</p>
          <p>Attachment URL: {selectedFile.course_file_url}</p>
        </div>
      )}

      <table className="files-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Attached By</th>
            <th>Email</th>
            <th>Attachment URL</th>
          </tr>
        </thead>
        <tbody>
          {courseFiles.map((file) => (
            <tr key={file._id} onClick={() => handleFileSelect(file)}>
              <td>{file.course_file_name}</td>
              <td>{file.attached_by}</td>
              <td>{file.email}</td>
              <td>{file.course_file_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseFiles;
