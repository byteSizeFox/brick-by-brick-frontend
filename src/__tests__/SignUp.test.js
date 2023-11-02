import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignUp from '../pages/SignUp'

describe("sign up page", () => {
    it("renders the sign up page", () => {
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )
        const greetingLink = screen.getByRole('heading', { name: /please sign up!/i
        })
        expect(greetingLink).toBeInTheDocument()
    })
})