import HomeInfo from './home-info';
import { render, screen } from '@testing-library/react';

describe('HomeInfo', () => {
  it('should render the placeholder title', () => {
    render(<HomeInfo />);
    expect(
      screen.getByRole('heading', { name: 'Home info placeholder' })
    ).toBeInTheDocument();
  });
});
