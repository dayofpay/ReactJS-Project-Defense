import { useState, useEffect, useRef } from 'react';
import { getStudentName, getUserDetails } from '../../../services/userServices';
import convertTimestamp from '../../../utils/timeConvert';
import useRefresh from '../../../hooks/useRefresh';
import LoadingAnimation from '../../global/Loading';
import { Link } from 'react-router-dom';

export default function ShowStudents({ students }) {
  const [studentDetails, setStudentDetails] = useState([]);
  const { refresh, incrementRefresh } = useRefresh();
  useEffect(() => {
    const fetchData = async () => {
      if (students.course_students) {
        const details = await Promise.all(
          students.course_students.map(async (student) => {
            const response = await getUserDetails(student,'email');
            return response;
          })
        );
        setStudentDetails(details);
      }
    };

    fetchData();
  }, [students.course_students,refresh]);

  if (!students.course_students) {
    return <LoadingAnimation/>;
  }
    return (
        <div className="card has-table">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon"><i className="mdi mdi-account-multiple"></i></span>
          Students
        </p>
      </header>
      <div className="card-content">
        <table>
          <thead>
          <tr>
            <th className="image-cell"></th>

            <th>Student Name</th>
            <th>Student Email</th>
            <th>Student Balance</th>
            <th>Register Date</th>
            <th>Is Staff</th>
          </tr>
          </thead>
          <tbody>
            {students.course_students.map((student,value) =>           <tr key={value}>
            <td className="checkbox-cell">
              <label className="checkbox">
                <input type="checkbox"/>
                <span className="check"></span>
              </label>
            </td>

            <td data-label="Name">{getStudentName(student)}</td>
            <td data-label="Student">{student}</td>

            <td data-label="isStaff">{studentDetails?.[value]?.["balance"] === undefined ? 'Unknown' : studentDetails?.[value]?.["balance"]} $</td>
            <td data-label="Created">
              <small className="text-gray-500" title={convertTimestamp(studentDetails?.[value]?.["_createdOn"])}>{convertTimestamp(studentDetails?.[value]?.["_createdOn"])}</small>
            </td>
            <td data-label="isStaff">{studentDetails?.[value]?.["isStaff"] === true ? 'Yes' : 'No'}</td>
            <td className="actions-cell">
              <div className="buttons right nowrap">
                <Link className="button small green --jb-modal" to={'/edit-user/' + studentDetails?.[value]?.["_id"]} data-target="sample-modal-2" type="button">
                  <span className="icon"><i className="mdi mdi-eye"></i></span>
                </Link>
              </div>
            </td>
          </tr>)}
          </tbody>
        </table>
      </div>
    </div>
    )
}