import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle, CardText, Button, ListGroup, ListGroupItem } from "reactstrap"
import defaultImage from '../assets/default-image.png'

function PostShow({ posts }) {
    const { id } = useParams()
    let currentPost = posts?.find((post) => post.id === +id)
    console.log("currentPost", currentPost)

    return (
        <>
            <main className="post-show-container">
                {currentPost &&
                    <Card className="post-show-card">
                        <CardImg
                            top
                            width="100%" 
                            src={currentPost?.image || defaultImage}
                            alt={`profile picture for ${currentPost.title}`}
                            className="index-image"
                            onError={(e) => { e.target.onerror = null; e.target.src = defaultImage; }}
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                {currentPost.username}'s "{currentPost.title}" Build
                            </CardTitle>
                        </CardBody>
                            <ListGroup flush>
                                <ListGroupItem>
                                    Time spent on build: {currentPost.time_spent}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Build Difficulty: {currentPost.difficulty}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Build Price: {currentPost.price}
                                </ListGroupItem>
                            </ListGroup>
                            <CardText>
                                {currentPost.review}
                            </CardText>
                        <CardBody>
                            <NavLink to="/postindex" >
                            <Button id="post-show-back-button" to="/postindex">
                                Back
                            </Button>
                            </NavLink>
                        </CardBody>
                    </Card>
            }     
        </main>  
        </>
    )
}

export default PostShow