import Header from './components/Header'
import { useState } from 'react'
import { uid } from 'uid'
import { PostsContext } from './PostsContext'
import { Container } from '@mantine/core'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AllPostsPage from './pages/AllPostsPage'
import AddPostPage from './pages/AddPostPage'
import PostDetailsPage from './pages/PostDetailsPage'
import NavBar from './components/NavBar'
import type { PostData } from './types'

const initialPosts: PostData[] = [
  {
    id: '8bbb404c41c',
    title: 'Production Deployment am Freitagabend',
    author: 'Nina',
    date: '2026-06-01',
    message: 'No risk, no Risiko!',
    votes: 0,
  },
  {
    id: 'bbb404c41cd',
    title: 'Nur kurz ein kleines Refactoring',
    author: 'Sophie',
    date: '2026-06-07',
    message: 'Jetzt ist der Code sauberer, aber nichts geht mehr.',
    votes: 0,
  },
  {
    id: '404c41cd100',
    title: 'TypeScript hat wieder recht gehabt',
    author: 'Felix',
    date: '2026-06-13',
    message: 'Ich war kurz beleidigt, dann war ich dankbar.',
    votes: 0,
  },
  {
    id: '1a2b3c4d5e6',
    title: 'Kurz das Build fixen',
    author: 'Tim',
    date: '2026-06-27',
    message:
      'Der Fix war klein. Die Nebenwirkungen hatten eher Enterprise-Größe.',
    votes: 0,
  },
]

export default function App() {
  const [posts, setPosts] = useState<PostData[]>(initialPosts)

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
