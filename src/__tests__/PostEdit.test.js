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

        const greetingLink = screen.getByText(/post not found/i)

        expect(greetingLink).toBeInTheDocument()
    })

})