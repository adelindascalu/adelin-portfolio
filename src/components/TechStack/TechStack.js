import "./TechStack.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

export default function TechStack() {
  return (
    <section className='tech-stack-section'>
      <div className='container'>
        <h2 className='heading-tertiary tech-stack-title'>Tech Stack</h2>
        <div className='tech-logos'>
          <FontAwesomeIcon icon={faHtml5} className='tech-icon' />
          <FontAwesomeIcon icon={faCss3} className='tech-icon' />
          <FontAwesomeIcon icon={faJs} className='tech-icon' />
          <FontAwesomeIcon icon={faReact} className='tech-icon' />
          <FontAwesomeIcon icon={faGit} className='tech-icon' />
        </div>
      </div>
    </section>
  );
}
