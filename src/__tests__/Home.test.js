import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

describe("home page", () => {
    it("renders the home page", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        const greetingLink = screen.getByText(/Introducing our platform/i)
        expect(greetingLink).toBeInTheDocument()

    })
})