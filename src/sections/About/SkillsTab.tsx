import { ProgressBar } from '../../components/ProgressBar';
import skills from '../../data/skills.json';
import type { Skill } from '../../types/portfolio';

const skillsData = skills as Skill[];

/**
 * Skills tab content with progress bars
 */
export function SkillsTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skillsData.map((skill) => (
        <ProgressBar
          key={skill.id}
          label={skill.name}
          percentage={skill.proficiency}
        />
      ))}
    </div>
  );
}
