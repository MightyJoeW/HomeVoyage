import HomeCard from './home-card';
import { render, screen } from '@testing-library/react';

describe('HomeCard', () => {
  it('should render the placeholder title', () => {
    render(<HomeCard />);
    expect(
      screen.getByRole('heading', { name: 'Home card placeholder' })
    ).toBeInTheDocument();
  });
});
