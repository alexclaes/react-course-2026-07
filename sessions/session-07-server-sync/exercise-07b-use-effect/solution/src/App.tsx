import Header from './components/Header'
import { useEffect, useState } from 'react'
import { uid } from 'uid'
import { PostsContext } from './PostsContext'
import { Container } from '@mantine/core'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AllPostsPage from './pages/AllPostsPage'
import AddPostPage from './pages/AddPostPage'
import PostDetailsPage from './pages/PostDetailsPage'
import NavBar from './components/NavBar'
import { api } from './api'
import type { PostData } from './types'

export default function App() {
  const [posts, setPosts] = useState<PostData[]>([])

  async function loadPosts() {
    const response = await api.getPosts()
    const data: PostData[] = await response.json()
    setPosts(data)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  function createPost(newPost: Omit<PostData, 'id' | 'votes'>) {
    setPosts([...posts, { id: uid(), votes: 0, ...newPost }])
  }

  function updatePost(id: string, updatedItem: Partial<PostData>) {
    setPosts(
      posts.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item,
      ),
    )
  }

  function deletePost(id: string) {
    setPosts(posts.filter((item) => item.id !== id))
  }

  return (
    <PostsContext.Provider
      value={{ posts, createPost, updatePost, deletePost }}
    >
      <Header />
      <NavBar />
      <Container size="sm" py="xl">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/posts" element={<AllPostsPage />} />
          <Route path="/add-post" element={<AddPostPage />} />
          <Route path="/posts/:id" element={<PostDetailsPage />} />
        </Routes>
      </Container>
    </PostsContext.Provider>
  )
}
