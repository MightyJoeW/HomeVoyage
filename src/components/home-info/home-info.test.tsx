import { BrowserRouter } from 'react-router';
import HomeInfo from './home-info';
import { render, screen } from '@testing-library/react';

describe('HomeInfo', () => {
  it('should render the HomeInfo content', () => {
    render(
      <BrowserRouter>
        <HomeInfo />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});
