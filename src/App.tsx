import React from "react";
import styled from "styled-components";
import AboutSection from "./containers/AboutSection/AboutSection";
import ContactSection from "./containers/ContactSection/ContactSection";
import ExperienceSection from "./containers/ExperienceSection/ExperienceSection";
import Footer from "./containers/Footer/Footer";
import Navbar from "./containers/Navbar/Navbar";
import ProjectsSection from "./containers/ProjectsSection/ProjectsSection";
import SkillsSection from "./containers/SkillsSection/SkillsSection";

const PageContainer = styled.div`
  min-height: 200vh;
  width: min(1600px, 100vw);
  position: relative;
`

const App = () => {

  return (
    <PageContainer>
      <Navbar isSticky={false} />
      <Navbar isSticky={true} />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </PageContainer>
  );
};

export default App;
