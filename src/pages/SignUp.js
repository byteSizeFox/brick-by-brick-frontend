import React, {useRef} from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

const SignUp = ({signup}) => {

  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault()

    const formData = new FormData(formRef.current)

    const data = Object.fromEntries(formData)

    const userInfo = {
      "user":{ email: data.email, username: data.username, password: data.password }
    }
    signup(userInfo)
    navigate("/")
    e.target.reset()
  }
  return(

    <div className="signup-background">
    <div className="card-signup">
      <Card 
        color="warning"
        style={{
        width: '18rem'
      }}
  >
    <img
      alt="lego-beetles"
      src="https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnb3xlbnwwfHwwfHx8MA%3D%3D"
    />
    <CardBody>
      <CardTitle tag="h5">
        Please Sign up!
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Future Lego Master Builder!
      </CardSubtitle>
      <CardText>
      <div>
        <form ref={formRef} onSubmit={handleSubmit}>
          Email: <input type="email" name="email" placeholder="email" />
          <br/>
          Username: <input type="username" name="username" placeholder="username" />
          <br/>
          Password: <input type="password" name="password" placeholder="password" />
          <br/>
          Confirm Password: <input type="password" name="password_confirmation" placeholder="confirm password" />
          <br/>
          <input type="submit" value="Submit" />
        </form>
        <br />
        <div>Already registered, <NavLink to="/signin">Login</NavLink></div>
      </div>
      </CardText>
      </CardBody>
    </Card>
    </div>
    </div>
  )
}

export default SignUp

