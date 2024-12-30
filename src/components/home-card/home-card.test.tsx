import { BrowserRouter } from 'react-router';
import HomeCard from './home-card';
import { render, screen } from '@testing-library/react';
import { homesMockData } from '../../homes-mock-data';

describe('HomeCard', () => {
  it('should render the HomeCard content', () => {
    render(
      <BrowserRouter>
        <HomeCard photo={homesMockData[0]} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('img', { name: 'photo.description' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'photo.description' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Photographer: Scott Webb' })
    ).toBeInTheDocument();
  });
});
