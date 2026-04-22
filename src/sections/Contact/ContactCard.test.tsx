import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ContactCard } from './ContactCard';

describe('ContactCard', () => {
  it('should render contact label', () => {
    render(
      <ContactCard
        contact={{
          id: '1',
          label: 'Email',
          value: 'test@example.com',
          type: 'email',
          icon: 'BiEnvelope',
        }}
      />
    );
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('should render contact value', () => {
    render(
      <ContactCard
        contact={{
          id: '1',
          label: 'Email',
          value: 'test@example.com',
          type: 'email',
          icon: 'BiEnvelope',
        }}
      />
    );
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
  });

  it('should render email link with mailto', () => {
    render(
      <ContactCard
        contact={{
          id: '1',
          label: 'Email',
          value: 'test@example.com',
          type: 'email',
          icon: 'BiEnvelope',
        }}
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'mailto:test@example.com');
  });

  it('should render phone link with tel', () => {
    render(
      <ContactCard
        contact={{
          id: '1',
          label: 'Phone',
          value: '+1 234 567 8900',
          type: 'phone',
          icon: 'BiPhone',
        }}
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'tel:+12345678900');
  });

  it('should not render link for address type', () => {
    render(
      <ContactCard
        contact={{
          id: '1',
          label: 'Location',
          value: 'New York, USA',
          type: 'address',
          icon: 'BiMap',
        }}
      />
    );
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should handle unknown icon gracefully', () => {
    render(
      <ContactCard
        contact={{
          id: '1',
          label: 'Test',
          value: 'test value',
          type: 'email',
          icon: 'UnknownIcon',
        }}
      />
    );
    // Should fallback to BiEnvelope and still render
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
