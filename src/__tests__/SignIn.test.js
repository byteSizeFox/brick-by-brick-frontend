import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event';
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
it("renders a welcome title", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    )
    const welcomeMessage = screen.getByRole('heading', {
        name: /keep on building!/i
      })
    expect(welcomeMessage).toBeInTheDocument
})

it("renders the sign in page", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    )
    const emailPassword = screen.getByText(/email: password:/i)
    expect(emailPassword).toBeInTheDocument
    screen.getByRole('button', {
        name: /login/i
      })
}) 

it("renders a login button", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    )
    const loginButton = screen.getByRole('button', {
        name: /login/i
      })
    expect(loginButton).toBeInTheDocument
})

it("renders a sign up link", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    )
    const signupLink = screen.getByRole('link', {
        name: /sign up/i
      })
    expect(signupLink).toBeInTheDocument
})
it('submits the form with user input', () => {
    const mockSignIn = jest.fn();

    render(
      <BrowserRouter>
        <SignIn signin={mockSignIn} />
      </BrowserRouter>
    );

    userEvent.type(screen.getByPlaceholderText('email'), 'test@example.com');
    userEvent.type(screen.getByPlaceholderText('password'), 'password123');

    fireEvent.submit(screen.getByText('Login'));

    expect(mockSignIn).toHaveBeenCalledWith({
      user: { email: 'test@example.com', password: 'password123' },
    });
});