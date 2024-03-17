function GeneralInfo({ name, email, phoneNumber }) {
  console.log(email);
  return (
    <div className="general-info">
      <h2>{name}</h2>
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>{phoneNumber}</p>
    </div>
  );
}

function Resume({ displayData }) {
  return (
    <div className="resume">
      <GeneralInfo {...displayData.generalInfo} />
    </div>
  );
}

export default Resume;
