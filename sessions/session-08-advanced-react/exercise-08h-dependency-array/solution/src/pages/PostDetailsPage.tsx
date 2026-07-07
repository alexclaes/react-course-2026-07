import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Button, Group } from '@mantine/core'
import { usePostsContext } from '../PostsContext'
import { api } from '../api'
import Post from '../components/Post'
import type { PostData } from '../types'

export default function PostDetailsPage() {
  const { id } = useParams()
  const { posts } = usePostsContext()
  const navigate = useNavigate()
  const [post, setPost] = useState<PostData | null>(null)

  async function loadPost() {
    if (!id) return
    const response = await api.getPost(id)
    if (!response.ok) {
      setPost(null)
      return
    }
    const data: PostData = await response.json()
    setPost(data)
  }

  useEffect(() => {
    loadPost()
  }, [id])


  if (!post) {
    return <p>Laden...</p>
  }


  const index = posts.findIndex((p) => p.id === id)
  const prevId = index > 0 ? posts[index - 1].id : undefined
  const nextId =
    index >= 0 && index < posts.length - 1 ? posts[index + 1].id : undefined

  return (
    <>
      <Group justify="space-between" mb="md">
        <Button
          variant="outline"
          disabled={!prevId}
          onClick={() => navigate(`/posts/${prevId}`)}
        >
          ← Vorheriger
        </Button>
        <Button
          variant="outline"
          disabled={!nextId}
          onClick={() => navigate(`/posts/${nextId}`)}
        >
          Nächster →
        </Button>
      </Group>
      <Post
        id={post.id}
        title={post.title}
        author={post.author}
        date={post.date}
        message={post.message}
        votes={post.votes}
        onChange={loadPost}
      />
    </>
  )
}
