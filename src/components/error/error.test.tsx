import Error from './error';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('Error', () => {
  it('should display 404 text', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );
    expect(
      screen.getByText("Oops! This page doesn't exist")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "The page you're trying to open may not be available or the link is incorrect."
      )
    ).toBeInTheDocument();
  });
  it('should route to home', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );
    const homeLink = screen.getByText('Go to homepage');
    userEvent.click(homeLink);
  });
});
