
import React from 'react';
import ResumeSection from '../ResumeSection';
import GlassCard from '../GlassCard';
import AnimatedIcon from '../AnimatedIcon';
import { Briefcase } from 'lucide-react';

interface ExperienceSectionProps {
  t: (key: string) => string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ t }) => {
  return (
    <ResumeSection 
      id="experience" 
      title={t('section.experience')}
      icon={<AnimatedIcon><Briefcase /></AnimatedIcon>}
      delay={3}
    >
      <GlassCard delay={0.3} className="fluid-card">
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-blue-400">•</span>
            <span>{t('experience.1')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-blue-400">•</span>
            <span>{t('experience.2')}</span>
          </li>
        </ul>
      </GlassCard>
    </ResumeSection>
  );
};

export default ExperienceSection;
