import React from "react";
import styled from "styled-components";
import AboutSection from "./containers/AboutSection/AboutSection";
import ContactSection from "./containers/ContactSection/ContactSection";
import ExperienceSection from "./containers/ExperienceSection/ExperienceSection";
import Footer from "./containers/Footer/Footer";
import Navbar from "./containers/Navbar/Navbar";
import ProjectsSection from "./containers/ProjectsSection/ProjectsSection";
import SkillsSection from "./containers/SkillsSection/SkillsSection";
import { IconContext } from "react-icons/lib";

const PageContainer = styled.div`
  min-height: 100vh;
  width: min(1600px, 100%);
  position: relative;
`

const App = () => {

  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <PageContainer>
        <Navbar isSticky={false} />
        {/*<Navbar isSticky={true} />*/}
        <AboutSection />
        <SkillsSection />
        {/*<ExperienceSection />*/}
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </PageContainer>
    </IconContext.Provider>
  );
};

export default App;
