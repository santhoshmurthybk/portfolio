interface TimelineItem {
  id: string;
  startDate: string;
  endDate: string | null;
  title: string;
  subtitle: string;
  location?: string;
  description?: string;
}

interface TimelineProps {
  /** Array of timeline items */
  items: TimelineItem[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * Timeline component for displaying experience/education history
 */
export function Timeline({ items, className = '' }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

      <div className="space-y-8">
        {items.map((item) => (
          <TimelineEntry key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function TimelineEntry({ item }: { item: TimelineItem }) {
  const dateRange = item.endDate
    ? `${item.startDate} - ${item.endDate}`
    : `${item.startDate} - Present`;

  return (
    <div className="relative pl-10">
      {/* Timeline dot */}
      <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary-600 dark:bg-primary-500 ring-4 ring-white dark:ring-gray-900" />

      {/* Content */}
      <div className="card p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
            {dateRange}
          </span>
        </div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {item.subtitle}
          {item.location && (
            <span className="text-gray-500 dark:text-gray-400">
              {' '}
              · {item.location}
            </span>
          )}
        </p>
        {item.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 whitespace-pre-line">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}
