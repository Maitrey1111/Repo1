import { useEffect } from "react"
import gsap from "gsap"
import "./SkillsSection.css";
import { SKILLS } from "../../Content/data";

const SkillsSection = () => {

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#skill-heading", {
      opacity: 1,
      duration: 1.5,
    }).from("#skill-heading", { x: -100, duration: 1.5, delay: -1.5 });

    tl.to(".card-cont", {
      scrollTrigger: ".card-cont",
      opacity: 1,
      duration: 1.5,
      delay: -0.5,
    }).from(".card-cont", { y: 100, duration: 1.5, delay: -1.5 });
  }, [])

  return (
    <section id="skills" className="skill">
      <header>
        <h2 className="heading" id="skill-heading">
          Skills
        </h2>
      </header>
      <main>
        <article className="card-cont" key={i}>
          {SKILLS.map((elem, i) => (
            <p className="card head">
              {elem.name}
              <p>
                <div className="container head2">
                  <div className="skill-of" id="skill-of"></div>
                </div>
              </p>
            </p>
          ))}
        </article>
      </main>
    </section>
  );
};

export default SkillsSection;

