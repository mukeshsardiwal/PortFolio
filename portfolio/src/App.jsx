import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ProfileSummary from './components/ProfileSummary'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ProfileSummary/>
      <AboutMe/>
      <Skills/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
