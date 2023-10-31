import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'

describe("<Header />", () => {
    it("renders a header to our site", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const greetingLink = screen.getByText(/header/i)
        expect(greetingLink).toBeInTheDocument()
    })
})