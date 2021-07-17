import {PROJECTS} from "../../Content/data"

import "./ProjectSection.css";

const ProjectSection = () => {
  return (
    <section id="project" className="projects">
      <header>
          <h2 className="heading" id="proj-heading">Projects</h2>
      </header>
      <main>
          <article className="proj-cont">
            {PROJECTS.map((elem,i)=> (
              <a target="_blank"  rel="noopener noreferrer" href={elem.link} className="proj" key={i}>
                  <img src={elem.img} alt="Project Thumbnail" className="proj-img"/>
                  <h3 className="proj-heading orange">{elem.title}</h3>
                  <p className="proj-desc">{elem.desc}</p>
              </a>))
            }
          </article>
      </main>
    </section>
  );
};
export default ProjectSection;
