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
                Hey there, <br />I am a web enthusiast, and am currently a
                junior in my bachelors at MSIT (GGSIPU). It is this passion of
                mine that encourages me to create and develope modern web
                solution for the welfare of the community world wide by using
                cutting edge technologies and frameworks. Creative and
                deliberate with my work, loves to collaborate and work in a
                team. Proficient in making user interfaces, creating databases,
                writing and testing codes and adding new features to codebases
                based on user demands. Besides developement i love to play and
                watch cricket, read books and spend time with my friends.
              </p>
              <a
                href="https://drive.google.com/file/d/1c2CYFAoFkQRFOBGFaQXdKDVVMKiH4KTU/view?usp=sharing"
                download="MyResume"
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
