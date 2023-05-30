import "../../../Styles/Skill.css";

function Skill(props) {
  return (
    <div className="skillBox">
      <div className="skillImage circle">
        <img src={props.techImage} alt="imagee"></img>
      </div>
      <h3>{props.techName}</h3>
      <span>{props.techPercentage}</span>
      <div className="line skillMeter" id={props.techName}></div>
    </div>
  );
}

export default Skill;
