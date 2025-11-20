import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import PopularCourses from './components/PopularCourses';
import PromoBanner from './components/PromoBanner';   // <-- FIXED
import TrustedCompanies from './components/TrustedCompanies';
import CareerSection from './components/CareerSection';
import AICareerSection from "./components/AICareerSection";
import SkillsSection from './components/SkillsSection';

import './styles.css';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <PromoBanner />        {/* <-- Promo goes first like Udemy */}
        <CareerSection />
        <AICareerSection /> 
        <SkillsSection />

        <TrustedCompanies />
      </main>
      <footer style={{ padding: '24px', textAlign: 'center', color: '#777' }}>
        © {new Date().getFullYear()} Udemy — Demo clone for assignment
      </footer>
    </div>
  );
}
