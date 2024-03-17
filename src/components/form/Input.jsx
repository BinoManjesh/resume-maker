import "../../styles/input.css";

function Input({ name, id = name, type = "text", value, setValue }) {
  return (
    <>
      <li className="input-field">
        <label htmlFor={id}>{name}</label>
        <input
          id={id}
          value={value}
          type={type}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </li>
    </>
  );
}

export default Input;
