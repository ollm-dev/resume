
import React from 'react';
import ResumeSection from '../ResumeSection';
import SkillGroupCard from '../SkillGroupCard';
import AnimatedIcon from '../AnimatedIcon';
import { Code, Terminal, Database, BrainCircuit, GitMerge } from 'lucide-react';

interface SkillsSectionProps {
  t: (key: string) => string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ t }) => {
  return (
    <ResumeSection 
      id="skills" 
      title={t('section.skills')}
      icon={<AnimatedIcon><Code /></AnimatedIcon>}
      delay={5}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <SkillGroupCard
          title={t('skills.frontend')}
          description={t('skills.frontend.desc')}
          skills={['HTML/CSS', 'JavaScript/ES6', 'Vue3', 'React', 'TypeScript', 'Tailwind CSS']}
          icon={<Terminal size={20} />}
          delay={0.3}
        />
        
        <SkillGroupCard
          title={t('skills.backend')}
          description={t('skills.backend.desc')}
          skills={['Express/Koa', 'Nest.js', 'REST API', 'Python', 'SQL', 'MongoDB']}
          icon={<Database size={20} />}
          delay={0.4}
        />
        
        <SkillGroupCard
          title={t('skills.ai')}
          description={t('skills.ai.desc')}
          skills={['LangChain.js', 'Naive RAG', 'Vector DB', 'Agent/ReAct']}
          icon={<BrainCircuit size={20} />}
          delay={0.5}
        />
        
        <SkillGroupCard
          title={t('skills.other')}
          description={t('skills.other.desc')}
          skills={['Git', 'Prompt Engineering', 'DeepSeek/Cursor', 'Problem Solving']}
          icon={<GitMerge size={20} />}
          delay={0.6}
        />
      </div>
    </ResumeSection>
  );
};

export default SkillsSection;
