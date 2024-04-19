import React, { useState } from "react";
import "./App.css";

const PageOne = ({ formData, handleChange, nextPage, handleImageChange, imageData }) => {
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    const email = e.target.value;
    handleChange("email", email);

    const emailPattern = /^[^\s@]+@gmail\.com$/;
    const isValidEmail = emailPattern.test(email);

    setEmailError(isValidEmail ? "" : "Please enter a valid email address ending with @gmail.com");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageChange(file);
    }
  };

  return (
    <div className="page">
      <h2 className="title">Personal Information</h2>
      <div className="form-group">
        <label htmlFor="fullName" className="bold-label">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          placeholder="Enter Full Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="bold-label">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleEmailChange}
          placeholder="Enter Email"
        />
        {emailError && <span className="error">{emailError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber" className="bold-label">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) => handleChange("phoneNumber", e.target.value)}
          placeholder="Enter Phone Number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateOfBirth" className="bold-label">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={(e) => handleChange("dateOfBirth", e.target.value)}
          placeholder="Enter Date of Birth"
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender" className="bold-label">Gender:</label>
        <select
          id="gender"
          value={formData.gender}
          onChange={(e) => handleChange("gender", e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="fathersName" className="bold-label">Father's Name:</label>
        <input
          type="text"
          id="fathersName"
          value={formData.fathersName}
          onChange={(e) => handleChange("fathersName", e.target.value)}
          placeholder="Enter Father's Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="mothersName" className="bold-label">Mother's Name:</label>
        <input
          type="text"
          id="mothersName"
          value={formData.mothersName}
          onChange={(e) => handleChange("mothersName", e.target.value)}
          placeholder="Enter Mother's Name"
        />
      </div>
      <div className="image-container">
        <label htmlFor="imageUpload" className="bold-label">Upload Image:</label>
        <input type="file" id="imageUpload" onChange={handleFileChange} accept="image/*" />
        {imageData && <img src={imageData} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
      </div>
      <button className="next" onClick={nextPage}>Next</button>
    </div>
  );
};

export default PageOne;
