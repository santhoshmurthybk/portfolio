import { Link } from 'react-router-dom';
import { Button } from '@components/Button';

export function NotFound() {
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
          fontSize: '6rem',
          fontWeight: 800,
          color: '#e5e7eb',
          lineHeight: 1,
          marginBottom: '1rem',
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '0.5rem',
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          color: '#6b7280',
          marginBottom: '2rem',
          maxWidth: '24rem',
        }}
      >
        Sorry, we couldn't find the page you're looking for. It might have been
        moved or doesn't exist.
      </p>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="primary" size="medium">
          Go back home
        </Button>
      </Link>
    </main>
  );
}
