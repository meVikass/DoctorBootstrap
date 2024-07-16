import React, { useContext, useEffect } from "react";
import { HabsContext } from "../../contexts/HabsContext";
import {
  Route,
  Link,
  Outlet,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import AddAppointment from "./AddAppointment";
import { toast } from "react-toastify";

export default function Appointments() {
  const { systemData, setSystemData, setIsLoading } = useContext(HabsContext);
  const navigate = useNavigate();

  const onDeleteAppointment = (index) => {
    let appointments = systemData;
    appointments.splice(index, 1);
    setSystemData(appointments);
    toast("Deleted !", {
      hideProgressBar: false,
    });
    navigate("/appointments");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "#e7e7e7",
          paddingLeft: "40px",
        }}
      >
        <Link to="/add">
          <button className="btn btn-primary m-2">Add a new appointment</button>
        </Link>
      </div>
      <div
        style={{
          margin: "40px",
          maxHeight: "70vh",
          overflowY: "scroll",
        }}
      >
        {systemData && (
          <table className="table table-bordered">
            <thead className="thead-light ">
              <tr>
                <th scope="col">Patient Name</th>
                <th scope="col">Date</th>
                <th scope="col">Doctor</th>
                <th scope="col">Speciality</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {systemData.reverse().map((dataPoint, index) => {
                return (
                  <tr key={index}>
                    <td>{dataPoint.PatientName}</td>
                    <td>{dataPoint.Date}</td>
                    <td>{dataPoint.Doctor}</td>
                    <td>{dataPoint.Speciality}</td>
                    <td>
                      {/* <Link to="/update"> */}
                      <button
                        onClick={() => {
                          navigate("/update", { state: dataPoint });
                        }}
                        className="btn btn-outline-primary me-1"
                      >
                        Update
                      </button>
                      {/* </Link> */}

                      <button
                        onClick={() => {
                          onDeleteAppointment(index);
                        }}
                        className="btn btn-outline-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
