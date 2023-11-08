import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import AboutUs from '../pages/AboutUs'

describe("about us page", () => {
    it("renders the about us page", () => {
        render(
            <BrowserRouter>
                <AboutUs />
            </BrowserRouter>
        )
            
        const greetingLink = screen.getByText(/anabella/i)
        expect(greetingLink).toBeInTheDocument()
    })
})