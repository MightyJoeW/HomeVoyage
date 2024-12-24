import Navbar from './navbar';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('Navbar', () => {
  it('should render the Navbar', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const navbarTitle = screen.getByText('Home Voyage');
    const homeBtn = screen.getByRole('button', { name: 'home' });
    const loginBtn = screen.getByRole('button', { name: 'Login' });

    expect(navbarTitle).toBeInTheDocument();
    expect(homeBtn).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });

  it('should route to home when clicking the navbar home icon', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const homeBtnLink = screen.getByRole('link');

    expect(homeBtnLink).toHaveAttribute('href', '/');
    userEvent.click(homeBtnLink);
    const url = window.location.pathname;
    expect(url).toEqual('/');
  });
});
