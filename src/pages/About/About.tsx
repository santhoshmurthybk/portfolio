import { APP_CONFIG } from '@constants/env';

export function About() {
  return (
    <main
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '1rem',
          color: '#1f2937',
        }}
      >
        About {APP_CONFIG.title}
      </h1>
      <div
        style={{
          maxWidth: '40rem',
          color: '#4b5563',
          lineHeight: 1.75,
        }}
      >
        <p style={{ marginBottom: '1rem' }}>
          This is a modern portfolio application built with:
        </p>
        <ul
          style={{
            textAlign: 'left',
            marginBottom: '1.5rem',
            paddingLeft: '1.5rem',
          }}
        >
          <li>React 18 with TypeScript</li>
          <li>Vite for fast development and optimized builds</li>
          <li>React Router v6 for client-side routing</li>
          <li>CSS Modules for scoped styling</li>
          <li>Vitest and React Testing Library for testing</li>
          <li>ESLint and Prettier for code quality</li>
        </ul>
        <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
          Version {APP_CONFIG.version} | Running in {APP_CONFIG.mode} mode
        </p>
      </div>
    </main>
  );
}
