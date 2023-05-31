import React from "react";
import "../../../Styles/Contact.css";
import Menubar from "../../Menubar/Menubar";

// importing fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <>
      <Menubar />
      {/* <!-- section-6 contact  --> */}
      <div className="section contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact Me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in touch</div>
              <p>
                You can post your thoughts or queries by just filling up the
                form. Or can contact via following...
              </p>
              <div className="icons">
                <div className="row">
                  <FontAwesomeIcon icon="fa-solid fa-user" />
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="subtitle">Priyanshu singh</div>
                  </div>
                </div>

                <div className="row">
                  <FontAwesomeIcon icon="fa-solid fa-map-marker-alt" />
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="subtitle">
                      New palam vihar, <br />
                      Gurgaon, Haryana
                    </div>
                  </div>
                </div>

                <div className="row">
                  <FontAwesomeIcon icon="fa-solid fa-envelope" />
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="subtitle">Priyanshusingh9291@gmail.com</div>
                  </div>
                </div>

                <div className="row">
                  <FontAwesomeIcon icon="fa-solid fa-envelope" />
                  <div className="info">
                    <div className="head">Phone no.</div>
                    <div className="subtitle">8448783842</div>
                  </div>
                </div>

                <div className="row">
                  <FontAwesomeIcon icon="fa-solid fa-link"/>
                  <div className="info">
                    <div className="head">Connect</div>
                    <div className="subtitle">
                      <a
                        href="https://www.linkedin.com/in/priyanshu-singh-5a74a6211/"
                        className="connectLinks"
                      >
                        Linked-In
                      </a>
                      <a
                        href="https://github.com/CHEEMS-1206"
                        className="connectLinks"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Reach me</div>
              <form
                method="post"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_next"
                />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for reaching out.\nwe have recieved your Email."
                />
                <div className="fields">
                  <div className="field name">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name here"
                      required
                      maxLength="18"
                    />
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email here"
                      required
                      maxLength="30"
                    />
                  </div>
                </div>
                <div className="field subject">
                  <input
                    type="text"
                    name="_subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="field textarea">
                  <textarea
                    name="textArea"
                    id="textArea"
                    placeholder="Description"
                    cols="30"
                    rows="10"
                    required
                    maxLength="500"
                  ></textarea>
                </div>
                <div className="button">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;


// two things left >> firts using fontawesome and second using formsubmit