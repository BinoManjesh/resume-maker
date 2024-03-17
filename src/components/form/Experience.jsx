import Form from "./Form";
import Input from "./Input";
import { useState } from "react";

function Experience() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [responsibilities, setResponsibilites] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <Form heading="Experience">
      <ul>
        <Input name="Company name" value={name} setValue={setName} />
        <Input name="Position title" value={title} setValue={setTitle} />
        <Input
          name="Main responsibilities"
          type="textarea"
          value={responsibilities}
          setValue={setResponsibilites}
        />
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
      </ul>
    </Form>
  );
}

export default Experience;
