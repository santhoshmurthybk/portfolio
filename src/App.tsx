import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from '@pages/Home';
import { About } from '@pages/About';
import { NotFound } from '@pages/NotFound';

function LoadingFallback() {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6b7280',
      }}
    >
      Loading...
    </div>
  );
}

function Navigation() {
  return (
    <nav
      style={{
        display: 'flex',
        gap: '1.5rem',
        padding: '1rem 2rem',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <Link
        to="/"
        style={{
          color: '#4f46e5',
          textDecoration: 'none',
          fontWeight: 500,
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          color: '#4f46e5',
          textDecoration: 'none',
          fontWeight: 500,
        }}
      >
        About
      </Link>
    </nav>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
