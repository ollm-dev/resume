
import React from 'react';
import ResumeSection from '../ResumeSection';
import GlassCard from '../GlassCard';
import AnimatedIcon from '../AnimatedIcon';
import { Building } from 'lucide-react';

interface InternshipSectionProps {
  t: (key: string) => string;
}

const InternshipSection: React.FC<InternshipSectionProps> = ({ t }) => {
  return (
    <ResumeSection 
      id="internship" 
      title={t('section.internship')}
      icon={<AnimatedIcon><Building /></AnimatedIcon>}
      delay={3}
    >
      <GlassCard delay={0.3} className="fluid-card" variant="highlighted">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gradient">{t('internship.company1')}</h3>
            <p className="text-gray-300">{t('internship.position1')}</p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
              {t('internship.time1')}
            </span>
          </div>
        </div>
        
        <p className="text-sm text-gray-400 mb-4">
          {t('internship.tech1')}
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-blue-400">•</span>
            <span>{t('internship.resp1.1')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-blue-400">•</span>
            <span>{t('internship.resp1.2')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-blue-400">•</span>
            <span>{t('internship.resp1.3')}</span>
          </li>
        </ul>
      </GlassCard>

      <GlassCard delay={0.4} className="fluid-card mt-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gradient">{t('internship.company2')}</h3>
            <p className="text-gray-300">{t('internship.position2')}</p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
              {t('internship.time2')}
            </span>
          </div>
        </div>
        
        <p className="text-sm text-gray-400 mb-4">
          {t('internship.tech2')}
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-blue-400">•</span>
            <span>{t('internship.resp2.1')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-blue-400">•</span>
            <span>{t('internship.resp2.2')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-blue-400">•</span>
            <span>{t('internship.resp2.3')}</span>
          </li>
        </ul>
      </GlassCard>
    </ResumeSection>
  );
};

export default InternshipSection;
