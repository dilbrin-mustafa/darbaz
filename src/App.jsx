// src/App.jsx
import React from 'react'
import Navbar from './components/Navbar'
import WhatIDo from './components/WhatIDo'
import Hero from './components/Hero'
import Proficiency from './components/Proficiency'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import OpenSource  from './components/OpenSource'
import Blogs  from './components/Blogs'
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageSelector from './components/LanguageSelector';


function App() {
  return (
    <LanguageProvider>
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <main>
        <Hero/>
        <WhatIDo/>
        <Proficiency/>
        <Education/>
        <Experience/>
        <Projects/>
        <Achievements/>
        <OpenSource/>
        {/* <Blogs/> */}
        <Contact/>
      </main>
    </div>
    </LanguageProvider>
  );
}
export default App


