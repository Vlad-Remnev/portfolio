import React, {useEffect} from "react";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeTwo from "./HomeDark";
import {BrowserRouter as Router} from "react-router-dom";

const App = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <ScrollToTop />
            <Router>
                <HomeTwo/>
            </Router>
            <AnimatedCursor
                innerSize={12}
                outerSize={50}
                color="255, 147, 1"
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={1}
            />
        </>
    );
};

export default App;
