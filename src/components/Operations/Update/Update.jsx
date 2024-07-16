import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HabsContext } from "../../../contexts/HabsContext";

export default function Update() {
  const location = useLocation();
  const navigate = useNavigate();

  const { systemData, setSystemData, setIsLoading } = useContext(HabsContext);

  const [appointmentFormData, setAppointmentFormData] = useState({
    PatientName: location.state.PatientName || "",
    index: location.state.index || "",
    Doctor: location.state.Doctor || "",
    Date: location.state.Date || "",
    Speciality: location.state.Speciality || "",
  });

  const onEdit = (param, value) => {
    setAppointmentFormData({ ...appointmentFormData, [param]: value });
  };
  const onSave = () => {
    let appointments = systemData;
    console.log(appointments);
  };

  return (
    <div>
      <div style={{ margin: "100px", height: "60vh" }}>
        <form>
          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              onChange={(e) => {
                onEdit("PatientName", e.target.value);
              }}
              value={appointmentFormData.PatientName}
              className="form-control"
              placeholder="Enter Patient Name"
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              value={appointmentFormData.Date}
              onChange={(e) => {
                onEdit("Date", e.target.value);
              }}
              type="date"
              className="form-control"
              placeholder="Select Date"
            />
          </div>

          <div className="form-group">
            <label>Doctor</label>
            <input
              onChange={(e) => {
                onEdit("Doctor", e.target.value);
              }}
              value={appointmentFormData.Doctor}
              type="text"
              className="form-control"
              placeholder="Enter Doctor Name"
            />
          </div>

          <div className="form-group">
            <label>Speciality</label>
            <input
              value={appointmentFormData.Speciality}
              onChange={(e) => {
                onEdit("Speciality", e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Enter Speciality"
            />
          </div>

          <button
            style={{ marginTop: "10px" }}
            type="button"
            className="btn btn-primary"
            onClick={onSave}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
