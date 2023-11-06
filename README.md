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
    <Label for="title">
      Title
    </Label>
    <Input
      id="title"
      name="title"
      placeholder="Build Title"
      type="string"
    />
  </FormGroup>
  <FormGroup>
    <Label for="timeSpent">
      Time Spent
    </Label>
    <Input
      id="timeSpent"
      name="timeSpent"
      placeholder="How long did it take you to build?"
      type="string"
    />
  </FormGroup>
  <FormGroup>
    <Label for="difficulty">
      Select One
    </Label>
    <Input
      id="difficulty"
      name="difficulty"
      type="number"
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
    <Label for="price">
      Price
    </Label>
    <Input
      id="price"
      name="price"
      type="string"
    >
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="review">
      Review
    </Label>
    <Input
      id="review"
      name="review"
      type="string"
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
  
  <Button onClick={handleSubmit} name="submit">
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



### Old PostNew form:
```jsx
        <Form className="new-post-form">
            <FormGroup>
                <Label for="title">
                    Title
                </Label>
                <Input id="title" name="title" placeholder="Build title" type="string" onChange={handleChange} value={newPost.title}/>
            </FormGroup>
            <FormGroup>
                <Label for="timeSpent">
                    Time Spent
                </Label>
                <Input id="timeSpent" name="timeSpent" placeholder="How long did it take you to build?" type="string" onChange={handleChange} value={newPost.timeSpent}/>
            </FormGroup>
            <FormGroup>
                <Label for="difficulty">
                    Difficulty
                </Label>
                <Input id="difficulty" name="difficulty" placeholder="What is the difficulty of your build?" type="number" onChange={handleChange} value={newPost.difficulty}/>
            </FormGroup>
            <FormGroup>
                <Label for="price">
                    Price
                </Label>
                <Input id="price" name="price" placeholder="How much did your build cost?" type="string" onChange={handleChange} value={newPost.price}
                />
            </FormGroup>
            <FormGroup>
                <Label for="review">
                    Review
                </Label>
                <Input id="review" name="review" placeholder="Place your review of the build here." type="string" onChange={handleChange} value={newPost.review}
                />
            </FormGroup>
            <FormGroup>
                <Label for="image">
                    Image
                </Label>
                <Input id="image" name="image" placeholder="Place your image url here." type="url" onChange={handleChange} value={newPost.image}
                />
            </FormGroup>
            < Button onClick={handleSubmit} name="submit">
                Submit
            </Button>
        </Form>

```
```jsx
<FormGroup>
                <Label for="addimage">
                    Add Image
                </Label>
                <Input
                id="exampleFile"
                name="file"
                type="file"
                onChange={handleChange}
                value={newPost.image}
                />
                <FormText>
                    Select your image to upload.
                </FormText>
            </FormGroup>
```

### How to add an image to rails

Q: What data type neeeds to be in my Rails model (this is a decoupled app) in order to be able to get my image adding feature to work. This is what it looks like the state is storing when I inpect the page on chrome: b', …} difficulty : "4" image : "" price : "cvb" review : "dfgb" timeSpent : "df" title : "sdfvg" [[Prototype]] : Object

A: In your Rails model, you would typically use ActiveStorage for handling file uploads, including images. This doesn't require a specific data type in your model. Instead, you would use the has_one_attached or has_many_attached methods in your model to specify that it should have an attached file or files.

Here's an example of how you might set this up for an image:

end
In this case, image is not a field in your database, but a method provided by ActiveStorage. When you attach a file, ActiveStorage will handle storing it and associating it with your model.

When you want to attach an image to a post, you can do something like this:

In this case, params[:image] would be the image file that you're uploading. This could come from a form submission, for example.

Please note that you'll need to have ActiveStorage set up in your Rails application for this to work. This typically involves running a migration that ActiveStorage provides, which will create the necessary tables in your database.