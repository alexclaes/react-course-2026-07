import { usePostsContext } from '../PostsContext'
import { useNavigate } from 'react-router'
import { Button, Stack, Textarea, TextInput } from '@mantine/core'
import type { PostData } from '../types'

export default function PostForm() {
  const { createPost } = usePostsContext()
  const navigate = useNavigate()

  function handleFormAction(formData: FormData) {
    const fields = Object.fromEntries(formData) as Omit<PostData, 'id' | 'votes'>
    createPost(fields)
    navigate('/posts')
  }

  return (
    <form action={handleFormAction}>
      <Stack gap="md">
        <TextInput label="Titel" name="title" type="text" required />
        <TextInput label="Autor" name="author" type="text" required />
        <TextInput label="Datum" name="date" type="date" required />
        <Textarea label="Nachricht" name="message" required />
        <Button type="submit">Neuen Beitrag hinzufügen</Button>
      </Stack>
    </form>
  )
}
