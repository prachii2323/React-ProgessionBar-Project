import React, { useState } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PDFGenerator from './PDFGenerator';
import "./App.css";



function App() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    fathersName:"",
    mothersName:"",
    tenthPercentage: "",
    tenthPassoutYear: "",
    tenthUniversity: "",
    twelfthPercentage: "",
    twelfthPassoutYear: "",
    twelfthUniversity: "",
    degreePursuing: "",
    branch: "",
    graduationUniversity: "",
    graduationPercentage: "",
    graduationPassoutYear: "",
    permanentAddress: "",
    correspondenceAddress: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
  });

  const [progress, setProgress] = useState(0);
  const [imageData, setImageData] = useState(""); 
  const [submitted, setSubmitted] = useState(false); 
  

  const steps = [
    { title: "Personal Information", icon: "👤" },
    { title: "Education Details", icon: "📚" },
    { title: "Address Information", icon: "🏠" },
    { title: "Preview", icon: "🔍" }
  ];

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
    setProgress((prevProgress) => prevProgress + 25);
  };

  const previousPage = () => {
    setPage((prevPage) => prevPage - 1);
    setProgress((prevProgress) => prevProgress - 25);
  };

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageData(e.target.result);
    };
    reader.readAsDataURL(file); 
  };

  const onSubmit = () => {
    console.log("Generating PDF...");
    setSubmitted(true); 
  };

  return (
    <div className="App">
    
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className={`step ${page >= index + 1 ? "active" : ""}`}>
            <span className="icon">{step.icon}</span>
            <span className="title">{step.title}</span>
          </div>
        ))}
      </div>
      {page === 1 && (
        <PageOne
          formData={formData}
          handleChange={handleChange}
          nextPage={nextPage}
          handleImageChange={handleImageChange}
          imageData={imageData} 
        />
      )}
      {page === 2 && (
        <PageTwo
          formData={formData}
          handleChange={handleChange}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      )}
      {page === 3 && (
        <PageThree
          formData={formData}
          handleChange={handleChange}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      )}
      {page === 4 && (
        <>
          {submitted ? ( // Render PDF preview if form is submitted
            <PDFGenerator formData={formData} imageData={imageData} />
          ) : ( // Render form preview if form is not submitted
            <PageFour
              formData={formData}
              imageData={imageData}
              previousPage={previousPage}
              onSubmit={onSubmit} // Pass onSubmit function to PageFour
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
