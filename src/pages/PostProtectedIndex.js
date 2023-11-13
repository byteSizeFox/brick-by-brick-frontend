import React from "react"
import { Card, CardImg, CardBody, CardTitle, Button, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom"


const PostProtectedIndex = ({posts, currentUser}) => {
    const currentPosts = posts?.filter(post => post.user_id === currentUser?.id)
    return (
        <>
            <main className="index-container"> 
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
                                {`Made By: ${post.username}`}
                            </CardSubtitle>
                            <Button>
                                <NavLink to={`/mypostshow/${post.id}`
                                }>
                                    See more details
                                </NavLink>
                            </Button>
                            <Button>
                                <NavLink to={`/postedit/${post.id}`
                                }>
                                    Edit Post
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