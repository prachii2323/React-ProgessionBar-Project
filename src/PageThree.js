import React from "react";
import "./App.css";

const PageThree = ({ formData, handleChange, previousPage, nextPage }) => {
  return (
    <div className="page">
      <h2 className="title">Address Details</h2>
      <div className="form-group">
        <label htmlFor="permanentAddress" className="bold-label">Permanent Address:</label>
        <textarea
          id="permanentAddress"
          value={formData.permanentAddress}
          onChange={(e) => handleChange("permanentAddress", e.target.value)}
          placeholder="Enter Permanent Address"
          className="address-textarea"
        />
      </div>
      <div className="form-group">
        <label htmlFor="correspondenceAddress" className="bold-label">Correspondence Address:</label>
        <textarea
          id="correspondenceAddress"
          value={formData.correspondenceAddress}
          onChange={(e) => handleChange("correspondenceAddress", e.target.value)}
          placeholder="Enter Correspondence Address"
          className="address-textarea"
        />
      </div>
      <div className="form-group">
        <label htmlFor="country" className="bold-label">Country:</label>
        <input
          type="text"
          id="country"
          value={formData.country}
          onChange={(e) => handleChange("country", e.target.value)}
          placeholder="Enter Country"
        />
      </div>
      <div className="form-group">
        <label htmlFor="state" className="bold-label">State:</label>
        <input
          type="text"
          id="state"
          value={formData.state}
          onChange={(e) => handleChange("state", e.target.value)}
          placeholder="Enter State"
        />
      </div>
      <div className="form-group">
        <label htmlFor="city" className="bold-label">City:</label>
        <input
          type="text"
          id="city"
          value={formData.city}
          onChange={(e) => handleChange("city", e.target.value)}
          placeholder="Enter City"
        />
      </div>
      <div className="form-group">
        <label htmlFor="pinCode" className="bold-label">Pin Code:</label>
        <input
          type="text"
          id="pinCode"
          value={formData.pinCode}
          onChange={(e) => handleChange("pinCode", e.target.value)}
          placeholder="Enter Pin Code"
        />
      </div>
      <div className="prev-nxt">
        <button className="pr" onClick={previousPage}>Previous</button>
        <button className="nx" onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default PageThree;
