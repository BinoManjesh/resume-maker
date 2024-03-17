import "./styles/app.css";
import EducationForm from "./components/form/Education.jsx";
import ExperienceForm from "./components/form/Experience.jsx";
import GeneralInfoForm from "./components/form/GeneralInfo.jsx";

function App() {
  return (
    <>
      <GeneralInfoForm />
      <EducationForm />
      <ExperienceForm />
    </>
  );
}

export default App;
