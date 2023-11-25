import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ContactSection from "./containers/ContactSection/ContactSection";
import Footer from "./containers/Footer/Footer";
import Navbar from "./containers/Navbar/Navbar";
import ProjectsSection from "./containers/ProjectsSection/ProjectsSection";
import SkillsSection from "./containers/SkillsSection/SkillsSection";
import HeaderSection from "./containers/HeaderSection/HeaderSection";
import theme, { ITheme } from "./assets/theme/theme";

const PageContainer = styled.div`
  min-height: 100vh;
  width: min(1600px, 100%);
  position: relative;
`;

const App = () => {
  const [currTheme, setCurrTheme] = useState<ITheme>(theme.lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Navbar currTheme={currTheme} setCurrTheme={setCurrTheme} />
        <HeaderSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
};

export default App;
