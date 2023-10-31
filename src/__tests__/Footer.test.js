import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../components/Footer'

describe("<Footer />", () => {
    it("renders a footer on our site", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const greetingLink = screen.getByText(/footer/i)
        expect(greetingLink).toBeInTheDocument()
    })
})