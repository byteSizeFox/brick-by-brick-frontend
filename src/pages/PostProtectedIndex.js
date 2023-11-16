import React from "react"
import { Card, CardImg, CardBody, CardTitle, Button, CardSubtitle, NavItem } from "reactstrap";
import { NavLink, Navigate, useNavigate } from "react-router-dom"


const PostProtectedIndex = ({posts, currentUser}) => {
    const currentPosts = posts?.filter(post => post.user_id === currentUser?.id)
    
    return (
        <>
            <main className="index-container"> 
                {currentPosts?.length === 0 ? (
                    <div className="no-post-pic"> 
                    <NavItem>
                        <NavLink to="/postnew"> 
                            <Button>
                                Post your first Build!
                            </Button>
                        </NavLink>
                    </NavItem>
                    </div>
                ):( 
                currentPosts?.map((post, index) => (
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
                            
                            <Button className="postedit-button">
                                <NavLink to={`/mypostshow/${post.id}`
                                }>
                                    See more details
                                </NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                    ))
                )}
            </main>
        </>
    )
}

export default PostProtectedIndex