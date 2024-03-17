import "../../styles/resume.css";

function GeneralInfo({ name, email, phoneNumber }) {
  return (
    <div className="general-info">
      <h2>{name}</h2>
      <div className="contacts">
        {email && (
          <p>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
        )}
        {phoneNumber && <p>Phone:{phoneNumber}</p>}
      </div>
    </div>
  );
}

function formatDate(date) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

function Education({ school, title, startDate, endDate }) {
  return (
    <div className="education">
      <h3>Education</h3>
      <hr />
      <div className="details">
        <p>{school}</p>
        {(startDate || endDate) && (
          <p>
            {formatDate(startDate)} - {formatDate(endDate)}
          </p>
        )}
        <p>{title}</p>
      </div>
    </div>
  );
}

function Experience({ name, title, responsibilities, startDate, endDate }) {
  return (
    <div className="experience">
      <h3>Experience</h3>
      <hr />
      <div className="line">
        <p>
          {title} - {name}
        </p>
        {(startDate || endDate) && (
          <p>
            {formatDate(startDate)} - {formatDate(endDate)}
          </p>
        )}
      </div>
      <ul>
        {responsibilities.split("\n").map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

function Resume({ displayData }) {
  return (
    <div className="resume">
      <GeneralInfo {...displayData.generalInfo} />
      <Education {...displayData.education} />
      <Experience {...displayData.experience} />
    </div>
  );
}

export default Resume;
