import React, { useState } from "react";
import { Form, FormGroup, FormText, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom";

function PostNew ({createPost}) {
    const [newPost, setNewPost ] = useState({
        title: "",
        timeSpent: "",
        difficulty: "",
        price: "",
        review: "",
        image: "",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewPost({...newPost, [e.target.name]: e.target.value})
    }
    console.log("newPost", newPost)

    const handleSubmit = () => {
        createPost(newPost)
        navigate("/postindex")
    }

return (
    <>
        <h2 className="add-a-post">Add your Build!</h2>
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
                <Label for="addimage">
                    Add Image
                </Label>
                <Input
                id="exampleFile"
                name="file"
                type="file"
                />
                <FormText>
                    Select your image to upload.
                </FormText>
            </FormGroup>
            < Button onClick={handleSubmit} name="submit">
                Submit
            </Button>
        </Form>
    </>
    )
}


export default PostNew