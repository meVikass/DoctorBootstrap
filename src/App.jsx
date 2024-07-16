import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { HabsContext } from "./contexts/HabsContext";
import Appointments from "./components/Dashboard/Appointments";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Route,
  Link,
  Outlet,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Update from "./components/Operations/Update/Update";
import AddAppointment from "./components/Dashboard/AddAppointment";
import Loader from "./assets/Loader";
import Auth from "./components/Auth/Auth";
import Login from "./components/Auth/Login";

import { data } from "./assets/consts";

function App() {
  const [systemData, setSystemData] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <HabsContext.Provider value={{ systemData, setSystemData, setIsLoading }}>
        <NavigationBar />

        <Router>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/appointments" element={<Appointments />} />

            <Route path="/update" element={<Update />} />
            <Route path="/add" element={<AddAppointment />} />

            <Route path="/login" element={<Login />} />

            <Route path="*" element={<p>Path not resolved</p>} />
          </Routes>
        </Router>
      </HabsContext.Provider>
      {isLoading && <Loader />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
