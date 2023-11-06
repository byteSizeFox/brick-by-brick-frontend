import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

function PostIndex({ posts }) {
  return (
    <>
      <main className="container"> {/* Updated to use container class for flex layout */}
        <h2>Builds</h2> {/* Moved this outside of map function, it should not repeat */}
        {posts?.map((post, index) => (
          // Each card is now a "card" class to correspond with the CSS
          <Card className="card" color='warning' key={index} >
            <CardImg
              top
              width="100%" // This ensures image takes up 100% of card's width
              src={post.image}
              alt={`profile picture for ${post.title}`}
              className="index-image" // You may add CSS for "index-image" if needed
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
  );
}

export default PostIndex;
