import { useState } from "react";
import EducationForm from "./Education";
import ExperienceForm from "./Experience";
import GeneralInfoForm from "./GeneralInfo";

function Forms() {
  const [expanded, setExpanded] = useState(-1);
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
      <GeneralInfoForm shouldExpand={expanded == 0} toggle={getToggle(0)} />
      <EducationForm shouldExpand={expanded == 1} toggle={getToggle(1)} />
      <ExperienceForm shouldExpand={expanded == 2} toggle={getToggle(2)} />
    </div>
  );
}

export default Forms;
