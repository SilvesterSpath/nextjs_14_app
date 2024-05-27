import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import { BiBody } from 'react-icons/bi';

it('should have "Welcome" text', () => {
  render(<HomePage />); // ARRANGE
  const title = screen.getByText('Welcome'); // ACTION
  expect(title).toBeInTheDocument(); // ASSERT
});
