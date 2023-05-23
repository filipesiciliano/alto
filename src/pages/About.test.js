import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './About';

const renderComponent = () =>
    render(
        <MemoryRouter>
            <About />
        </MemoryRouter>
    );

describe('Avout Component', () => {
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

  test('renders about information', () => {
    renderComponent();
    const aboutElement = screen.getByText(/Contrary to popular belief/i);

    expect(aboutElement).toBeInTheDocument();
  });
});
