import "../../styles/form.css";
import EditIcon from "../../assets/edit-icon.svg";
import SubmitIcon from "../../assets/submit-icon.svg";
import ExpandIcon from "../../assets/expand-icon.svg";
import CollapseIcon from "../../assets/collapse-icon.svg";

function Form({ heading, children, shouldExpand, toggle, onEdit, onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <h2 onClick={toggle}>{heading}</h2>
      <button className="right" type="button" onClick={toggle}>
        {shouldExpand ? (
          <img src={CollapseIcon} alt="collapse" />
        ) : (
          <img src={ExpandIcon} alt="expand" />
        )}
      </button>
      {shouldExpand && (
        <>
          <ul>{children}</ul>
          <button className="left">
            <img src={SubmitIcon} alt="submit" />
          </button>
          <button className="right" type="button" onClick={onEdit}>
            <img src={EditIcon} alt="edit" />
          </button>
        </>
      )}
    </form>
  );
}

export default Form;
