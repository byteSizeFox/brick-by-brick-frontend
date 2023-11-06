import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PostEdit from '../pages/PostEdit'

describe("PostEdit page", () => {
    it("renders the edit post page", () => {
        render(
            <BrowserRouter>
                <PostEdit />
            </BrowserRouter>
        )
        const greetingLink = screen.getByRole('heading', { 
            name: /Edit your Build/i 
        })
        expect(greetingLink).toBeInTheDocument()
    })
})