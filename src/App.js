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
    const [currentUser, setCurrentUser] = useState(null)
    const [posts, setPosts] = useState([])
    const url = "http://localhost:3000"

    const signin = (userInfo) => {
        fetch(`${url}/signin`, {
            body: JSON.stringify(userInfo), headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
             method: "POST"
        })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            localStorage.setItem("token", response.headers.get("Authorization"))
            return response.json()
        })
        .then(payload => {
            setCurrentUser(payload)
        })
        .catch(error => console.log("login errors: ", error))
    }
    const signup = (userInfo) => {
        fetch(`${url}/signup`, {
            body: JSON.stringify(userInfo),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST"
        })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            localStorage.setItem("token", response.headers.get("Authorization"))
            return response.json()
        })
        .then(payload => {
            setCurrentUser(payload)
        })
        .catch(error => console.log("login errors: ", error))
    }

    const logout = () => {
        fetch(`${url}/logout`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token") 
            },
            method: "DELETE"
        })
        .then(payload => {
            localStorage.removeItem("token")  
            setCurrentUser(null)
        })
        .catch(error => console.log("log out errors: ", error))
    }
        
    

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
        <Header currentUser={currentUser} signin={signin} logout={logout} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/postedit/:id" element={<PostEdit />} />
            <Route path="/postindex" element={<PostIndex posts={posts} />} />
            <Route path="/postnew" element={<PostNew createPost={createPost} />} />
            <Route path="/myposts" element={<PostProtectedIndex currentUser={currentUser} posts={posts} />} />
            <Route path="/mypostshow/:id" element={<PostProtectedShow currentUser={currentUser} posts={posts} />} />
            <Route path="/postshow/:id" element={<PostShow posts={posts} />} />
            <Route path="/signin" element={<SignIn signin={signin} />} />
            <Route path="/signup" element={<SignUp signup={signup} />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App