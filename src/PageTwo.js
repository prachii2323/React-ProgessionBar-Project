import React from "react";
import "./App.css";

const PageTwo = ({ formData, handleChange, nextPage, previousPage }) => {
  return (
    <div className="page">
      <h2 className="title">Education Details</h2>
      <div className="form-group">
        <label className="label" htmlFor="tenthPercentage">10th Percentage:</label>
        <input
          id="tenthPercentage"
          type="number"
          value={formData.tenthPercentage}
          onChange={(e) => handleChange("tenthPercentage", e.target.value)}
          placeholder="Enter 10th Percentage"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="tenthPassoutYear">10th Passout Year:</label>
        <input
          id="tenthPassoutYear"
          type="number"
          value={formData.tenthPassoutYear}
          onChange={(e) => handleChange("tenthPassoutYear", e.target.value)}
          placeholder="Enter 10th Passout Year"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="tenthUniversity">10th Board:</label>
        <input
          id="tenthUniversity"
          type="text"
          value={formData.tenthUniversity}
          onChange={(e) => handleChange("tenthUniversity", e.target.value)}
          placeholder="Enter 10th Board"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="twelfthPercentage">12th Percentage:</label>
        <input
          id="twelfthPercentage"
          type="number"
          value={formData.twelfthPercentage}
          onChange={(e) => handleChange("twelfthPercentage", e.target.value)}
          placeholder="Enter 12th Percentage"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="twelfthPassoutYear">12th Passout Year:</label>
        <input
          id="twelfthPassoutYear"
          type="number"
          value={formData.twelfthPassoutYear}
          onChange={(e) => handleChange("twelfthPassoutYear", e.target.value)}
          placeholder="Enter 12th Passout Year"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="twelfthUniversity">12th Board:</label>
        <input
          id="twelfthUniversity"
          type="text"
          value={formData.twelfthUniversity}
          onChange={(e) => handleChange("twelfthUniversity", e.target.value)}
          placeholder="Enter 12th Board"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="graduationUniversity">College Name:</label>
        <input
          id="graduationUniversity"
          type="text"
          value={formData.graduationUniversity}
          onChange={(e) => handleChange("graduationUniversity", e.target.value)}
          placeholder="Enter College Name"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="degreePursuing">Degree Pursuing:</label>
        <input
          id="degreePursuing"
          type="text"
          value={formData.degreePursuing}
          onChange={(e) => handleChange("degreePursuing", e.target.value)}
          placeholder="Enter Degree Pursuing"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="branch">Branch:</label>
        <select
          id="branch"
          value={formData.branch}
          onChange={(e) => handleChange("branch", e.target.value)}
          className="input-field"
        >
          <option value="">Select Branch</option>
          <option value="Computer Science Engineering">Computer Science Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Electronics Engineering">Electronics Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Aerospace Engineering">Aerospace Engineering</option>
          <option value="Automobile Engineering">Electrical Engineering</option>
          <option value="Biotechnology Engineering">Information technology Engineering</option>
        </select>
      </div>
      <div className="form-group">
        <label className="label" htmlFor="graduationPercentage">Graduation Percentage:</label>
        <input
          id="graduationPercentage"
          type="number"
          value={formData.graduationPercentage}
          onChange={(e) => handleChange("graduationPercentage", e.target.value)}
          placeholder="Enter Graduation Percentage"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="graduationPassoutYear">Graduation Passout Year:</label>
        <input
          id="graduationPassoutYear"
          type="number"
          value={formData.graduationPassoutYear}
          onChange={(e) => handleChange("graduationPassoutYear", e.target.value)}
          placeholder="Enter Graduation Passout Year"
          className="input-field"
        />
      </div>
      
      <div className="button-group">
        <button onClick={previousPage} className="button">Previous</button>
        <button onClick={nextPage} className="button">Next</button>
      </div>
    </div>
  );
};

export default PageTwo;
