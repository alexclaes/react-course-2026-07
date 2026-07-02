import Header from './components/Header'
import PostList from './components/PostList'
import { useState } from 'react'
import PostForm from './components/PostForm'
import {Container, Divider} from '@mantine/core'
import type { PostData } from './types'

const initialPosts: PostData[] = [
  {
    id: '8bbb404c41c',
    title: 'Production Deployment am Freitagabend',
    author: 'Nina',
    date: '2026-06-01',
    message: 'No risk, no Risiko!',
  },
  {
    id: 'bbb404c41cd',
    title: 'Nur kurz ein kleines Refactoring',
    author: 'Sophie',
    date: '2026-06-07',
    message: 'Jetzt ist der Code sauberer, aber nichts geht mehr.',
  },
  {
    id: '404c41cd100',
    title: 'TypeScript hat wieder recht gehabt',
    author: 'Felix',
    date: '2026-06-13',
    message: 'Ich war kurz beleidigt, dann war ich dankbar.',
  },
  {
    id: '1a2b3c4d5e6',
    title: 'Kurz das Build fixen',
    author: 'Tim',
    date: '2026-06-27',
    message:
      'Der Fix war klein. Die Nebenwirkungen hatten eher Enterprise-Größe.',
  },
]

export default function App() {
  const [posts, setPosts] = useState<PostData[]>(initialPosts)

  return (
    <>
      <Header />
      <Container size="sm" py="xl">
        <PostList posts={posts} />
        <Divider my="xl" />
        <PostForm />
      </Container>
    </>
  )
}
