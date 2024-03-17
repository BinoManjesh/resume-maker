import Form from "./Form";
import Input from "./Input";
import { useState } from "react";

function Education({ shouldExpand, toggle }) {
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <Form
      heading="Education Details"
      shouldExpand={shouldExpand}
      toggle={toggle}
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
