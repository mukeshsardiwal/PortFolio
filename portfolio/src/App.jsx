import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import ProjectInsights from './components/ProjectInsights'
const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutMe/>
      <ProjectInsights/>
      <Skills/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
