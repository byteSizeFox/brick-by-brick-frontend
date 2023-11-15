import React, { useState } from 'react'
import { useNavigate, useParams, NavLink } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

const PostEdit = ({ posts, updatePost, currentUser }) => {
    const {id} = useParams()
    let currentPost = posts?.find(post => post.id === +id)
    // let currentUserPosts = posts?.filter(post => post.user_id === currentUser.id)
    // let currentPost = currentUserPosts?.find(post => post.id === +id)

    console.log("post:", posts)
    console.log("currentUser", currentUser)
    console.log("currentPost", currentPost)

    const [ editPost, setEditPost] = useState({

        image: currentPost?.image,
        title: currentPost?.title,
        time_spent: currentPost?.time_spent,
        difficulty: currentPost?.difficulty,
        price: currentPost?.price,
        review: currentPost?.review,
        user_id: currentUser?.id,
        username: currentPost?.username
        
    })
    console.log("editPost:", editPost)

    const handleChange = (e) => {
        setEditPost({...editPost, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()

    const handleSubmit = () => {
        updatePost(editPost, currentPost?.id)
        navigate('/myposts')
    }

    if (!currentPost) {
        return <div> Post not found </div>
    }
    if (!currentUser) {
        return <div> You are not the owner of this post </div>
    }

    return (
        <div className="edit-a-post">
            <h2 className="edit-header">Edit your Build!</h2>               
            <Form className="edit-post-form">
                <FormGroup>
                    <Label for="title">
                        Title
                    </Label>
                    <Input 
                        id="title" 
                        name="title" 
                        placeholder="title" 
                        type="string" 
                        onChange={handleChange} 
                        value={editPost?.title}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="time_spent">
                        Time Spent
                    </Label>
                    <Input 
                        id="time_spent" 
                        name="time_spent" 
                        placeholder="How long did it take you to build?" 
                        type="string" 
                        onChange={handleChange} 
                        value={editPost?.time_spent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="difficulty">
                        Difficulty
                    </Label>
                    <Input 
                        id="difficulty" 
                        name="difficulty" 
                        placeholder="What is the difficulty of your build?" 
                        type="number" 
                        onChange={handleChange} 
                        value={editPost?.difficulty}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="price">
                        Price
                    </Label>
                    <Input 
                        id="price" 
                        name="price" 
                        placeholder="How much did your build cost?" 
                        type="url" 
                        onChange={handleChange} 
                        value={editPost?.price}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="review">
                        Review
                    </Label>
                    <Input 
                        id="review" 
                        name="review" 
                        placeholder="Place your review of the build here." 
                        type="url" 
                        onChange={handleChange} 
                        value={editPost?.review}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="image">
                        Image
                    </Label>
                    <Input 
                        id="image" 
                        name="image" 
                        placeholder="Place your image url here." 
                        type="url" 
                        onChange={handleChange} 
                        value={editPost?.image}
                    />
                </FormGroup>
                <NavLink>
                    < Button onClick={handleSubmit} name="submit">
                        Submit
                    </Button>
                </NavLink>
            </Form>
        </div>
    )
}

export default PostEdit