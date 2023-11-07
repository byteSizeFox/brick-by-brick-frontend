import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { Card, CardBody, CardLink, CardSubtitle, CardTitle, CardText, Button, ListGroup, ListGroupItem } from "reactstrap"

function PostProtectedShow({ posts, currentUser }) {
    const { id } = useParams()
        if (currentUser.id === posts.user_id) {
            let currentPost = posts?.find((post) => post.id === +id)

    return (
        <>
            <Card className="post-show-card">
            <img
                alt="post-show-image"
                src={currentPost.image}
            />
                <CardBody>
                    <CardTitle tag="h5">
                        {currentPost.userName}'s "{currentPost.title}" Build
                    </CardTitle>
                </CardBody>
                    <ListGroup flush>
                        <ListGroupItem>
                            Time spent on build: {currentPost.timeSpent}
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
                            to={`/postedit/${currentPost.id}`}
                        >
                            Edit
                        </Button>
                    </NavLink>
                    <NavLink to="/myposts">
                    <Button 
                        id="post-show-delete-button" 
                        to="/myposts"
                    >
                        Delete
                    </Button>
                    </NavLink>
                </CardBody>
            </Card>
            
        </>
    )
        }
        else {
            return ( 
                <div>You do not have access to this page.</div>
            )
        }
}

export default PostProtectedShow