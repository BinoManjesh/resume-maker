import "../../styles/form.css";
import EditIcon from "../../assets/edit-icon.svg";
import SubmitIcon from "../../assets/submit-icon.svg";

function Form({ heading, children, onSubmit = () => {} }) {
  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
        e.preventDefault();
        console.log("bruh");
      }}
    >
      <h2>{heading}</h2>
      {children}
      <div className="buttons">
        <button>
          <img src={SubmitIcon} alt="submit" />
        </button>
        <button>
          <img src={EditIcon} alt="edit" />
        </button>
      </div>
    </form>
  );
}

export default Form;
