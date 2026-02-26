import { useState, useEffect } from "react";
import "./style.scss";

function Hero() {
	const texts = ["A data scientist.", "A machine learning engineer.", "A tech enthusiast."];
	const [displayedText, setDisplayedText] = useState("");
	const [textIndex, setTextIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentText = texts[textIndex];
		const typingSpeed = isDeleting ? 25 : 50;
		const delayBeforeDelete = 1000;

		const timeout = setTimeout(() => {
			if (!isDeleting && charIndex < currentText.length) {
				// Typing forward
				setDisplayedText(currentText.slice(0, charIndex + 1));
				setCharIndex(charIndex + 1);
			} else if (!isDeleting && charIndex === currentText.length) {
				// Done typing, wait before deleting
				setTimeout(() => setIsDeleting(true), delayBeforeDelete);
			} else if (isDeleting && charIndex > 0) {
				// Deleting
				setDisplayedText(currentText.slice(0, charIndex - 1));
				setCharIndex(charIndex - 1);
			} else if (isDeleting && charIndex === 0) {
				// Done deleting, move to next text
				setIsDeleting(false);
				setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
			}
		}, isDeleting && charIndex === currentText.length ? delayBeforeDelete : typingSpeed);

		return () => clearTimeout(timeout);
	}, [displayedText, textIndex, charIndex, isDeleting, texts]);

	return (
		<section className="hero" role="region" aria-label="Cover section">
			<div className="hero__vignette" />
			<div className="hero__content">
				<h1 className="hero__title">Hi, I'm <span>Greg</span></h1>
				<p className="hero__subtitle">
					{displayedText}
					<span className="hero__cursor" />
				</p>
			</div>
		</section>
	);
}

export default Hero;