### "Welcome to BrickByBrick, 
the ultimate sanctuary for LEGO builders, beginners, and aficionados alike! Our platform is meticulously designed to cater to your love for LEGO, offering an all-encompassing space to celebrate creativity, share accomplishments, and plan your next masterpiece.

Our journey begins on the sleek homepage where signing up or logging in is a breeze. With just a username, email, and password, you unlock a world brimming with colorful blocks and infinite possibilities. Your personalized profile is more than just a digital space; it's a canvas where you can paint your LEGO journey. Add an 'About Me', showcase your latest creations, and curate a wishlist that keeps your aspirations in sight.

Delve into the detailed pages of each LEGO build. From images that capture your creation's brilliance to specifics like time invested, difficulty level, and cost, we ensure your story is told in its entirety. With our intuitive interface, adding a new build, or updating an existing one, is just a few clicks away. And the best part? Every build you complete or wishlist item you dream of is seamlessly integrated into your profile for the world to admire.

But BrickBuddies is more than a personal diary; it's a thriving community. Share your finished projects, inspire and get inspired, and witness your profile evolve as you progress in your building journey. Deleting or modifying your builds is simple, ensuring your space remains a true reflection of your LEGO adventure.

So, why wait? Join BrickBuddies today and transform your passion for LEGO into a shared experience. Here, every brick, every build, tells a story. Let's construct these stories together, one block at a time. Step into a realm where your LEGO dreams find a home!"


### PostNew form
```jsx
<Form>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Select
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelectMulti">
      Select Multiple
    </Label>
    <Input
      id="exampleSelectMulti"
      multiple
      name="selectMulti"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      Text Area
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleFile">
      File
    </Label>
    <Input
      id="exampleFile"
      name="file"
      type="file"
    />
    <FormText>
      This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
    </FormText>
  </FormGroup>
  <FormGroup tag="fieldset">
    <legend>
      Radio Buttons
    </legend>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Option one is this and that—be sure to include why it‘s great
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Option two can be something else and selecting it will deselect option one
      </Label>
    </FormGroup>
    <FormGroup
      check
      disabled
    >
      <Input
        disabled
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Option three is disabled
      </Label>
    </FormGroup>
  </FormGroup>
  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
      Check me out
    </Label>
  </FormGroup>
  <Button>
    Submit
  </Button>
</Form>
```

### Fix font size in Header (try to make it colorful on hover)


--------------------------

### Old PostIndex Page

```jsx
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
                                        <NavLink to={`/postshow/${post.id}`} className="nav-link">
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
```