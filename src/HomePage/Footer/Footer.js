import "./Footer.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="footer">
      <span className="footer__title">Keep in touch</span>
      <div className="socials">
        <a href="https://www.linkedin.com/in/rashita-mehta-350346197">
          <FaLinkedin size={25} />
        </a>
        <a href="https://twitter.com/rashitamehta">
          <FaTwitter size={25} />
        </a>
        <a href="https://github.com/Rashita123">
          <FaGithub size={25} />
        </a>
      </div>
      Coded with &lt;/&gt; by Rashita
    </div>
  );
};
