import React from "react";
import ImageImports from "../../../../Assets/Images/ImageImports";
import "../../../Styles/AboutMe.css";
import Menubar from "../../Menubar/Menubar";

function AboutMe() {
  return (
    <>
      <Menubar />

      {/* // <!-- section-2 'about' --> */}
      <div className="about section" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src={ImageImports.DeveloperImage} alt="developerImage" />
            </div>
            <div className="column right">
              <div className="text">
                I am Priyanshu singh, an Aspiring
                <span id="typing-2"> Software Engineer</span>.
              </div>
              <p>
                Hey there, <br />I am an undergraduate student currently in my
                prefinal year at <b>MSIT (GGSIPU)</b>. I am a passionate Web
                developer, and have created multiple projects using different
                different languages, frameworks and tools, you can find them in
                my{" "}
                <b>
                  <a href="https://github.com/CHEEMS-1206">GIT-Hub</a>
                </b>{" "}
                Repositories. Alongwith this I have also solved multiple
                problems related to Data Structures, Algorithms and Maths using
                C++ language on multiple coding platforms, like{" "}
                <b>
                  <a href="https://leetcode.com/CHEEMS-1206/">LeetCode</a>
                </b>
                ,{" "}
                <b>
                  <a href="https://www.codingninjas.com/codestudio/profile/Priyanshu1206">
                    CodeStudio
                  </a>
                </b>
                . Other than this, I have strong interests in Science and
                Literature and like to read Books in my free time.
              </p>
              <a
                href="https://drive.google.com/file/d/1gZBS0g2eo3vLJl1NBHiBG_jbldw50Ra5/view?usp=sharing"
                download="MyResume"
                id="resume"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutMe;
