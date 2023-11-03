import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import PostShow from '../pages/PostShow'
import mockPosts from '../mockPosts'

describe('<PostShow />', () => {
    it('has a post', () => {
      render(
            <MemoryRouter initialEntries={["/postshow/1"]}>
               <Routes>
                    <Route path="/postshow/:id" element={<PostShow posts={mockPosts} />} />
               </Routes>
            </MemoryRouter>
        )
        const altTxt = screen.getByRole('heading', { name: /legolover123's post1 build/i
            })
        expect(altTxt).toBeInTheDocument
        
    })
})