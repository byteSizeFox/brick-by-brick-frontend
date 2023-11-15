import React from "react"
import { Button } from "reactstrap"
import collage from "../assets/collage.jpg"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
import { NavLink } from 'react-router-dom';

function Home ({currentUser}) {
    return (    
        <div className="home-container">
                <Card className="home-card">
                    <CardBody>
                        <CardTitle tag="h5">
                            Welcome to BrickByBrick!
                        </CardTitle>
                        <CardText>
                            Introducing our platform, the ultimate digital haven for LEGO enthusiasts! Imagine a space where you can showcase your completed LEGO builds, maintain an organized wishlist for future projects, and chronicle your journey one brick at a time. From the moment you land on our homepage, you're in control. Quickly sign up or log in, and you'll be greeted with a user-friendly profile that's as dynamic as your creations. Personalize it with a profile picture and a bio. Dive into each build's intricacies with detailed data like time spent, difficulty, and cost. Share your proudest completions or your next big dream project. Whether you're updating an old masterpiece, flaunting a new one, or simply drawing inspiration from the community, our platform is your LEGO storybook. Join us, and let's build memories together!
                        </CardText>
                        {!currentUser ? (
                        <>
                            <Button color="warning">
                                <NavLink 
                                    to="/signup" 
                                    className="nav-link"
                                >
                                    Sign-Up!
                                </NavLink>
                            </Button>
                            <Button color="warning">
                                <NavLink 
                                    to="/signin" 
                                    className="nav-link"
                                >
                                    Sign-In
                                </NavLink>
                            </Button>
                        </>
                        ) : (
                        <CardText>
                            Welcome back, {currentUser.username}!
                        </CardText>
                        )}
                </CardBody>
            </Card>
        </div>  
    );
}

export default Home