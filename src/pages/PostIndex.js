import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

function PostIndex ({ posts }) {
  return (
      <>
      <main> 
        {posts?.map((post, index) => {
            <h2>Builds</h2>
            return(
                <div className="index-container" >
                    <Card className="index-card" color='warning'
                        style={{
                            width: '18rem'
                        }}
                        key={index}
                        >
                    <CardImg className="index-image"
                    alt={`profile picture for ${post.title}`}
                    src={post.image}
                    />
                        <CardBody>
                            <CardTitle tag="h5">
                                {`Title: ${post.title}`}
                            </CardTitle>
                            <CardSubtitle tag="h6">
                                {`Made By: ${post.userName}`}
                            </CardSubtitle>
                            <Button>
                                <NavLink to={`/postsshow/${post.id}`} className="nav-link">
                                See more details
                                </NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </div>
          )
        })}
      </main>
    </>
    )
}

export default PostIndex