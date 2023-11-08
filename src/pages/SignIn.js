import React, { useRef } from "react"
import { useNavigate, NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

const SignIn = ({ SignIn }) => {
  const formRef = useRef()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": { email: data.email, password: data.password }
    }
    SignIn(userInfo)
    navigate('/')
    e.target.reset()
  }
	return(
    
		<div className="signin-background">
			<div className="card-signup">
				<Card 
					color="warning"
					style={{
					width: '18rem'
				}}
			>
			<img
				alt="lego-spongebob"
				src="https://images.unsplash.com/photo-1558647913-d1c0e5d478fa?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxsZWdvJTIwbG9naW58ZW58MHx8MHx8fDA%3D"
			/>
					<CardBody>
						<CardTitle tag="h5">
							Welcome Back!
						</CardTitle>
						<CardSubtitle
							className="mb-2 text-muted"
							tag="h6"
						>
							Keep on Building!
						</CardSubtitle>
						<CardText>
							<div>
								<form ref={formRef} onSubmit={handleSubmit}>
									Email: <input type="email" name='email' placeholder="email" />
									<br/>
									Password: <input type="password" name='password' placeholder="password" />
									<br/>
									<input type='submit' value="Login" />
								</form>
								<br />
									<div> Not registered yet, 
										<NavLink to="/signup">Sign Up</NavLink> 
									</div>
							</div>
						</CardText>
					</CardBody>
				</Card>
			</div>
		</div>
	)
}
export default SignIn
