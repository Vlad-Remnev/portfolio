import React from "react";

const ServiceContent = [
  {
    icon: "icon-browser",
    title: "Web Development",
    descriptions: `Making websites and landings for different companies and people
    Technologies used while working: responsive, cross-platform HTML/CSS layout based on designer's layouts,
    working with Sass/Scss, using BEM methodology `,
  },
  {
    icon: "icon-mobile",
    title: "Front-end Development",
    descriptions: `Making various projects using React/Redux. Using React Class Components as wel as Function Components.
    Connecting Front-end with Back-end with the help of Axios and RestAPIs requests`,
  },
  {
    icon: "icon-target",
    title: "Help new comers to programming",
    descriptions: `During my education process, I found out that many people can't socialize normally with others,
    so I started a group with some of them, to help them in understanding different cases, and in resolving them`,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
