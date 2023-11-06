import React from "react"
import { Card, CardImg, CardBody, CardTitle, Button, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom"


const PostProtectedIndex = ({posts, currentUser}) => {
    const currentPosts = posts.filter(post => post.user_id === 1)
    return (
        <>
            <main className="container"> 
                {currentPosts?.map((post, index) => (
                    <Card className="card" color='warning' key={index} >
                        <CardImg
                            top
                            width="100%" 
                            src={post.image}
                            alt={`profile picture for ${post.title}`}
                            className="index-image" 
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                {post.title}
                            </CardTitle>
                            <CardSubtitle tag="h6">
                                {`Made By: ${post.userName}`}
                            </CardSubtitle>
                            <Button>
                                <NavLink to={`/postshow/${post.id}`} className="nav-link">
                                    See more details
                                </NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                ))}
            </main>
        </>
    )
}

export default PostProtectedIndex