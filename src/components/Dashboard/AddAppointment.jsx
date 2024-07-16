import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HabsContext } from "../../contexts/HabsContext";
import { toast } from "react-toastify";

export default function AddAppointment() {
  const { systemData, setSystemData, setIsLoading } = useContext(HabsContext);

  const [appointmentFormData, setAppointmentFormData] = useState({
    PatientName: "",
    id: "",
    Doctor: "",
    Date: "",
    Speciality: "",
  });

  const navigate = useNavigate();

  const onChangeOfAppointmentFormData = (param, value) => {
    setAppointmentFormData({ ...appointmentFormData, [param]: value });
  };

  const onSaveAppointment = () => {
    setIsLoading(true);
    let appointments = systemData;
    appointments.unshift(appointmentFormData);
    setSystemData(appointments);
    toast("Appoitment booked !", {
      hideProgressBar: false,
    });
    navigate("/appointments");
    setIsLoading(false);
  };

  return (
    <div>
      <div style={{ margin: "100px 400px", height: "60vh" }}>
        <form>
          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              onChange={(e) => {
                onChangeOfAppointmentFormData("PatientName", e.target.value);
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
                onChangeOfAppointmentFormData("Date", e.target.value);
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
                onChangeOfAppointmentFormData("Doctor", e.target.value);
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
                onChangeOfAppointmentFormData("Speciality", e.target.value);
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
            onClick={onSaveAppointment}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
