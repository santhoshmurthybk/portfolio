import { Button } from '@components/Button';
import { APP_CONFIG } from '@constants/env';

export function Home() {
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
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
          color: '#1f2937',
        }}
      >
        Welcome to {APP_CONFIG.title}
      </h1>
      <p
        style={{
          fontSize: '1.125rem',
          color: '#6b7280',
          marginBottom: '2rem',
          maxWidth: '32rem',
        }}
      >
        A modern React + TypeScript application built with Vite. Version{' '}
        {APP_CONFIG.version}
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary" size="large">
          Primary Button
        </Button>
        <Button variant="secondary" size="medium">
          Secondary
        </Button>
        <Button variant="ghost" size="small">
          Ghost
        </Button>
        <Button variant="primary" size="medium" disabled>
          Disabled
        </Button>
      </div>
    </main>
  );
}
