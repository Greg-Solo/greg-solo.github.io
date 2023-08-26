import React from "react";
import "./animation.css";

const TypeIn = (props) => {
    const [isIntersecting, setIsIntersecting] = React.useState(false);
    const ref = React.useRef(null);

    // useEffect to observe target intersection
    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting); // sync state with entry
        });

        const typeEnhance = () => {
            const element = ref.current,
                text = element.innerText.split("");
            element.innerText = "";

            let typeCounter = 0;
            text.forEach((letter) => {
                const span = document.createElement("span");
                span.className = "letter before-typeIn";
                span.innerText = letter;
                span.style.animationDelay = `${typeCounter}ms`;
                // replace top code with jsx span

                typeCounter += 35;
                element.appendChild(span);
            });
        };

        typeEnhance();

        observer.observe(ref.current);
        return () => observer.disconnect(); // cleanup function
    }, []);

    // useEffect to do the changes
    React.useEffect(() => {
        const entry = ref.current.querySelectorAll(".before-typeIn");
        if (isIntersecting) {
            entry.forEach((el) => {
                // selects els with class inside ref
                el.classList.add("after-typeIn");
            });
        } else {
            entry.forEach((el) => {
                el.classList.remove("after-typeIn");
            });
        }
    }, [isIntersecting]);

    return (
        <props.tag id={props.id} ref={ref} className={props.className}>
            {props.text}
        </props.tag>
    );
};

export default TypeIn;
