import React from "react";
import Dropdown from "./Dropdown";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Dropdown noOfItems="5" Privilege={true} />
    </div>
  );
}
