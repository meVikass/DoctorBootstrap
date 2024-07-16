import React from "react";
import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-container">
        <div style={{ margin: "0px" }}>
          <Oval height={40} width={40} color="#183693" />
        </div>
      </div>
    </div>
  );
}
