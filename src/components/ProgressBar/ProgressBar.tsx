interface ProgressBarProps {
  /** Label for the progress bar */
  label: string;
  /** Progress percentage (0-100) */
  percentage: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ProgressBar component for displaying skill proficiency
 */
export function ProgressBar({ label, percentage, className = '' }: ProgressBarProps) {
  // Clamp percentage between 0 and 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className={`${className}`}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {clampedPercentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-primary-600 dark:bg-primary-500 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${clampedPercentage}%` }}
          role="progressbar"
          aria-valuenow={clampedPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label}: ${clampedPercentage}%`}
        />
      </div>
    </div>
  );
}
