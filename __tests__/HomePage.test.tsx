import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('should have "Welcome" text', () => {
    render(<HomePage />); // ARRANGE
    const title = screen.getByText('Welcome'); // ACT
    expect(title).toBeInTheDocument(); // ASSERT
  });

  it('should have "Show Properties" link', () => {
    render(<HomePage />); // ARRANGE
    const link = screen.getByText(/show properties/i); // ACT
    expect(link).toBeInTheDocument(); // ASSERT
  });

  it('should have an main element', () => {
    render(<HomePage />); // ARRANGE
    const mainElement = screen.getByRole('heading', {
      name: 'Welcome',
    }); // ACT
    expect(mainElement).toBeInTheDocument(); // ASSERT
  });
});
