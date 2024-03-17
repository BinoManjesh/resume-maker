import "../../styles/input.css";

function Input({ name, id = name, type = "text", value, setValue }) {
  const inputProps = {
    id: id,
    value: value,
    type: type,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return (
    <>
      <li className="input-field">
        <label htmlFor={id}>{name}</label>
        {type == "textarea" ? (
          <textarea {...inputProps} />
        ) : (
          <input {...inputProps} />
        )}
      </li>
    </>
  );
}

export default Input;
