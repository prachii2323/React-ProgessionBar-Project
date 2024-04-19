import React from "react";
import "./PDFLayout.css";

const PDFLayout = ({ formData, imageData }) => {
  const additionalFields = {
    fullName: "Name",
    email: "Email ID",
    phoneNumber: "Contact Number",
    dateOfBirth: "Date Of Birth",
    gender: "Gender",
    fathersName: "Father's Name",
    mothersName: "Mother's Name",
    tenthPercentage: "10th %",
    tenthPassoutYear: "10th Passout Year",
    tenthUniversity: "10th Board",
    twelfthPercentage: "12th %",
    twelfthPassoutYear: "12th Passout Year",
    twelfthUniversity: "12th Board",
    degreePursuing: "Degree Pursing",
    branch: "Branch",
    graduationUniversity: "College Name",
    graduationPercentage: "Graduation Percentage",
    graduationPassoutYear: "Passout Year",
    permanentAddress: "Permanent Address",
    correspondenceAddress: "Correspondence Address",
    country: "Country",
    state: "State",
    city: "City",
    pinCode: "Pincode",
  };

  return (
    <div className="pdf-layout">
      <div className="form-slip">
        {imageData && (
          <div className="form-field">
            <label>Photo:</label><br />
            <img src={imageData} alt="Uploaded" className="pdf-image" />
          </div>
        )}
        <table className="data-table">
          <tbody>
            {Object.entries(additionalFields).map(([key, label]) => (
              <tr key={key}>
                <td className="label">{label}</td>
                <td className="value">{formData[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PDFLayout;
