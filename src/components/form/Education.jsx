import Form from "./Form";
import Input from "./Input";
import { useState } from "react";

function Education({ shouldExpand, toggle, displayData }) {
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const onSubmit = () => {
    displayData.setSchool(school);
    displayData.setTitle(title);
    displayData.setStartDate(startDate);
    displayData.setEndDate(endDate);
  };
  const onEdit = () => {
    setSchool(displayData.school);
    setTitle(displayData.title);
    setStartDate(displayData.startDate);
    setEndDate(displayData.endDate);
  };
  return (
    <Form
      heading="Education Details"
      shouldExpand={shouldExpand}
      toggle={toggle}
      onSubmit={onSubmit}
      onEdit={onEdit}
    >
      <Input name="School name" value={school} setValue={setSchool} />
      <Input name="Title of study" value={title} setValue={setTitle} />
      <Input
        name="Start date"
        type="date"
        value={startDate}
        setValue={setStartDate}
      />
      <Input
        name="End date"
        type="date"
        value={endDate}
        setValue={setEndDate}
      />
    </Form>
  );
}

export default Education;
