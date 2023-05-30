import "../../../Styles/ProjectComponent.css";

function Project(props) {
  return (
    <div className="projectBox">
      <div className="projectImage">
        <img alt="imagee" src={props.projectImage} />
      </div>
      <div className="textSection">
        <h3>{props.projectName}</h3>
        <p>Tech Stack - {props.projectTechStack} </p>
        <div className="content">
            {props.projectContent}
        </div>
        <a href={props.projectVisitLink}>
          Visit Project
        </a>
      </div>
    </div>
  );
}

export default Project;
