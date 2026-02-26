import "./style.scss";

function Intro() {
    return (
        <section className="intro" role="region" aria-label="Introduction">
            <div className="intro__vignette" />
            <div className="intro__content">
                <h2 className="intro__title">About me</h2>
                <h3 className="intro__subtitle">Gregory Azarya Solo</h3>
                <p className="intro__text">
                    I'm a <b>programmer</b> and a <b>data enthusiast</b>. Previously I went to <b>Airlangga University</b>, Indonesia, and studied in <b>Robotics and Artificial Intelligence Engineering</b>. My <b>experience</b> in competitions and internships helps me implement <b>solutions</b> suitable to <b>real-world</b> scenarios. I excell in both <b>technical execution</b> and <b>strategic project and team management</b>.
                </p>
                <p className="intro__text">
                    I'm eager to <b>contribute</b> my <b>skills</b> and <b>passion</b> and be a part of something <b>big</b>. I believe that with the right <b>team</b> and <b>mindset</b>, we can create something truly <b>impactful</b>.
                </p>
            </div>
        </section>
    );
}

export default Intro;