import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import {SRLWrapper} from "simple-react-lightbox";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
};

const AllPortfolioContent = [
    {
        img: "m-portfolio-1",
        title: "Social Network",
        subTitle: "Samurai way product",
        href: "https://github.com/Vlad-Remnev/Social-Network",
        alterText: "Social Network",
    },
    {
        img: "m-portfolio-2",
        title: "ToDo Lists Template",
        subTitle: "Incubator main project",
        href: "https://github.com/Vlad-Remnev/ToDo",
        alterText: "ToDo Lists",
    },
    {
        img: "m-portfolio-3",
        title: "Cinema App(React + MongoDB)",
        subTitle: "Small app for searching movies",
        href: "https://github.com/Vlad-Remnev/cinemaApp",
        alterText: "Cinema App",
    },
    {
        img: "m-portfolio-4",
        title: "Counter",
        subTitle: "Counter build with Redux/LocalStorage",
        href: "https://github.com/Vlad-Remnev/counter",
        alterText: "Counter",
    },
    {
        img: "m-portfolio-5",
        title: "Cinema App(JS + Kinopoisk server)",
        subTitle: "Small app for searching movies(first project)",
        href: "https://github.com/Vlad-Remnev/MovieApp_JS",
        alterText: "Cinema App - JS",
    },
    {
        img: "m-portfolio-6",
        title: "Books Template(JS + Node)",
        subTitle: "Books template with Back-end",
        href: "https://github.com/Vlad-Remnev/books",
        alterText: "Books template",
    }
];

const tabList = ["All"];

const Portfolio = () => {
    return (
        <SimpleReactLightbox>
            <div className="portfolio-filter-01">
                <Tabs>
                    <TabList className="filter d-flex flex-wrap justify-content-start">
                        {tabList.map((val, i) => (
                            <Tab key={i}>{val}</Tab>
                        ))}
                    </TabList>
                     End tablist

                    <SRLWrapper>
                        <TabPanel>
                            <div className="portfolio-content ">
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid"
                                    columnClassName="my-masonry-grid_column"
                                >
                                    {AllPortfolioContent.map((val, i) => (
                                        <a href={val.href} rel="noreferrer" target='_blank' className="portfolio-box-01" key={i}>
                                            <div className="portfolio-img">
                                                <div className="portfolio-info">
                                                    <h5>{val.title}</h5>
                                                    <span>{val.subTitle}</span>
                                                </div>
                                                {/* End .portfolio-info */}
                                                <div
                                                    href={`img/portfolio/${val.img}.png`}
                                                    className="gallery-link"
                                                >
                                                    <img
                                                        src={`img/portfolio/${val.img}.jpg`}
                                                        alt={val.alterText}
                                                    />
                                                </div>
                                                {/* End gallery link */}
                                            </div>
                                        </a>
                                    ))}
                                </Masonry>
                            </div>
                            {/* End list wrapper */}
                        </TabPanel>
                    </SRLWrapper>
                    {/* End tabpanel */}
                </Tabs>
            </div>
        </SimpleReactLightbox>
    );
};

export default Portfolio;
