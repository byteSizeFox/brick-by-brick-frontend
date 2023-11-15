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
                        A Bay Area native that has recently relocated to sunny San Diego. With a deep passion for the military, I previously answered the call to serve and am so grateful for the memories, connections, and lessons learned. Beyond military experience, I'm a digital artist, pouring my creativity into captivating digital works. My passion for computer science shines through as I progress in coding, showcasing my talent and dedication in the world of technology. Embodying the perfect blend of military commitment and artistic and technical prowess.
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
                        Born and raised in Houston, Texas, my life has been a mix of technology and the beautiful game of soccer. The unique blend of cultures and opportunities in Houston has shaped who I am today, instilling in me a deep appreciation for diversity and the power of inclusion. The world of programming, with its endless possibilities and the ability to create and innovate, has been a constant source of inspiration for me. Whether it's building websites, or developing apps, coding has become my way of turning ideas into reality. But it's not all about screens and algorithms. Soccer is my second passion. On weekends, you'll often find me on the field, chasing a ball and sharing the beautiful game with friends and fellow enthusiasts.
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
                        I'm a San Diego native with a passion for the sun, surf, and coding. Having called this vibrant coastal city home, my love for the beach runs deep, and you'll often find me soaking up the sun or catching waves with my trusty three-legged companion by my side. Yes, my furry friend is a resilient and inspiring three-legged dog who adds an extra layer of adventure to my life. Beyond the sandy shores, I'm immersed in the world of coding, constantly seeking new challenges and innovations in the digital realm. And if you catch me switching seamlessly between English and German, it's because I've also developed a fluency in the German language. Whether I'm crafting lines of code or enjoying the ocean breeze, I find joy in the balance between the tech-driven world and the natural beauty that San Diego has to offer.
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