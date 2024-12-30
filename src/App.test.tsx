import App from './App';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { homesMockData } from './homes-mock-data';

describe('App', () => {
  it('should render the Navbar', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const navbarTitle = screen.getByText('Home Voyage');
    const homeBtn = screen.getByRole('button', { name: 'home' });
    const loginBtn = screen.getByRole('button', { name: 'Login' });
    expect(navbarTitle).toBeInTheDocument();
    expect(homeBtn).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });

  it('should render the HomeFeed', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const homesFeedHeading = screen.getByText(
      `${homesMockData.length} Results`
    );
    expect(homesFeedHeading).toBeInTheDocument();
    expect(homesFeedHeading).toHaveTextContent('10 Results');
  });

  it('should render the Footer', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const footer = screen.getByRole('contentinfo');
    const separator = screen.getByRole('separator');
    const githubLink = screen.getByRole('link', { name: 'MightyJoeW' });
    expect(footer).toBeInTheDocument();
    expect(separator).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
  });
});
