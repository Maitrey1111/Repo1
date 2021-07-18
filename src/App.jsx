import LandingSection from './Components/LandingSection/LandingSection.jsx';

import ProjectSection from './Components/Projects/ProjectSection.jsx';

import './App.css';
import SkillsSection from './Components/SkillsSection/SkillsSection.jsx';
import AboutSection from './Components/AboutSection/AboutSection.jsx';

const App = () => {
  
  return (
    <main>
      <LandingSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectSection/>
    </main>
  );
}

export default App;
