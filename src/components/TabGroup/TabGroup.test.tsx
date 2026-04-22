import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TabGroup } from '../TabGroup';

const mockTabs = [
  { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
  { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
  { id: 'tab3', label: 'Tab 3', content: <div>Content 3</div> },
];

describe('TabGroup', () => {
  it('should render tab labels', () => {
    render(<TabGroup tabs={mockTabs} />);
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('should show first tab content by default', () => {
    render(<TabGroup tabs={mockTabs} />);
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('should show specified default tab content', () => {
    render(<TabGroup tabs={mockTabs} defaultTab="tab2" />);
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('should switch tabs on click', () => {
    render(<TabGroup tabs={mockTabs} />);

    fireEvent.click(screen.getByText('Tab 2'));

    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('should mark active tab as selected', () => {
    render(<TabGroup tabs={mockTabs} />);
    const tab1Button = screen.getByRole('tab', { name: 'Tab 1' });
    const tab2Button = screen.getByRole('tab', { name: 'Tab 2' });

    expect(tab1Button).toHaveAttribute('aria-selected', 'true');
    expect(tab2Button).toHaveAttribute('aria-selected', 'false');
  });

  it('should update aria-selected on tab change', () => {
    render(<TabGroup tabs={mockTabs} />);
    const tab1Button = screen.getByRole('tab', { name: 'Tab 1' });
    const tab2Button = screen.getByRole('tab', { name: 'Tab 2' });

    fireEvent.click(tab2Button);

    expect(tab1Button).toHaveAttribute('aria-selected', 'false');
    expect(tab2Button).toHaveAttribute('aria-selected', 'true');
  });

  it('should have proper tablist role', () => {
    render(<TabGroup tabs={mockTabs} />);
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('should have proper tabpanel role', () => {
    render(<TabGroup tabs={mockTabs} />);
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <TabGroup tabs={mockTabs} className="custom-class" />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should handle empty tabs array', () => {
    const { container } = render(<TabGroup tabs={[]} />);
    expect(container.querySelector('[role="tabpanel"]')).toBeInTheDocument();
  });
});
