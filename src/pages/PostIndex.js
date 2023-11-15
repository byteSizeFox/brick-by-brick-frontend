import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import defaultImage from '../assets/default-image.png'

function PostIndex({ posts }) {
  return (
    <>
        <main className="index-container"> 
            {posts?.map((post, index) => (
                <Card className="card" color='warning' key={index} >
                    <CardImg
                        top
                        width="100%" 
                        src={post?.image || defaultImage}
                        alt={`profile picture for ${post.title}`}
                        className="index-image"
                        onError={(e) => { e.target.onerror = null; e.target.src = defaultImage; }}
                    />
                    <CardBody>
                        <CardTitle tag="h5" className="index-title">
                            {post.title}
                        </CardTitle>
                        <CardSubtitle tag="h6" className="index-subtitle">
                            {`Made By: ${post.username}`}
                        </CardSubtitle>

                        <Button className="index-button">
                            <NavLink to={`/postshow/${post.id}`} className="nav-link">
                                See more details
                            </NavLink>
                        </Button>
                    </CardBody>
                </Card>
            ))}
        </main>
    </>
  );
}

export default PostIndex;
