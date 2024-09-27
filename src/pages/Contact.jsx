import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-item">
        <p>Email: <a href="mailto:keith.godfrey23@gmail.com">keith.godfrey23@gmail.com</a></p>
      </div>
      <div className="contact-item">
        <p>Phone: <a href="tel:+15038208254">(503) 820-8254</a></p>
      </div>
      <div className="contact-item">
        <a href="https://github.com/Keith-Godfrey" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </div>
      <div className="contact-item">
        <a href="https://linkedin.com/in/Keith-Godfrey" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>
    </div>
  );
}
  