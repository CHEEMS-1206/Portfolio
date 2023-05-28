import React from "react";
import "../../../Styles/Home.css";

import Link from "../../CommonComponents/LinkComponent";
import Menubar from "../../Menubar/Menubar";

function Home(props) {
  return (
    <>
      <Menubar />
      <div className="home section" id="home">
        <div className="max-width">
          <div className="home-content div1">
            <div className="text-1">Hey, My name is</div>
            <div className="text-2">Priyanshu singh</div>
            <div className="text-3">
              And I am a <span id="typing-1">Web Developer</span>.
            </div>
            <Link
              href="mailto:priyanshusingh9291@gmail.com?subject=Greetings..."
              id="hire-me"
              value="Conatct Me"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
