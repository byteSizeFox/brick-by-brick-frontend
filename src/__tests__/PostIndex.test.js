import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PostIndex from '../pages/PostIndex'
import mockPosts from '../mockPosts'

describe('<PostIndex />', () => {
    it('has an image', () => {
      render(
        <BrowserRouter>
          <PostIndex posts={mockPosts} />
        </BrowserRouter>
      )
      mockPosts.forEach((post) => {
            const altTxt = screen.getByRole('heading', {
                name: /title: post1/i
            })
            expect(altTxt).toBeInTheDocument
        })
    })
})