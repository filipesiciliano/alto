import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

const renderComponent = () =>
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );


describe('Home Component', () => {
  test('renders without errors', () => {
    renderComponent();
  });

  test('renders header component', () => {
    renderComponent();
    const headerComponent = screen.getByTestId('header');
    expect(headerComponent).toBeInTheDocument();
  });

  test('renders banner component', () => {
    renderComponent();
    const bannerComponent = screen.getByTestId('banner');
    expect(bannerComponent).toBeInTheDocument();
  });

  test('renders content wrapper component', () => {
    renderComponent();
    const contentWrapperComponent = screen.getByTestId('content-wrapper');
    expect(contentWrapperComponent).toBeInTheDocument();
  });

  test('renders typography component', () => {
    renderComponent();
    const typographyComponent = screen.getByText(/Lorem Ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised./i);
    expect(typographyComponent).toBeInTheDocument();
  });

  test('renders video component', () => {
    renderComponent();
    const videoComponent = screen.getByTitle('YouTube video player');
    expect(videoComponent).toBeInTheDocument();
  });

  test('renders image component', () => {
    renderComponent();
    const imageComponent = screen.getByAltText('Placeholder Image');
    expect(imageComponent).toBeInTheDocument();
  });

  test('renders footer component', () => {
    renderComponent();
    const footerComponent = screen.getByTestId('footer');
    expect(footerComponent).toBeInTheDocument();
  });
});
