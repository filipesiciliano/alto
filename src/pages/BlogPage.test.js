import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BlogPage from './BlogPage';

const renderComponent = () =>
    render(
        <MemoryRouter>
            <BlogPage />
        </MemoryRouter>
    );

jest.mock('../utils/storage', () => ({
  loadPosts: jest.fn(),
  addNewPost: jest.fn(),
}));

describe('BlogPage Component', () => {
  test('renders all posts', () => {
    const mockPosts = [
      { id: 1, title: 'Post 1', text: 'Lorem ipsum dolor sit amet' },
      { id: 2, title: 'Post 2', text: 'Consectetur adipiscing elit' },
    ];

    const loadPostsMock = jest.requireMock('../utils/storage').loadPosts;
    loadPostsMock.mockReturnValue(mockPosts);

    renderComponent();

    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
  });

  test('opens create post modal when add new post button is clicked', () => {
    renderComponent();

    fireEvent.click(screen.getByText('Add New Post'));

    expect(screen.getByTestId('create-post-modal')).toBeInTheDocument();
  });

});
