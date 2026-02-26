import { useState, useRef, useEffect } from "react";
import "./style.scss";

import imgA1 from "../../assets/Img/DSA-1.png";
import imgA2 from "../../assets/Img/DSA-2.png";
import imgA3 from "../../assets/Img/DSA-3.png";
import imgA4 from "../../assets/Img/DSA-4.png";

import imgB1 from "../../assets/Img/GT-1.png";
// import imgB2 from "../../assets/Img/DSA-2.png";
// import imgB3 from "../../assets/Img/DSA-3.png";
// import imgB4 from "../../assets/Img/DSA-4.png";

import imgC1 from "../../assets/Img/KRTI-1.jpeg";
import imgC2 from "../../assets/Img/KRTI-2.jpeg";
import imgC3 from "../../assets/Img/KRTI-3.jpeg";
// import imgC4 from "../../assets/Img/KRTI-4.png";

import imgD1 from "../../assets/Img/KRBAI-1.jpeg";
// import imgD2 from "../../assets/Img/KRBAI-2.png";
// import imgD3 from "../../assets/Img/KRBAI-3.png";
// import imgD4 from "../../assets/Img/KRBAI-4.png";

function Projects() {
  const projects = [
    {
      images: [imgA1, imgA2, imgA3, imgA4],
      name: "DSA",
      summary: "I built a classification model for Satu Data UNAIR using Tensorflow to label scientific papers with their related SDGs.",
      hover: [
        "The official launching of the product. Ever since the model is continuously fine-tuned and updated with new data to maintain its performance and relevance.",
        "This is the raw correlation matrix of the dataset, which is used to analyze the relationships between different labels and identify insights.",
        "The process of training the model that can be disclosed, but the results are promising after using regularization techniques and hyperparameter tuning to optimize the model's performance.",
        "Heavy imbalance in the dataset, with one label having significantly more samples due to the institution's focus on that particular SDG, which is a common challenge in multi-label classification tasks and requires careful handling to ensure the model's performance across all labels.",
      ],
    },
    {
      images: [imgB1],
      name: "GRADTime",
      summary: "Another project for Satu Data UNAIR, where the AI Workgroup developed a model to predict the graduation time of students. Images coming soon.",
      hover: [
        "We worked on GRADTime in parallel with DSA, and both projects were launched at the same time.",
        "Beta — image 2 detailed description.",
        "Beta — image 3 detailed description.",
        "Beta — image 4 detailed description.",
      ],
    },
    {
      images: [imgC1, imgC2, imgC3],
      name: "KRTI",
      summary: "I contributed as the lead programmer of the the team. We won 4th Place in Indonesian Flying Robotics Contest (KRTI) in 2023, Vertical Take-Off and Landing (VTOL) Division, for KOMBO Universitas Airlangga.",
      hover: [
        "This is the banner of our team, along with the cup we won for placing 4th.",
        "This is our group photo and our drone, right after regional selection.",
        "I was responsible in making sure the software of the drone works as intended. We had to carefully integrate all the hardware to our self-flying algorithm, a challenge that required extensive testing and debugging.",
        "Gamma — image 4 detailed description.",
      ],
    },
    {
      images: [imgD1],
      name: "KRBAI",
      summary: "Kontes Robot Bawah Air Indonesia (images coming soon). I was the lead programmer of the team, responsible for developing the navigational algorithm of the underwater robot.",
      hover: [
        "The team, 'Nagapasa', was formed in 2023. I helped with gathering talented individuals to be part of the programming division, and we started working on the software of the robot from scratch.",
        "Delta — image 2 detailed description.",
        "Delta — image 3 detailed description.",
        "Delta — image 4 detailed description.",
      ],
    },
  ];

  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  // track when description enters viewport for animation
  const descRef = useRef(null);
  const [descVisible, setDescVisible] = useState(false);

  useEffect(() => {
    if (!descRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // entries.forEach((entry) => {
        setDescVisible(entry.isIntersecting);
        // });
        console.log('entry ', entry);
      },
      { threshold: 0.1 }
    );
    obs.observe(descRef.current);
    return () => obs.disconnect();
  }, []);

  const current = projects[active];

  return (
    <section className="projects" role="region" aria-label="Projects">
      <div className="projects__vignette" />
      <div className="projects__inner">
        <div className="projects__controls">
          <h2 className="projects__title">Projects</h2>
          <div className="projects__buttons" role="tablist">
            {["DSA", "GRADTime", "KRTI", "KRBAI"].map((label, i) => (
              <button
                key={label}
                className={`projects__btn ${i === active ? "is-active" : ""}`}
                onClick={() => {
                  setActive(i);
                  setHovered(null);
                }}
                role="tab"
                aria-selected={i === active}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={descRef}
          className={`projects__desc${descVisible ? " is-visible" : ""}`}
          aria-live="polite"
        >
          <h3 className="projects__desc-title">{current.name}</h3>
          <p className="projects__desc-summary">{current.summary}</p>
          <p
            className={`projects__desc-hover ${hovered !== null ? "is-visible" : ""}`}
            aria-live="polite"
          >
            {hovered !== null ? current.hover[hovered] : ""}
          </p>
        </div>

        <div className="projects__gallery" aria-live="polite">
          {current.images.map((src, idx) => (
            <div
              key={idx}
              className="projects__tile"
              style={{ backgroundImage: `url(${src})` }}
              role="img"
              aria-label={`Project image ${idx + 1}`}
              tabIndex={0}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(idx)}
              onBlur={() => setHovered(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
