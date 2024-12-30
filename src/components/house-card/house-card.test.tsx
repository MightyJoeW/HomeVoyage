import { BrowserRouter } from 'react-router';
import HouseCard from './house-card';
import { render, screen } from '@testing-library/react';
import { houseMockData } from '../../house-mock-data';

describe('HouseCard', () => {
  it('should render the HouseCard content', () => {
    render(
      <BrowserRouter>
        <HouseCard house={houseMockData[0]} />
      </BrowserRouter>
    );
    expect(
      screen.getByText(houseMockData[0].address.line1)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${houseMockData[0].address.city}, ${houseMockData[0].address.state} ${houseMockData[0].address.zip}`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${houseMockData[0].details.beds} Beds | ${houseMockData[0].details.baths} Baths | ${houseMockData[0].details.sqft} Sq Ft | ${houseMockData[0].details.daysOnMarket} Days on Market`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(`For Sale $${houseMockData[0].price.amount}`)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Show details >' })
    ).toBeInTheDocument();
    expect(screen.getByText('Photo courtesy of')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: houseMockData[0].photo.alt_description })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: `${houseMockData[0].photo.name}`,
      })
    ).toBeInTheDocument();
  });
});
