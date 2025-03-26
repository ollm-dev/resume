
import React from 'react';
import { useLocale } from '../i18n/i18n';
import Layout from '../components/Layout';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import EducationSection from '../components/sections/EducationSection';
import InternshipSection from '../components/sections/InternshipSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import AwardsSection from '../components/sections/AwardsSection';
import SkillsSection from '../components/sections/SkillsSection';
import PortfolioSection from '../components/sections/PortfolioSection';

const Index = () => {
  const { t } = useLocale();

  return (
    <Layout>
      <HeroSection t={t} />
      <AboutSection t={t} />
      <EducationSection t={t} />
      <InternshipSection t={t} />
      <ExperienceSection t={t} />
      <AwardsSection t={t} />
      <SkillsSection t={t} />
      <PortfolioSection t={t} />
    </Layout>
  );
};

export default Index;
