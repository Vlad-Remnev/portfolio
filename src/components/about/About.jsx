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
                    <img src="/img/about/contact.jpg" alt="contact-me" />
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
                  <h3>About Me</h3>
                </div>
                <div className="about-text">
                  <p>
                    I'm a  Frontend developer with a passion for technology and a keen sense of pride in the work I do.
                    I'm focused on delivering high quality solutions to given timelines and constantly seeking to improve my skills
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
