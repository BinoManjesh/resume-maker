import Form from "./Form";
import Input from "./Input";
import { useState } from "react";

function Experience({ shouldExpand, toggle, displayData }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [responsibilities, setResponsibilites] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const onSubmit = () => {
    displayData.setName(name);
    displayData.setTitle(title);
    displayData.setResponsibilites(responsibilities);
    displayData.setStartDate(startDate);
    displayData.setEndDate(endDate);
  };
  const onEdit = () => {
    setName(displayData.setName);
    setTitle(displayData.title);
    setResponsibilites(displayData.responsibilities);
    setStartDate(displayData.startDate);
    setEndDate(displayData.endDate);
  };
  return (
    <Form
      heading="Experience"
      shouldExpand={shouldExpand}
      toggle={toggle}
      onSubmit={onSubmit}
      onEdit={onEdit}
    >
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
    </Form>
  );
}

export default Experience;
