
import React from 'react';
import ResumeSection from '../ResumeSection';
import GlassCard from '../GlassCard';
import AnimatedIcon from '../AnimatedIcon';
import { GraduationCap } from 'lucide-react';

interface EducationSectionProps {
  t: (key: string) => string;
}

const EducationSection: React.FC<EducationSectionProps> = ({ t }) => {
  return (
    <ResumeSection 
      id="education" 
      title={t('section.education')}
      icon={<AnimatedIcon><GraduationCap /></AnimatedIcon>}
      delay={2}
    >
      <GlassCard delay={0.3} className="fluid-card">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gradient">{t('education.university')}</h3>
            <p className="text-gray-300">{t('education.major')}</p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
              {t('education.time')}
            </span>
          </div>
        </div>
        <ul className="space-y-2 mt-4">
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-blue-400">•</span>
            <span>{t('education.gpa')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-blue-400">•</span>
            <span>{t('education.courses')}</span>
          </li>
        </ul>
      </GlassCard>
    </ResumeSection>
  );
};

export default EducationSection;
