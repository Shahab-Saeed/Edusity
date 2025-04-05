import React from "react";
import darkarrow from "../../assets/dark-arrow.png"
import "./Headerbar.css"
const Headerbar = () => {
  return (
    <div className="headerbar">
      <div className="child1">
        <p className="bold">We Ensure better education</p>
        <p className="bold">for a better world</p>
      </div>
      <div className="child2">
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge,akills and experiences needed to excel in the dynamic field
          of education
        </p>
      </div>
        <div className="child3 ">
            <p>Expolre more</p>
            <img src={darkarrow} alt="" />
        </div>
    </div>
  );
}

export default Headerbar;
