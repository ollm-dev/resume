
import React from 'react';
import ResumeSection from '../ResumeSection';
import GlassCard from '../GlassCard';
import AnimatedIcon from '../AnimatedIcon';
import { User, Heart, GitBranch, Target } from 'lucide-react';

interface AboutSectionProps {
  t: (key: string) => string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  return (
    <ResumeSection 
      id="about" 
      title={t('section.about')}
      icon={<AnimatedIcon><User /></AnimatedIcon>}
      delay={1}
    >
      <GlassCard delay={0.2} className="max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">{t('about.desc')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm">
            <AnimatedIcon variant="pulse">
              <Heart className="text-pink-400" />
            </AnimatedIcon>
            <h4 className="font-semibold mt-3 mb-2 text-gradient">兴趣爱好</h4>
            <p className="text-sm text-center">AI编程、阅读、设计、摄影</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm">
            <AnimatedIcon variant="pulse">
              <GitBranch className="text-blue-400" />
            </AnimatedIcon>
            <h4 className="font-semibold mt-3 mb-2 text-gradient">工作风格</h4>
            <p className="text-sm text-center">高效、创新、注重细节、团队协作</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm">
            <AnimatedIcon variant="pulse">
              <Target className="text-green-400" />
            </AnimatedIcon>
            <h4 className="font-semibold mt-3 mb-2 text-gradient">职业目标</h4>
            <p className="text-sm text-center">成为全栈开发的专家，专注AI应用领域</p>
          </div>
        </div>
      </GlassCard>
    </ResumeSection>
  );
};

export default AboutSection;
