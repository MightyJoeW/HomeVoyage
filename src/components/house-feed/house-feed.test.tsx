import HouseFeed from './house-feed';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { houseMockData } from '../../house-mock-data';

describe('HouseFeed', () => {
  render(
    <BrowserRouter>
      <HouseFeed />
    </BrowserRouter>
  );
  it('should render the header text', () => {
    const HouseFeedHeading = screen.getByText(
      `${houseMockData.length} Results`
    );
    expect(HouseFeedHeading).toBeInTheDocument();
    expect(HouseFeedHeading).toHaveTextContent('10 Results');
  });
});
