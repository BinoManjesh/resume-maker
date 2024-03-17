import "./styles/app.css";
import Forms from "./components/form/Forms.jsx";
import Resume from "./components/resume/Resume.jsx";
import { useState } from "react";

function App() {
  const generalInfo = {};
  [generalInfo.name, generalInfo.setName] = useState("");
  [generalInfo.email, generalInfo.setEmail] = useState("");
  [generalInfo.phoneNumber, generalInfo.setPhoneNumber] = useState("");
  const education = {};
  [education.school, education.setSchool] = useState("");
  [education.title, education.setTitle] = useState("");
  [education.startDate, education.setStartDate] = useState("");
  [education.endDate, education.setEndDate] = useState("");
  const experience = {};
  [experience.name, experience.setName] = useState("");
  [experience.title, experience.setTitle] = useState("");
  [experience.responsibilities, experience.setResponsibilites] = useState("");
  [experience.startDate, experience.setStartDate] = useState("");
  [experience.endDate, experience.setEndDate] = useState("");
  const displayData = { generalInfo, education, experience };

  return (
    <>
      <Forms displayData={displayData} />
      <Resume displayData={displayData} />
    </>
  );
}

export default App;
