import { useEffect } from "react";
import gsap from "gsap";
/*import ScrollTrigger from "gsap/ScrollTrigger";*/

import { PROJECTS } from "../../Content/data";

import "./ProjectSection.css";

const ProjectSection = () => {
  /*gsap.registerPlugin(ScrollTrigger); */
  
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('#proj-heading', {scrollTrigger:"#proj-heading", opacity: 1, duration: 1.5, delay:2.5}).from('#proj-heading', {x:-100, duration: 1.5, delay:-1.5});
    tl.to('.proj-cont', {scrollTrigger:".proj-cont", opacity: 1, duration: 1.5, delay:-1}).from('.proj-cont', {y:100, duration: 1.5, delay:-1.5});
  }, []);

  return (
    <section id="project" className="projects">
      <header>
        <h2 className="heading" id="proj-heading">
          Projects
        </h2>
      </header>
      <main>
        <article className="proj-cont">
          {PROJECTS.map((elem, i) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={elem.link}
              className="proj"
              key={i}
            >
              <img
                src={elem.img}
                alt="Project Thumbnail"
                className="proj-img"
              />
              <h3 className="proj-heading orange">{elem.title}</h3>
              <p className="proj-desc">{elem.desc}</p>
            </a>
          ))}
        </article>
      </main>
    </section>
  );
};
export default ProjectSection;
