import Form from "./Form";
import Input from "./Input";
import { useState } from "react";

function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Form heading="General Info">
      <ul>
        <Input name="Name" value={name} setValue={setName} />
        <Input name="Email" type="email" value={email} setValue={setEmail} />
        <Input
          name="Phone Number"
          type="number"
          value={phoneNumber}
          setValue={setPhoneNumber}
        />
      </ul>
    </Form>
  );
}

export default GeneralInfo;
