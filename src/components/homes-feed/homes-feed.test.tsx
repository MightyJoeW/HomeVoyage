import HomesFeed from './homes-feed';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { homesMockData } from '../../homes-mock-data';

describe('HomesFeed', () => {
  render(
    <BrowserRouter>
      <HomesFeed />
    </BrowserRouter>
  );
  it('should render the header text', () => {
    const homesFeedHeading = screen.getByText(
      `${homesMockData.length} Results`
    );
    expect(homesFeedHeading).toBeInTheDocument();
    expect(homesFeedHeading).toHaveTextContent('10 Results');
  });
});
