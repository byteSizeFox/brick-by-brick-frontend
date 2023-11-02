import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignIn from '../pages/SignIn'

describe("sign in page", () => {
    it("renders the sign in page", () => {
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        )
        const greetingLink = screen.getByRole('heading', {
            name: /welcome back!/i
          })
        expect(greetingLink).toBeInTheDocument()
    })
})