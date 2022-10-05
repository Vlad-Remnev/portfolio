import React from "react";
import Social from "../Social";
import Services from "../../components/service/Service";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.jpg" alt="about-me" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Front-end Developer</p>
                  <h3>Vladislav Remnev</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className="col-lg-7 ml-auto">
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    I'm a Freelancer Front-end Developer with over 1 year of working experience.
                    I worked on various projects, using various technologies and libraries.
                    My main work on a previous job was building different landings with help of
                    HTML/CSS with JavaScript and Jquery. Now I finished my studies in React, and
                    maid some projects with this technology, which opens many ways in managing and
                    building big projects!
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Vladislav Remnev</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>24th August 1991</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>31 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Tbilisi, Georgia</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+7) 905 770 6664</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>remnevich@gmail.com</span>
                        </li>
                        <li>
                          <label>Skype: </label>
                          <span>remnevich1</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>
          <Services />
        </div>
      </section>
    </>
  );
};

export default About;
