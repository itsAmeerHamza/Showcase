import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Buttons = () => {
  return (
    <div id="icon-container">
      <a
        id="github"
        href="https://github.com/itsAmeerHamza"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
      >
        <FontAwesomeIcon icon={faSquareGithub} />
      </a>
      <a
        id="linkedin"
        href="https://www.linkedin.com/in/itsameerhamza"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        id="email"
        href="mailto:hamzaameer24@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email Contact"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        id="resume"
        href="https://drive.google.com/uc?export=download&id=1MzW3M3b81GqLKkSyWnii759Swq6WLtmt"
        download="Ameer_Hamza_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Resume PDF"
      >
        <FontAwesomeIcon icon={faFilePdf} />
      </a>
    </div>
  );
};

export default Buttons;
