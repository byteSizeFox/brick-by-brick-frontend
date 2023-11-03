import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { Card, CardBody, CardLink, CardSubtitle, CardTitle, CardText, Button, ListGroup, ListGroupItem } from "reactstrap"

function PostShow({ posts }) {
  const { id } = useParams()
  let currentPost = posts?.find((post) => post.id === +id)

  return (
    <>
          <Card
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="post-show-image"
        src={currentPost.image}
      />
        <CardBody>
            <CardTitle tag="h5">
            {currentPost.userName}'s {currentPost.title} Build
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
            <CardLink href="#">
            Card Link
            </CardLink>
            <CardLink href="#">
            Another Card Link
            </CardLink>
        </CardBody>
    </Card>
    </>
  )
}

export default PostShow