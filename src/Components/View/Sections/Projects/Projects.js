import React from "react";
import "../../../Styles/Projects.css";

import ImageImports from "../../../../Assets/Images/ImageImports";

import Menubar from "../../Menubar/Menubar";
import Project from "./Project";

function Projects() {
  return (
    <>
      <Menubar />
      <div className="myworks section" id="myworks">
        <div className="max-width">
          <h2 className="title">My Projects</h2>
          {/* // render projects one by one  */}
          <fieldset>
            <legend>Front End Projects</legend>
            <Project
              projectImage={ImageImports.StonePaperScissors}
              projectName={"Stone Papers Scissors"}
              projectContent=" It is a simple front end game where the user has to select from Stone, Paper and Scissor corresponding to which the computer chooses randomly and the winner is decided after comparing the two choices.  Used Html and Css for the UI of the game, and Javascript for the Dom manipulation. The game is a 10 round long game where the final winner is decided on the basis of player with most round wins."
              projectTechStack="Html, CSS, JavaScript"
              projectVisitLink="https://stone-paper-scissor-priyanshu-singh.netlify.app/"
            />
            <Project
              projectImage={ImageImports.Calculator}
              projectName={"Calculator"}
              projectContent="It is a simple front end game where the user has to select from Stone, Paper and Scissor corresponding to which the computer chooses randomly and the winner is decided after comparing the two choices.  Used Html and Css for the UI of the game, and Javascript for the Dom manipulation. The game is a 10 round long game where the final winner is decided on the basis of player with most round wins."
              projectTechStack="Html, CSS, JavaScript"
              projectVisitLink="https://calculator-priyanshu-singh.netlify.app/"
            />
            <Project
              projectImage={ImageImports.Stopwatch}
              projectName={"Stopwatch"}
              projectContent="It is a simple front end game where the user has to select from Stone, Paper and Scissor corresponding to which the computer chooses randomly and the winner is decided after comparing the two choices.  Used Html and Css for the UI of the game, and Javascript for the Dom manipulation. The game is a 10 round long game where the final winner is decided on the basis of player with most round wins."
              projectTechStack="Html, CSS, JavaScript"
              projectVisitLink="https://100-hrs-stopwatch.netlify.app/"
            />
            <Project
              projectImage={ImageImports.PasswordGenerator}
              projectName={"Password Generator"}
              projectContent="It is a simple front end game where the user has to select from Stone, Paper and Scissor corresponding to which the computer chooses randomly and the winner is decided after comparing the two choices.  Used Html and Css for the UI of the game, and Javascript for the Dom manipulation. The game is a 10 round long game where the final winner is decided on the basis of player with most round wins."
              projectTechStack="Html, CSS, JavaScript"
              projectVisitLink="https://password-generator-priyanshu-singh.netlify.app/"
            />
            <Project
              projectImage={ImageImports.StickyNotes}
              projectName={"Sticky Notes"}
              projectContent="It is a simple front end game where the user has to select from Stone, Paper and Scissor corresponding to which the computer chooses randomly and the winner is decided after comparing the two choices.  Used Html and Css for the UI of the game, and Javascript for the Dom manipulation. The game is a 10 round long game where the final winner is decided on the basis of player with most round wins."
              projectTechStack="Html, CSS, JavaScript"
              projectVisitLink="https://priyanshu-singh-sticky-notes.netlify.app/"
            />
            <Project
              projectImage={ImageImports.ToDolist2}
              projectName={"To Do List"}
              projectContent="It is a simple front end game where the user has to select from Stone, Paper and Scissor corresponding to which the computer chooses randomly and the winner is decided after comparing the two choices.  Used Html and Css for the UI of the game, and Javascript for the Dom manipulation. The game is a 10 round long game where the final winner is decided on the basis of player with most round wins."
              projectTechStack="Html, CSS, JavaScript"
              projectVisitLink="https://todo-list-priyanshu-singh.netlify.app/"
            />
          </fieldset>
          <fieldset>
            <legend>Full Stack Projects</legend>
            <Project
              projectImage={ImageImports.ResumeMaker}
              projectName={"Resume Maker"}
              projectContent=" It is a simple front end game where the user has to select from Stone, Paper and Scissor corresponding to which the computer chooses randomly and the winner is decided after comparing the two choices.  Used Html and Css for the UI of the game, and Javascript for the Dom manipulation. The game is a 10 round long game where the final winner is decided on the basis of player with most round wins."
              projectTechStack="Mongo-Db, Express-js, Node-js, React"
              projectVisitLink="https://github.com/CHEEMS-1206/ResumeMakerProject"
            />
            <Project
              projectImage={ImageImports.Quiz}
              projectName={"Quiz App"}
              projectContent="It is a simple front end game where the user has to select from Stone, Paper and Scissor corresponding to which the computer chooses randomly and the winner is decided after comparing the two choices.  Used Html and Css for the UI of the game, and Javascript for the Dom manipulation. The game is a 10 round long game where the final winner is decided on the basis of player with most round wins."
              projectTechStack="Mongo-Db, Express-js, Node-js, React"
              projectVisitLink="https://github.com/CHEEMS-1206/QUIZ_APP_MERN_PROJECT"
            />
            <Project
              projectImage={ImageImports.Memories}
              projectName={"Memories"}
              projectContent="It is a simple front end game where the user has to select from Stone, Paper and Scissor corresponding to which the computer chooses randomly and the winner is decided after comparing the two choices.  Used Html and Css for the UI of the game, and Javascript for the Dom manipulation. The game is a 10 round long game where the final winner is decided on the basis of player with most round wins."
              projectTechStack="Mongo-Db, Express-js, Node-js, React"
              projectVisitLink="https://github.com/CHEEMS-1206/PET_SHOP_API_PROJECT"
            />
          </fieldset>
        </div>
      </div>
    </>
  );
}
export default Projects;
