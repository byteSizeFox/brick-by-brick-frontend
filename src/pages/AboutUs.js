import React from "react"
import { CardBody, CardTitle, CardText, CardLink, Card } from "reactstrap"
import githublogo from "../assets/githublogo.png" 
import linkedinlogo from "../assets/linkedinlogo.png" 
import anabella from "../assets/anabella.png"
import louis from "../assets/louis.png"
import mal from "../assets/mal.png"
import shaun from "../assets/shaun.png"
import '../AboutUs.css'

const AboutUs = () => {
    return (
        <> 
            <div className = "card-container">
                <Card
                    style={{
                    width: '18rem'
                    }}
                >
                <img
                    alt="a lego version of anabella"
                    src= {anabella}
                />
                    <CardBody>
                        <CardTitle tag="h5">
                            <span className="font-link">
                                Anabella
                            </span>
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardText>
                    </CardBody>
                    <CardBody className= "contact-us-links">
                        <CardLink href="https://github.com/aesandino" target="_blank">
                            <img 
                                src = {githublogo}
                                alt = "github logo" 
                                className = "github-logo"
                            />
                        </CardLink>
                        <CardLink href="https://www.linkedin.com/in/anabella-sandino-298128293/" target="_blank">
                        <img 
                                src = {linkedinlogo}
                                alt = "linked in logo" 
                                className = "linkedin-logo"
                            />
                        </CardLink>
                    </CardBody>
                </Card>

                <Card
                    style={{
                    width: '18rem'
                    }}
                >
                <img
                    alt="a lego version of louis"
                    src= {louis}
                />
                    <CardBody>
                        <CardTitle tag="h5">
                            <span className="font-link">
                                Louis
                            </span>
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardText>
                    </CardBody>
                    <CardBody className= "contact-us-links">
                        <CardLink href="https://github.com/LouisBrizuela" target="_blank">
                            <img 
                                src = {githublogo}
                                alt = "github logo" 
                                className = "github-logo"
                            />
                        </CardLink>
                        <CardLink href="https://www.linkedin.com/in/louis-brizuela-35b0ab177" target="_blank">
                            <img 
                                src = {linkedinlogo}
                                alt = "linked in logo" 
                                className = "linkedin-logo"
                            />
                        </CardLink>
                    </CardBody>
                </Card>

                <Card
                    style={{
                    width: '18rem'
                    }}
                >
                <img
                    alt="a lego version of mal"
                    src= {mal}
                />
                    <CardBody>
                        <CardTitle tag="h5">
                            <span className="font-link">
                                Mal
                            </span>
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardText>
                    </CardBody>
                    <CardBody className= "contact-us-links">
                        <CardLink href="https://github.com/malsherer" target="_blank">
                            <img 
                                src = {githublogo}
                                alt = "github logo" 
                                className = "github-logo"
                            />
                        </CardLink>
                        <CardLink href="https://www.linkedin.com/in/mgsherer" target="_blank">
                            <img 
                                src = {linkedinlogo}
                                alt = "linked in logo" 
                                className = "linkedin-logo"
                            />
                        </CardLink>
                    </CardBody>
                </Card>

                <Card
                    style={{
                    width: '18rem'
                    }}
                >
                <img
                    alt="a lego version of shaun"
                    src= {shaun}
                />
                    <CardBody>
                        <CardTitle tag="h5">
                            <span className="font-link">
                                Shaun
                            </span>
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardText>
                    </CardBody>
                    <CardBody className= "contact-us-links">
                        <CardLink href="https://github.com/shaunfitzgarald" target="_blank">
                            <img 
                                src = {githublogo}
                                alt = "github logo" 
                                className = "github-logo"
                            />
                        </CardLink>
                        <CardLink href="https://www.linkedin.com/in/shaunfitzgarald" target="_blank">
                            <img 
                                src = {linkedinlogo}
                                alt = "linked in logo" 
                                className = "linkedin-logo"
                            />
                        </CardLink>
                    </CardBody>
                </Card>
            </div>
        </>

    )
}

export default AboutUs