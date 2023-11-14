import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, Button, ListGroup, ListGroupItem } from "reactstrap"

function PostProtectedShow({ posts, deletePost }) {
    const { id } = useParams()
        let currentPost = posts.find(post => post.id === +id)
        console.log("currentPost:", currentPost)

    return (
        <> 
        {currentPost && (

            <Card className="post-show-card">
            <img
                alt="post-show-image"
                src={currentPost.image}
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
                    <NavLink to="/myposts" >
                        <Button 
                            id="post-show-back-button" 
                            to="/myposts"
                            >
                            Back
                        </Button>
                    </NavLink>
                    <NavLink to={`/postedit/${currentPost.id}`}>
                        <Button 
                            id="post-show-edit-button" 
                            >
                            Edit
                        </Button>
                    </NavLink>
                    <NavLink to='/myposts'>
                    <Button 
                        onClick={() => deletePost(currentPost.id)}
                        id="post-show-delete-button" 
                        to="/myposts"
                        >
                        Delete
                    </Button>
                    </NavLink>
                </CardBody>
            </Card>
        )}
        </>
    )
}

export default PostProtectedShow