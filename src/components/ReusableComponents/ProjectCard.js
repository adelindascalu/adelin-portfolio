import "./ProjectCard.css";
import axdService from "../../assets/images/axd-service-capture.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  return (
    <>
      {projects.map((item, i) => (
        <div className='project-container' key={i}>
          <div className='project-card-left'>
            <h2 className='project-title'>{item.title}</h2>
            <p className='project-description'>{item.description} </p>
            <p className='project-skills'>{item.skills}</p>
            <div className='btn-container'>
              <a href={item.link} className='project-demo btn-dark'>
                <FontAwesomeIcon icon={faEye} />
                &nbsp;See demo
              </a>
              <a href={item.code} className='project-code btn-light'>
                <FontAwesomeIcon icon={faCode} />
                &nbsp;See code
              </a>
            </div>
          </div>
          <div className='project-card-right'>
            <img
              className='project-cover'
              src={item.image}
              alt='project-cover'
            ></img>
          </div>
        </div>
      ))}
    </>
  );
}

const projects = [
  {
    title: "AXD Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    skills: "React / CSS / HTML",
    image: axdService,
    link: "https://axd-service.netlify.app/",
    code: "https://github.com/adelindascalu/auto-service-website",
  },
  {
    title: "AXD Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    skills: "Used skills",
    image: axdService,
  },
];
