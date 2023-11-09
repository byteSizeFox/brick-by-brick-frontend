import React, { useRef } from "react"
import { useNavigate, NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

const SignIn = ({ signin }) => {
  const formRef = useRef()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": { email: data.email, password: data.password }
    }
    signin(userInfo)
    navigate('/')
    e.target.reset()
  }
	return(
    
		<div>
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
		</div>
	)
}
export default SignIn
