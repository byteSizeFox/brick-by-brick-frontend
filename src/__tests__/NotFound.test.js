import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound'

describe("not found page", () => {
    it("renders the not found page", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )

        const greetingLink = screen.getByText(/Not Found/i)
        expect(greetingLink).toBeInTheDocument()

    })
})