
import React from 'react';
import GlassCard from './GlassCard';
import AnimatedIcon from './AnimatedIcon';
import SkillBar from './SkillBar';
import { LucideIcon } from 'lucide-react';

interface SkillGroupCardProps {
  title: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  delay?: number;
}

const SkillGroupCard: React.FC<SkillGroupCardProps> = ({ 
  title, 
  description, 
  skills, 
  icon, 
  delay = 0 
}) => {
  return (
    <GlassCard delay={delay} className="fluid-card">
      <div className="flex items-center gap-3 mb-4">
        <AnimatedIcon variant="pulse">
          {icon}
        </AnimatedIcon>
        <h3 className="text-lg font-semibold text-gradient">{title}</h3>
      </div>
      <p className="mb-6 text-sm leading-relaxed text-gray-300">
        {description}
      </p>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <SkillBar key={skill} name={skill} delay={index + 1} />
        ))}
      </div>
    </GlassCard>
  );
};

export default SkillGroupCard;
