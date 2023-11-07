import React, { useState, useEffect } from 'react'
import AboutUs from './pages/AboutUs'   
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PostEdit from './pages/PostEdit'
import PostIndex from './pages/PostIndex'
import PostNew from './pages/PostNew'
import PostProtectedIndex from './pages/PostProtectedIndex'
import PostProtectedShow from './pages/PostProtectedShow'
import PostShow from './pages/PostShow'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import './PostIndex.css'
import mockPosts from './mockPosts'
import mockUsers from './mockUsers'
import { Route, Routes } from 'react-router-dom'

function App() {
    const [currentUser, setCurrentUser] = useState(mockUsers)
    const [posts, setPosts] = useState(mockPosts)

    const createPost = (newBuild) => {
        console.log("newBuild", newBuild)
    }
    const readPost = (id) => {
        console.log("readPost", id)
    }
    useEffect(() => {
        const loggedIn = localStorage.getItem("currentUser")
        if(loggedIn) {
          setCurrentUser(JSON.parse(loggedIn))
        }
        readPost()
    }, [])
    const updatePost = (editPost, id) => {
        console.log("editPost:", editPost, id)
    }

    return (
    <>  
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/postedit/:id" element={<PostEdit />} />
            <Route path="/postindex" element={<PostIndex posts={posts} />} />
            <Route path="/postnew" element={<PostNew createPost={createPost} />} />
            <Route path="/myposts" element={<PostProtectedIndex currentUser={currentUser} posts={posts} />} />
            <Route path="/mypostshow/:id" element={<PostProtectedShow currentUser={currentUser} posts={posts} />} />
            <Route path="/postshow/:id" element={<PostShow posts={posts} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp signup={SignUp} />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App