import React from "react";

// import { Link } from "react-scroll";
import "./Resume2.css";
import "./Resume.css";

export default function Resume() {
  const [count, setCount] = React.useState(0);
  return (
    <div
      className="resume-container screen-container fade-in"
      id="Resume"
      style={{ opacity: 5, transform: "translateY(1px)" }}
    >
      <div className="resume-content">
        <div className="heading-container">
          <div className="screen-heading">
            <span>About Me</span>
          </div>
          <div className="screen-sub-heading">
            <span>Why Choose Me?</span>
          </div>
          <div className="heading-seperator">
            <div className="seperator-line"></div>
            <div className="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-card">
        <div className="resume-bullets">
          <div className="bullet-container">
            <div className="bullet-icons"></div>
            <div className="bullets">
              <div
                className={count === 0 ? "bullet selected-bullet" : "bullet"}
                onClick={() => setCount(0)}
              >
                <img
                  className="bullet-logo"
                  src="	https://edubaba.herokuapp.com/static/media/education.10cfa28a.svg"
                  alt="B"
                />
                <span className="bullet-label">Education</span>
              </div>
              <div
                className={count === -360 ? "bullet selected-bullet" : "bullet"}
                onClick={() => setCount(-360)}
              >
                <img
                  className="bullet-logo"
                  src="	https://edubaba.herokuapp.com/static/media/work-history.a566475d.svg
                  "
                  alt="B"
                />
                <span className="bullet-label">Work History</span>
              </div>
              <div
                className={count === -710 ? "bullet selected-bullet" : "bullet"}
                onClick={() => setCount(-710)}
              >
                <img
                  className="bullet-logo"
                  src="https://edubaba.herokuapp.com/static/media/programming-skills.d19983a9.svg"
                  alt="B"
                />
                <span className="bullet-label">Programming Skills</span>
              </div>
              <div
                className={
                  count === -1070 ? "bullet selected-bullet" : "bullet"
                }
                onClick={() => setCount(-1070)}
              >
                <img
                  className="bullet-logo"
                  src="	https://edubaba.herokuapp.com/static/media/projects.2b352a52.svg"
                  alt="B"
                />
                <span className="bullet-label">Projects</span>
              </div>
              <div
                className={
                  count === -1450 ? "bullet selected-bullet" : "bullet"
                }
                onClick={() => setCount(-1450)}
              >
                <img
                  className="bullet-logo"
                  src="https://edubaba.herokuapp.com/static/media/interests.809890a3.svg"
                  alt="B"
                />
                <span className="bullet-label">Interests</span>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-bullet-details">
          <div
            className="resume-details-carousal"
            style={{ transform: `translateY(${count + "px"})` }}
          >
            <div className="resume-screen-container" id="A">
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>University</span>
                  <div className="heading-date">1388-1400</div>
                </div>
                <div className="resume-sub-heading">
                  <span>...........</span>
                </div>
                <div className="resume-heading-description">
                  <span></span>
                </div>
              </div>
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Service status</span>
                  <div className="heading-date">1400</div>
                </div>
                <div className="resume-sub-heading">
                  <span>education pardon</span>
                </div>
                <div className="resume-heading-description">
                  <span></span>
                </div>
              </div>
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>High School </span>
                  <div className="heading-date">1388-1400</div>
                </div>
                <div className="resume-sub-heading">
                  <span>Sheikh Shahabuddin</span>
                </div>
                <div className="resume-heading-description">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="resume-screen-container" id="B">
              <div className="experience-container">
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Hosein Frontend Development</span>
                    <div className="heading-date">2021-Present</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>JUNIOR FRONTEND DEVELOPER </span>
                  </div>
                  <div className="resume-heading-description">
                    <span></span>
                  </div>
                </div>
                <div className="experience-description">
                  <span className="resume-description-text">
                    Currently working as a web developer
                  </span>
                </div>
                <div className="experience-description">
                  <span className="resume-description-text">
                    - A website as a workout that is currently in Versailles. .
                  </span>
                  <br />

                  <br />
                </div>
              </div>
            </div>
            <div className=" programming-skills-container">
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span> React JS</span>
                <div className="skill-percentage">
                  <div
                    className="active-percentage-bar"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>JavaScript</span>
                <div className="skill-percentage">
                  <div
                    className="active-percentage-bar"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>Redux</span>
                <div className="skill-percentage">
                  <div
                    className="active-percentage-bar"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>Next JS</span>
                <div className="skill-percentage">
                  <div
                    className="active-percentage-bar"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>TailwindCss</span>
                <div className="skill-percentage">
                  <div
                    className="active-percentage-bar"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>BootStrap</span>
                <div className="skill-percentage">
                  <div
                    className="active-percentage-bar"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>Git</span>
                <div className="skill-percentage">
                  <div
                    className="active-percentage-bar"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>HTML</span>
                <div className="skill-percentage">
                  <div
                    className="active-percentage-bar"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>CSS</span>
                <div className="skill-percentage">
                  <div
                    className="active-percentage-bar"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="resume-screen-container">
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Personal Portfolio Website</span>
                  <div className="heading-date">2020-2021</div>
                </div>
                <div className="resume-sub-heading">
                  <span>Technologies Used: React JS, Bootsrap</span>
                </div>
                <div className="resume-heading-description">
                  <span>
                    A Personal Portfolio website to showcase all my details and
                    projects at one place.
                  </span>
                </div>
              </div>
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Website Ui </span>
                  <div className="heading-date">2020-2021</div>
                </div>
                <div className="resume-sub-heading">
                  <span>Technologies Used: React ,TailwindCss .</span>
                </div>
                <div className="resume-heading-description">
                  <span>A website that is just a beautiful ui shape .</span>
                  <div className="resume-sub-heading">
                    <a href="https://web-zzo85j28x-hosein-mohamadi.vercel.app/">
                      Link
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Ecommerce Website </span>
                  <div className="heading-date">2020-2021</div>
                </div>
                <div className="resume-sub-heading">
                  <span>
                    Technologies Used: Mongo DB, Epress Js, React Js, Node JS,
                    Redux, Bootstrap.
                  </span>
                </div>
                <div className="resume-heading-description">
                  <span>
                    Online ecommerce website for showcasing and selling products
                    onlne with payment system integration, both Paypal and
                    Stripe
                  </span>
                </div>
              </div> */}
            </div>
            <div className="resume-screen-container">
              {/* <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Teaching</span>
                  <div></div>
                </div>
                <div className="resume-sub-heading">
                  <span></span>
                </div>
                <div className="resume-heading-description">
                  <span>
                    Apart from being a tech enthusiast and a code writer, i also
                    love to teach people what i know simply because i believe in
                    sharing.
                  </span>
                </div>
              </div> */}
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Music</span>
                  <div></div>
                </div>
                <div className="resume-sub-heading">
                  <span></span>
                </div>
                <div className="resume-heading-description">
                  <span>
                    Listening to soothing music is something i can never
                    compromise with, skimming through Spotify's pop songs charts
                    is at times the best stress reliever that i can get my hands
                    on.
                  </span>
                </div>
              </div>
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Competitive Gaming</span>
                  <div></div>
                </div>
                <div className="resume-sub-heading">
                  <span></span>
                </div>
                <div className="resume-heading-description">
                  <span>
                    I like to challenge my reflexes a lot while competing in
                    football games, pushing the rank and having interactive
                    gaming sessions excites me the most.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
