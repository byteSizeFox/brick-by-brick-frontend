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
                                Anabella Sandino
                            </span>
                        </CardTitle>
                        <CardText>
                        Native to North Carolina, currently located in the city of Winston Salem, they have a background predominantly associated with the Customer Service Industry. Proficient in both English and Spanish, they have discovered the beauty of connecting with people through different tongues, expanding their cultural horizons along the way. Recently, they have embarked on a thrilling journey into the realm of coding. Learning the language of computers has opened up a whole new world of creativity and problem-solving for them. Passion fuels their every endeavor, and two areas that set their soul on fire are exercise and the pursuit of knowledge. Staying active is not just a routine but a celebration of life. Equally, their thirst for knowledge knows no bounds — they are always seeking new skills, insights, and perspectives to enrich their understanding of the world.
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
                                Louis Brizuela
                            </span>
                        </CardTitle>
                        <CardText>
                        A Bay Area native that has recently relocated to sunny San Diego. With a deep passion for programming and art, Spent 4 years in the United States Marine Corps and is so grateful for the memories, connections, and lessons learned. Beyond military experience, Hes an artist, pouring his creativity into captivating traditional and digital works. His passion for computer science shines through as he progress in coding, showcasing his talent and dedication in the world of technology. Embodying the perfect blend of military commitment and artistic and technical prowess.
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
                                Mal Sherer
                            </span>
                        </CardTitle>
                        <CardText>
                        I'm Mal, the product manager for Brick By Brick. After over a decade of working in customer service, I was eager for a change and enrolled in LEARN Academy, specializing in full-stack web development. As a web developer, I have a passion for discovering how things work and finding creative solutions to every day problems. An avid sports fan, I can be found after work cheering for San Diego Wave FC and playing as a defender with my local recreational soccer league. I’m currently based in Los Angeles, where I live with my two cats and an ever growing collection of carnivorous plants.
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
                                Shaun Stephenson
                            </span>
                        </CardTitle>
                        <CardText>
                        He is a San Diego native with a fervent passion for the sun, surf, and coding. He calls the vibrant coastal city his home, where his love for the beach is profound. Often, he can be found soaking up the sun or surfing, with his extraordinary three-legged dog by his side. This resilient canine companion brings an adventurous dimension to his life. Beyond the sandy shores, he is deeply immersed in the world of coding, constantly seeking new challenges and innovations in the digital realm. He finds joy in maintaining a balance between his tech-driven interests and the natural beauty of San Diego, embodying the perfect blend of technology and the serenity of the ocean breeze.
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