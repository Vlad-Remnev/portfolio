import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+7-905-770-66-64 / +7-977-326-71-98",
  email: " remnevich@gmail.com",
};

const sliderContent = {
  name: "Vladislav Remnev",
  description: `I am a frontend developer, specializing in TypeScript+React`,
  btnText: " Donwload CV",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+7-905-770-66-64">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:remnevich@gmail.com,com">
              {conctInfo.email}
            </a>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6>Hello, My name is</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                  <p className="loop-text lead">Front-end Developer</p>
                  <p className="loop-text lead"> Html/Css Developer</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="mt-4">
                  <a
                    className="px-btn px-btn-white"
                    href="img/resume.png"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/img/slider/home-banner.jpg"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
