import "./style.scss";
import elegantLineSvg from "../../assets/elegant-line.svg";
import linkedinSvg from "../../assets/linkedin.svg";
import githubSvg from "../../assets/github.svg";
import instagramSvg from "../../assets/instagram.svg";
import envelopeSvg from "../../assets/envelope.svg";


function Contacts() {
	const socialLinks = [
		{ id: 1, label: "Email", url: "mailto:gregorysolo7@gmail.com", icon: envelopeSvg },
		{ id: 2, label: "LinkedIn", url: "https://www.linkedin.com/in/gregory-azarya-solo", icon: linkedinSvg },
		{ id: 3, label: "GitHub", url: "https://github.com/Greg-Solo", icon: githubSvg },
		{ id: 4, label: "Instagram", url: "https://www.instagram.com/azaryasolo/", icon: instagramSvg },
	];

	return (
		<section className="contacts" role="region" aria-label="Contacts">
			<div className="contacts__vignette" />
			<div className="contacts__content">
				<div className="contacts__left">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="contacts__circle"
              aria-label={link.label}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.icon} className="contacts__circle-icon" />
            </a>
          ))}
				</div>
				<div className="contacts__right">
					<h2 className="contacts__title">Keep in touch.</h2>
					<img src={elegantLineSvg} alt="decorative line" className="contacts__line" />
				</div>
			</div>
		</section>
	);
}

export default Contacts;
