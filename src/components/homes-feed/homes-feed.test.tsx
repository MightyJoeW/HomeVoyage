import HomesFeed from './homes-feed';
import { render, screen } from '@testing-library/react';

describe('HomesFeed', () => {
  render(<HomesFeed />);
  it('should render the header text', () => {
    const homesFeedHeading = screen.getByRole('heading', { level: 1 });
    expect(homesFeedHeading).toBeInTheDocument();
    expect(homesFeedHeading).toHaveTextContent('Feed');
  });
});
