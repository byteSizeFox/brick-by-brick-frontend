import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from "reactstrap"


function PostEdit({ posts, updatePost }) {
    const {id} = useParams()
    let currentPost = posts?.find(posts => posts.id === +id)
    const [ editPost, setEditPost] = useState({
        title: currentPost.title,
        timeSpent: currentPost.timeSpent,
        difficulty: currentPost.difficulty,
        price: currentPost.price,
        review: currentPost.review,
        image: currentPost.image
    })
    console.log('editPost', editPost)

    const handleChange = (e) => {
        setEditPost({...editPost, [e.target.title]: e.target.value})
    }
    const navigate = useNavigate()
    const handleSubmit = () => {
        updatePost(editPost, currentPost.id)
        navigate('/post')
    }

  return (
    <div>
      <h2 className="add-a-post">Add your Build!</h2>
        <Form className="edit-post-form">
            <FormGroup>
                <Label for="title">
                    Title
                </Label>
                <Input id="title" name="title" placeholder="Build title" type="string" onChange={handleChange} value={editPost.title}/>
            </FormGroup>
            <FormGroup>
                <Label for="timeSpent">
                    Time Spent
                </Label>
                <Input id="timeSpent" name="timeSpent" placeholder="How long did it take you to build?" type="string" onChange={handleChange} value={editPost.timeSpent}/>
            </FormGroup>
            <FormGroup>
                <Label for="difficulty">
                    Difficulty
                </Label>
                <Input id="difficulty" name="difficulty" placeholder="What is the difficulty of your build?" type="number" onChange={handleChange} value={editPost.difficulty}/>
            </FormGroup>
            <FormGroup>
                <Label for="price">
                    Price
                </Label>
                <Input id="price" name="price" placeholder="How much did your build cost?" type="url" onChange={handleChange} value={editPost.price}
                />
            </FormGroup>
            <FormGroup>
                <Label for="review">
                    Review
                </Label>
                <Input id="review" name="review" placeholder="Place your review of the build here." type="url" onChange={handleChange} value={editPost.review}
                />
            </FormGroup>
            <FormGroup>
                <Label for="image">
                    Image
                </Label>
                <Input id="image" name="image" placeholder="Place your image url here." type="url" onChange={handleChange} value={editPost.image}
                />
            </FormGroup>
            < Button onClick={handleSubmit} name="submit">
                Submit
            </Button>
        </Form>
    </div>
  )
}

export default PostEdit