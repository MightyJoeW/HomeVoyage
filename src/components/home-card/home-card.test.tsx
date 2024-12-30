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
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('Allen, TX 75013')).toBeInTheDocument();
    expect(
      screen.getByText('3 Beds | 2 Baths | 1,200 Sq Ft | 66 Days on Market')
    ).toBeInTheDocument();
    expect(screen.getByText('For Sale $474,900')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Show details >' })
    ).toBeInTheDocument();
    expect(screen.getByText('Photo courtesy of')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: homesMockData[0].alt_description })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: `${homesMockData[0].user.name}`,
      })
    ).toBeInTheDocument();
  });
});
