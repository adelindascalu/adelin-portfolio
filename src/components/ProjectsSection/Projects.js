import "./Projects.css";
import ProjectCard from "../ReusableComponents/ProjectCard";

export default function ProjectsSection() {
  return (
    <section className='projects-section' id='projects'>
      <div className='container'>
        <h2 className='heading-tertiary'>My projects</h2>
        <h3 className='heading-secondary'>Some things I've built</h3>
      </div>
      <div className='container'>
        <ProjectCard />
      </div>
    </section>
  );
}
