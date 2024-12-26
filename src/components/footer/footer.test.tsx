import Footer from './footer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('Footer', () => {
  it('should redirect to MightyJoeW GitHub', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const githubLink = screen.getByRole('link', { name: 'MightyJoeW' });
    const href = githubLink.getAttribute('href');
    const url = new URL(href!);

    expect(url.origin).toEqual('https://github.com');
    expect(url.pathname).toEqual('/MightyJoeW');

    userEvent.click(githubLink);
  });
});
