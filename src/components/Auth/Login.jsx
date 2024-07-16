import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../App.css";

export default function () {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", password: "" });

  const onLogin = () => {
    if (userData.name && userData.password) {
      toast("Welcome " + userData.name, {
        hideProgressBar: false,
        type: "success",
      });
      navigate("/appointments");
    } else {
      toast("Please enter username and password !", {
        hideProgressBar: false,
        type: "error",
      });
    }
  };
  return (
    <div className="f-box">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Log in</h5>
          <p className="card-text">Please login to view the dashboard!</p>
          <p className="card-text">
            You can use your name & any password to login !
          </p>

          <input
            value={userData.name}
            type="text"
            className="form-control "
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
            placeholder="Enter your Name"
          />
          <input
            type="password"
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
            className="form-control mt-2"
            placeholder="Enter your Password"
          />
          <button
            type="button"
            style={{ marginTop: "10px" }}
            onClick={() => {
              onLogin();
            }}
            className="btn btn-primary btn-login "
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
