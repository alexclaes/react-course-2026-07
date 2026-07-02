import Header from './components/Header'
import { useCallback, useEffect, useState } from 'react'
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

  const loadPosts = useCallback(async () => {
    const response = await api.getPosts()
    const data: PostData[] = await response.json()
    setPosts(data)
  }, [])

  useEffect(() => {
    loadPosts()
  }, [loadPosts])

  async function createPost(newPost: Omit<PostData, 'id' | 'votes'>) {
    setPosts([...posts, { id: uid(), votes: 0, ...newPost }])
    await api.createPost(newPost)
    loadPosts()
  }

  async function updatePost(id: string, updatedItem: Partial<PostData>) {
    setPosts(
      posts.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item,
      ),
    )
    await api.updatePost(id, updatedItem)
    loadPosts()
  }

  async function deletePost(id: string) {
    setPosts(posts.filter((item) => item.id !== id))
    await api.deletePost(id)
    loadPosts()
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
