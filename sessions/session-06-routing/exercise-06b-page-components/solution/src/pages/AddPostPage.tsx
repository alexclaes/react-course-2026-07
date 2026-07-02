import PostForm from '../components/PostForm'
import { Stack, Title } from '@mantine/core'

export default function AddPostPage() {
  return (
    <Stack gap="md">
      <Title order={2}>Beitrag hinzufügen</Title>
      <PostForm />
    </Stack>
  )
}
