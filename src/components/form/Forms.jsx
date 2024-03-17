import "../../styles/forms.css";
import { useState } from "react";
import EducationForm from "./Education";
import ExperienceForm from "./Experience";
import GeneralInfoForm from "./GeneralInfo";

function Forms({ displayData }) {
  const [expanded, setExpanded] = useState(0);
  function getToggle(index) {
    return () => {
      if (expanded == index) {
        setExpanded(-1);
      } else {
        setExpanded(index);
      }
    };
  }
  return (
    <div className="forms">
      <GeneralInfoForm
        shouldExpand={expanded == 0}
        toggle={getToggle(0)}
        displayData={displayData.generalInfo}
      />
      <EducationForm
        shouldExpand={expanded == 1}
        toggle={getToggle(1)}
        displayData={displayData.education}
      />
      <ExperienceForm
        shouldExpand={expanded == 2}
        toggle={getToggle(2)}
        displayData={displayData.experience}
      />
    </div>
  );
}

export default Forms;
