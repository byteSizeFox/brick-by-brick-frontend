import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import PostProtectedShow from '../pages/PostProtectedShow'
import mockPosts from '../mockPosts'

const currentUser = { id: 1};

describe('<PostProtectedShow />', () => {
    it('shows a post', () => {
      render(
            <MemoryRouter initialEntries={["/mypostshow/1"]}>
                <Routes>
                    <Route path="/mypostshow/:id" element={<PostProtectedShow posts={mockPosts} currentUser={currentUser} />} />
                </Routes>
            </MemoryRouter>
        )

        const altTxt = screen.getByRole('heading', {
            name: /'s "galactic voyager xz\-9000" build/i
          })
    
        expect(altTxt).toBeInTheDocument
        
    })
})