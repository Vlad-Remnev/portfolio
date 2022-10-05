import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Front-End/Web Developer`,
    jobType: `Remote`,
    jobDuration: `June 2021 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Fmedia group",
    jobDescription: `Building different landings for company.
    In January 2022 started a website for one of the projects in the Adsbalance company (a division of Fmedia) with
    using React. Participation in the development of technical specifications and design
    the initial architecture of the application, creating an authorization form on the site, for
    further interaction between the client and the company.`,
  },
  {
    jobPosition: `Front-End/Web Developer`,
    jobType: `Remote`,
    jobDuration: `Feb 2020 - April 2021`,
    timeDuraton: `Part Time`,
    compnayName: "Freelance",
    jobDescription: `Building various projects for clients
    using freelance platforms. Mostly worked with online shops`,
  },
];

const educatonContent = [
  {
    passingYear: "2021",
    degreeTitle: "Front-End Developer",
    instituteName: "IT-INCUBATOR",
  },
  {
    passingYear: "2020",
    degreeTitle: "Front-End/Web Developer",
    instituteName: "Geek Brains",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
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
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
