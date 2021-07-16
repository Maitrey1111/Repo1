import "./ProjectSection.css";

const ProjectSection = () => {
  return (
    <section id="project" className="projects">
      <header>
          <h2 className="heading" id="proj-heading">Projects</h2>
      </header>
      <main>
          <article className="proj-cont">
            {Array(3)
            .fill(0)
            .map((elem,i)=> (
              <a href="https://github.com" className="proj" key={i}>
                  <img src="//placehold.it/1000x1000" alt="Project Thumbnail" className="proj-img"/>
                  <h3 className="proj-heading">PROJECT {i+1}</h3>
                  <p className="proj-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique aspernatur omnis nisi ad. Eligendi, repudiandae debitis. Amet praesentium illo expedita voluptas, minus quia sed possimus quas pariatur officia voluptatem neque similique, ullam in ab impedit dolore aut? Nulla eos perferendis quidem quasi fugit nostrum ullam debitis temporibus corrupti dolore!</p>
              </a>))}
          </article>
      </main>
    </section>
  );
};
export default ProjectSection;
