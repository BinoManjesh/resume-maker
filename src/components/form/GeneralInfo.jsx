import Form from "./Form";
import Input from "./Input";
import { useState } from "react";

function GeneralInfo({ shouldExpand, toggle }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Form heading="General Info" shouldExpand={shouldExpand} toggle={toggle}>
      <Input name="Name" value={name} setValue={setName} />
      <Input name="Email" type="email" value={email} setValue={setEmail} />
      <Input
        name="Phone Number"
        type="number"
        value={phoneNumber}
        setValue={setPhoneNumber}
      />
    </Form>
  );
}

export default GeneralInfo;
