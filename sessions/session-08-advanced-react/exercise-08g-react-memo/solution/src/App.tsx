import Header from './components/Header'
import { PostsContext } from './PostsContext'
import { Container } from '@mantine/core'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AllPostsPage from './pages/AllPostsPage'
import AddPostPage from './pages/AddPostPage'
import PostDetailsPage from './pages/PostDetailsPage'
import EditPostPage from './pages/EditPostPage'
import NavBar from './components/NavBar'
import { useApi } from './hooks/useApi'

export default function App() {
  const { posts, createPost, updatePost, deletePost } = useApi()

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
          <Route path="/posts/:id/edit" element={<EditPostPage />} />
        </Routes>
      </Container>
    </PostsContext.Provider>
  )
}
