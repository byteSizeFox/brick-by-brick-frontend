import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { Card, CardBody, CardLink, CardSubtitle, CardTitle, CardText, Button, ListGroup, ListGroupItem } from "reactstrap"

function PostShow({ posts }) {
  const { id } = useParams()
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
                    <NavLink to="/postindex" >
                    <Button id="post-show-back-button" to="/postindex">
                        Back
                    </Button>
                    </NavLink>
                    <NavLink to={`/postedit/${currentPost.id}`}>
                        <Button id="post-show-edit-button">
                            Edit
                        </Button>
                    </NavLink>
                    <NavLink to="/postindex">
                    <Button id="post-show-delete-button" to="/postindex">
                        Delete
                    </Button>
                    </NavLink>
                </CardBody>
            </Card>
        </>
    )
}

export default PostShow