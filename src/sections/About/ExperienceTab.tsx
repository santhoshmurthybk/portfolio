import { Timeline } from '../../components/Timeline';
import experience from '../../data/experience.json';
import type { Experience } from '../../types/portfolio';

const experienceData = experience as Experience[];

/**
 * Experience tab content with timeline
 */
export function ExperienceTab() {
  const timelineItems = experienceData.map((exp) => ({
    id: exp.id,
    startDate: exp.startDate,
    endDate: exp.endDate,
    title: exp.title,
    subtitle: exp.company,
    location: exp.location,
    description: exp.description,
  }));

  return <Timeline items={timelineItems} />;
}
