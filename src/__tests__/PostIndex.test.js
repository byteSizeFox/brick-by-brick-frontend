import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PostIndex from '../pages/PostIndex'
import mockPosts from '../mockPosts'

describe('<PostIndex />', () => {
    it('has a heading', () => {
      render(
            <BrowserRouter>
                <PostIndex posts={mockPosts} />
            </BrowserRouter>
        )

        mockPosts.forEach((post) => {
            const altTxt = screen.getByRole('heading', {
                name: /galactic voyager xz\-9000/i
              
            })
            expect(altTxt).toBeInTheDocument
        })
    })
})