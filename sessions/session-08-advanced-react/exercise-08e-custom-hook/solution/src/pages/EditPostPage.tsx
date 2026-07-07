import { useParams } from 'react-router'
import { Stack, Title } from '@mantine/core'
import { usePostsContext } from '../PostsContext'
import PostForm from '../components/PostForm'

export default function EditPostPage() {
  const { posts } = usePostsContext()
  const { id } = useParams()

  if (posts.length === 0) {
    return <p>Laden...</p>
  }

  const post = posts.find((p) => p.id === id)

  if (!post) {
    return <p>Nicht gefunden</p>
  }

  return (
    <Stack gap="md">
      <Title order={2}>Beitrag bearbeiten</Title>
      <PostForm initialFormData={post} />
    </Stack>
  )
}
