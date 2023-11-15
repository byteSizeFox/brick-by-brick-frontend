import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostProtectedIndex from '../pages/PostProtectedIndex';
import mockPosts from '../mockPosts'
import { BrowserRouter } from 'react-router-dom';

const currentUser = { id: 1};

describe('PostProtectedIndex', () => {
    it('renders correctly and shows only posts for the current user', () => {
    render(
        <BrowserRouter>
            <PostProtectedIndex posts={mockPosts} currentUser={currentUser} />
        </BrowserRouter>
    )  
        expect(screen.getByText("Galactic Voyager XZ-9000")).toBeInTheDocument();
        expect(screen.queryByText(/hello world/i)).not.toBeInTheDocument();
    });
});