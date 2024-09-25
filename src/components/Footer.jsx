import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <p>Connect with me:</p>
      <a href="https://github.com/Keith-Godfrey" target="_blank" rel="noopener noreferrer">
      
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </a>
      <a href="https://linkedin.com/in/Keith-Godfrey" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
    </footer>
  );
}
