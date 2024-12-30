import HomesFeed from './homes-feed';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';

describe('HomesFeed', () => {
  render(
    <BrowserRouter>
      <HomesFeed />
    </BrowserRouter>
  );
  it('should render the header text', () => {
    const homesFeedHeading = screen.getByRole('heading', { level: 1 });
    expect(homesFeedHeading).toBeInTheDocument();
    expect(homesFeedHeading).toHaveTextContent('Feed');
  });
});
