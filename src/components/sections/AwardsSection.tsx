
import React from 'react';
import ResumeSection from '../ResumeSection';
import GlassCard from '../GlassCard';
import AnimatedIcon from '../AnimatedIcon';
import { Award } from 'lucide-react';

interface AwardsSectionProps {
  t: (key: string) => string;
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ t }) => {
  return (
    <ResumeSection 
      id="awards" 
      title={t('section.awards')}
      icon={<AnimatedIcon><Award /></AnimatedIcon>}
      delay={4}
    >
      <GlassCard delay={0.3} className="fluid-card">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="mr-2 mt-1 text-blue-400">•</span>
              <span>{t('awards.1')}</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 mt-1 text-blue-400">•</span>
              <span>{t('awards.2')}</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 mt-1 text-blue-400">•</span>
              <span>{t('awards.3')}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="mr-2 mt-1 text-blue-400">•</span>
              <span>{t('awards.4')}</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 mt-1 text-blue-400">•</span>
              <span>{t('awards.5')}</span>
            </div>
          </div>
        </div>
      </GlassCard>
    </ResumeSection>
  );
};

export default AwardsSection;
