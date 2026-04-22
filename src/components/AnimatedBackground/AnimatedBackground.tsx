interface AnimatedBackgroundProps {
  /** Variant determines the blob colors */
  variant?: 'primary' | 'purple' | 'cyan';
}

/**
 * Animated background with blobs and grid pattern
 */
export function AnimatedBackground({ variant = 'primary' }: AnimatedBackgroundProps) {
  const blobColors = {
    primary: {
      first: 'bg-primary-300/30 dark:bg-primary-600/20',
      second: 'bg-purple-300/30 dark:bg-purple-600/20',
      third: 'bg-cyan-300/30 dark:bg-cyan-600/20',
    },
    purple: {
      first: 'bg-purple-300/30 dark:bg-purple-600/20',
      second: 'bg-pink-300/30 dark:bg-pink-600/20',
      third: 'bg-indigo-300/30 dark:bg-indigo-600/20',
    },
    cyan: {
      first: 'bg-cyan-300/30 dark:bg-cyan-600/20',
      second: 'bg-teal-300/30 dark:bg-teal-600/20',
      third: 'bg-blue-300/30 dark:bg-blue-600/20',
    },
  };

  const colors = blobColors[variant];

  return (
    <>
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -left-40 w-80 h-80 ${colors.first} rounded-full blur-3xl animate-blob`} />
        <div className={`absolute top-40 -right-40 w-96 h-96 ${colors.second} rounded-full blur-3xl animate-blob animation-delay-2000`} />
        <div className={`absolute -bottom-40 left-1/3 w-80 h-80 ${colors.third} rounded-full blur-3xl animate-blob animation-delay-4000`} />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}
