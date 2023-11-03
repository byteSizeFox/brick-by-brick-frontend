import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PostNew from '../pages/PostNew'

describe("PostNew page", () => {
    it("renders the new post page", () => {
        render(
            <BrowserRouter>
                <PostNew />
            </BrowserRouter>
        )
        const greetingLink = screen.getByRole('heading', { 
            name: /Add your Build/i 
        })
        expect(greetingLink).toBeInTheDocument()
    })
})