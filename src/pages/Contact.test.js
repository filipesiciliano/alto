import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from './Contact';

const renderComponent = () =>
    render(
        <MemoryRouter>
            <Contact />
        </MemoryRouter>
    );
    

describe('Contact Component', () => {
  test('renders without errors', () => {
    renderComponent();
  });

  test('renders header component', () => {
    renderComponent();
    const headerComponent = screen.getByTestId('header');
    expect(headerComponent).toBeInTheDocument();
  });

  test('renders footer component', () => {
    renderComponent();
    const footerComponent = screen.getByTestId('footer');
    expect(footerComponent).toBeInTheDocument();
  });

  test('renders contact information', () => {
    renderComponent();
    const nameElement = screen.getByText(/John Doe/i);
    const emailElement = screen.getByText(/johndoe@example.com/i);
    const phoneElement = screen.getByText(/\+1 123-456-7890/i);

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
  });
});
