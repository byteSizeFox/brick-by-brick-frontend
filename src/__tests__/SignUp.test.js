import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event';
import SignUp from '../pages/SignUp'

describe("sign up page", () => {
    it("renders the sign up page", () => {
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )
        const greetingLink = screen.getByRole('heading', { 
            name: /please sign up!/i 
        })
        expect(greetingLink).toBeInTheDocument()
    })

    it('submits the form with user input', () => {
        const mockSignUp = jest.fn();
    
        render(
          <BrowserRouter>
            <SignUp signup={mockSignUp} />
          </BrowserRouter>
        );
    
        userEvent.type(screen.getByPlaceholderText('email'), 'test@example.com');
        userEvent.type(screen.getByPlaceholderText('password'), 'password123');
        userEvent.type(screen.getByPlaceholderText('username'), 'testname')
    
        fireEvent.submit(screen.getByText('Submit'));
    
        expect(mockSignUp).toHaveBeenCalledWith({
          user: { email: 'test@example.com', password: 'password123', username: 'testname' },
        });
    });    
})