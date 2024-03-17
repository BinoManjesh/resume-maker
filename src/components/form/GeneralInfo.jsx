import Form from "./Form";
import Input from "./Input";
import { useState } from "react";

function GeneralInfo({ shouldExpand, toggle, displayData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const onSubmit = () => {
    console.log("submit");
    displayData.setName(name);
    displayData.setEmail(email);
    displayData.setPhoneNumber(phoneNumber);
  };
  const onEdit = () => {
    console.log("edit");
    setName(displayData.name);
    setEmail(displayData.email);
    setPhoneNumber(displayData.phoneNumber);
  };
  return (
    <Form
      heading="General Info"
      shouldExpand={shouldExpand}
      toggle={toggle}
      onSubmit={onSubmit}
      onEdit={onEdit}
    >
      <Input name="Name" value={name} setValue={setName} />
      <Input name="Email" type="email" value={email} setValue={setEmail} />
      <Input
        name="Phone Number"
        type="tel"
        value={phoneNumber}
        setValue={setPhoneNumber}
      />
    </Form>
  );
}

export default GeneralInfo;
