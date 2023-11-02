import React from "react"
import { Card, CardBody, CardTitle, CardImg, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const PostIndex = ({ posts }) => {
  return (
    <>
      <h2>Builds</h2>
      <main>
        
        {posts?.map((post, index) => {
          return(
                <Card
                  style={{
                    width: '18rem'
                  }}
                  key={index}
                >
                <CardImg
                  alt={`profile picture for ${post.title}`}
                  src={post.image}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {`${post.bedrooms} beds and ${post.bedrooms} bathrooms in ${post.state}`}
                  </CardTitle>
                  <Button>
                    <NavLink to={`/postsshow/${post.id}`} className="nav-link">
                      See more details
                    </NavLink>
                  </Button>
                </CardBody>
              </Card>

          )
        })}
      </main>
    </>
  )
}

export default PostIndex