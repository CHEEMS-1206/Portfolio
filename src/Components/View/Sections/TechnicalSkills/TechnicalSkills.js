import React from "react";
import "../../../Styles/TechnicalSkills.css";

import ImageImports from "../../../../Assets/Images/ImageImports";

import Menubar from "../../Menubar/Menubar";
import Skill from "../TechnicalSkills/Skill";

function TechnicalSkills() {
  return (
    <>
      <Menubar />
      <div className="section skills" id="contact">
        <div className="max-width">
          <h2 className="title">Technical Skills</h2>

          <fieldset>
            <legend className="legend">Front End</legend>
            <Skill
              techName={"HTML"}
              techPercentage="90%"
              techImage={ImageImports.Html}
            />
            <Skill
              techName={"CSS"}
              techPercentage="95%"
              techImage={ImageImports.Css}
            />
            <Skill
              techName={"SASS"}
              techPercentage="80%"
              techImage={ImageImports.Sass}
            />
            <Skill
              techName={"JavaScript"}
              techPercentage="90%"
              techImage={ImageImports.Javascript}
            />
            <Skill
              techName={"Bootstrap"}
              techPercentage="85%"
              techImage={ImageImports.Bootstrap}
            />
            <Skill
              techName={"React"}
              techPercentage="95%"
              techImage={ImageImports.React}
            />
          </fieldset>
          <fieldset>
            <legend className="legend">Back End</legend>
            <Skill
              techName={"NodeJS"}
              techPercentage="65%"
              techImage={ImageImports.NodeJS}
            />
            <Skill
              techName={"ExpressJS"}
              techPercentage="70%"
              techImage={ImageImports.ExpressJS}
            />
            <Skill
              techName={"Redis"}
              techPercentage="65%"
              techImage={ImageImports.Redis}
            />
            <Skill
              techName={"Jenkins"}
              techPercentage="65%"
              techImage={ImageImports.Jenkins}
            />
            <Skill
              techName={"Docker"}
              techPercentage="70%"
              techImage={ImageImports.Docker}
            />
            <Skill
              techName={"Selenium"}
              techPercentage="60%"
              techImage={ImageImports.Selenium}
            />
          </fieldset>
          <fieldset>
            <legend className="legend">Databases</legend>
            <Skill
              techName={"MongoDb"}
              techPercentage="85%"
              techImage={ImageImports.MongoDb}
            />
            <Skill
              techName={"Postgre-SQL"}
              techPercentage="60%"
              techImage={ImageImports.PostgreSql}
            />
            <Skill
              techName={"MySQL"}
              techPercentage="80%"
              techImage={ImageImports.MySql}
            />
          </fieldset>
          <fieldset>
            <legend className="legend">VCS and Deployement</legend>
            <Skill
              techName={"Git-GitHub"}
              techPercentage="95%"
              techImage={ImageImports.Github}
            />
            <Skill
              techName={"AWS"}
              techPercentage="75%"
              techImage={ImageImports.AWS}
            />
            <Skill
              techName={"Firebase"}
              techPercentage="80%"
              techImage={ImageImports.Firebase}
            />
            <Skill
              techName={"Linux"}
              techPercentage="90%"
              techImage={ImageImports.Linux}
            />
          </fieldset>
        </div>
      </div>
    </>
  );
}
export default TechnicalSkills;
