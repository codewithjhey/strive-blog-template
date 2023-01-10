import React from "react"
import { Container } from "react-bootstrap"
import BlogList from "../../components/blog/blog-list/BlogList"
import { useState, useEffect } from "react"
import "./styles.css"

const Home = () => {
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    fetchBlogPosts()
  }, [])
  const fetchBlogPosts = async () => {
    try {
      const res = await fetch(`http://localhost:3001/blogPosts`)
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        setBlogPosts(data)
      } else {
        alert("there was an error fetching")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container fluid="sm">
      <h1 className="blog-main-title">Welcome to the Epicode Blog!</h1>
      <BlogList blogPosts={blogPosts} />
    </Container>
  )
}

export default Home
