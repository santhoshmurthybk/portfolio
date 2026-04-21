import { Timeline } from '../../components/Timeline';
import education from '../../data/education.json';
import type { Education } from '../../types/portfolio';

const educationData = education as Education[];

/**
 * Education tab content with timeline
 */
export function EducationTab() {
  const timelineItems = educationData.map((edu) => ({
    id: edu.id,
    startDate: edu.startDate,
    endDate: edu.endDate,
    title: edu.degree,
    subtitle: `${edu.field} - ${edu.institution}`,
    location: edu.location,
  }));

  return <Timeline items={timelineItems} />;
}
