import React from "react";
import "./animation.css";

import TypeIn from "./TypeIn";

const AlternatingText = (props) => {
    const [prevDisplay, setPrevDisplay] = React.useState(3);
    const [onDisplay, setOnDisplay] = React.useState(0);
    const ref = React.useRef(null);

    // setState on intervals
    React.useEffect(() => {
        const textInterval = setInterval(() => {
            setPrevDisplay((prev) => {
                return prev >= 3 ? 0 : prev + 1;
            });
            setOnDisplay((prev) => {
                return prev >= 3 ? 0 : prev + 1;
            });
        }, 2500);
        return () => {
            clearInterval(textInterval);
        };
    }, []);

    // on setState change
    React.useEffect(() => {
        const entry = ref.current.querySelectorAll(".hidden-text");
        entry[prevDisplay].classList.remove("visible-text");
        entry[onDisplay].classList.add("visible-text");
        console.log(`SWITCH ${onDisplay}`);
        console.log(`${entry[onDisplay - 1]}`);
    }, [onDisplay]);

    return (
        <div ref={ref}>
            <TypeIn tag="p" text="A developer." id="job-0" className="hidden-text" />
            <TypeIn tag="p" text="A designer." id="job-1" className="hidden-text" />
            <TypeIn tag="p" text="A robotics engineer." id="job-2" className="hidden-text" />
            <TypeIn tag="p" text="A freelancer." id="job-3" className="hidden-text" />
        </div>
    );
};

export default AlternatingText;
