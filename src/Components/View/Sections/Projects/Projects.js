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
              projectImage={ImageImports.ToDolist2}
              projectName={"To Do List"}
              projectContent={"To do list is a front end web application designed for user to keep records of the day to day taske he/she has to do. The app allows the user to add a tasklist and mark completed or not in front of the list item. Once completed user can also delete the task entries."}
              projectTechStack="Html, CSS, JavaScript"
              projectVisitLink="https://todo-list-priyanshu-singh.netlify.app/"
            />
            <Project
              projectImage={ImageImports.Stopwatch}
              projectName={"Stopwatch"}
              projectContent="Created a 100-hours stopwatch using Html,Css and Javascript. The UI has three buttons for Starting, Pausing and resetting the Stopwatch respectively. The stopwatch allows user to take account of time by starting it and note downthe time after pausing the clock. The stopwatch app is completely responsive to all screen sizes as well."
              projectTechStack="Html, CSS, JavaScript"
              projectVisitLink="https://100-hrs-stopwatch.netlify.app/"
            />
            <Project
              projectImage={ImageImports.PasswordGenerator}
              projectName={"Password Generator"}
              projectContent="Created a Random Password generator app. User can get a random password of any length sya 5 chars, or 7 chars etc. The applaction also allows the user to create a password of their choice by giving additional features, whether the user want a numeric only or a char only or no special char password or all caps or all small chars. The user can generate a password just by clicking desired buttons."
              projectTechStack="Html, CSS, JavaScript"
              projectVisitLink="https://password-generator-priyanshu-singh.netlify.app/"
            />
            <Project
              projectImage={ImageImports.StickyNotes}
              projectName={"Sticky Notes"}
              projectContent="Created a sticky notes app that allows user to create a new note for saving any important information in the app. The UI allows user to create as well as remove a particular note from the app. Used Html Css and javascript for designing of the app."
              projectTechStack="Html, CSS, JavaScript"
              projectVisitLink="https://priyanshu-singh-sticky-notes.netlify.app/"
            />
            <Project
              projectImage={ImageImports.Calculator}
              projectName={"Calculator"}
              projectContent="Designed and created a front end calculator that allows users to perform mathematical operations like Add, Subtract, Multiply, Divide, Root amd percentage on numbers. The UI is similar to a physical calculator, and easy to use. Used HTML CSS and Javascript to create the app. Also wrote down media querries for the app to be compatible with all screen sizes."
              projectTechStack="Html, CSS, JavaScript"
              projectVisitLink="https://calculator-priyanshu-singh.netlify.app/"
            />
          </fieldset>
          <fieldset>
            <legend>Full Stack Projects</legend>
            <Project
              projectImage={ImageImports.Quiz}
              projectName={"Quiz App"}
              projectContent="Created a MERN stack Quiz application, the user gets a list of MCQ on screen, for which they can select answer form given options, move to next and previous questions and submit once all questions are attempted. Created the UI of the application using Jsx and Css. Used React-Router for managing routes to different pages, Redux for state management and React hooks. Followed the Model, Routes and Controller architecture to create the Restful API for Backend. Used Axios for making Http requests, Mongoose for database access, Node and Express for creating server."
              projectTechStack="Mongo-Db, Express-js, Node-js, React"
              projectVisitLink="https://github.com/CHEEMS-1206/QUIZ_APP_MERN_PROJECT"
            />
            <Project
              projectImage={ImageImports.Memories}
              projectName={"Memories"}
              projectContent="Memories is a full stack web app that allows users to create post, and save them to a database for further acces, the post has a title an image and a description along with options to like or dislike the post. Used React-Router for managing routes to different pages, Redux for state management and React hooks. Followed the Model, Routes and Controller architecture to create the Restful API for Backend. Used Axios for making Http requests, Mongoose for database access, Node and Express for creating server. "
              projectTechStack="Mongo-Db, Express-js, Node-js, React"
              projectVisitLink="https://github.com/CHEEMS-1206/PET_SHOP_API_PROJECT"
            />
            <Project
              projectImage={ImageImports.ResumeMaker}
              projectName={"Resume Maker"}
              projectContent=" Resume Maker is a React based application that allows users to create Resumes and Cover letters. Used Redux for data storage and management, React-Router for creating routes and material-UI for UI. User has to chose among plenty of templates and fill forms, the application generates Resume and CoverLetters from the data entered."
              projectTechStack="Mongo-Db, Express-js, Node-js, React"
              projectVisitLink="https://github.com/CHEEMS-1206/ResumeMakerProject"
            />
          </fieldset>
        </div>
      </div>
    </>
  );
}
export default Projects;
