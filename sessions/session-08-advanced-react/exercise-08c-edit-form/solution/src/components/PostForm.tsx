import { usePostsContext } from '../PostsContext'
import { useNavigate } from 'react-router'
import { Button, Stack, Textarea, TextInput } from '@mantine/core'
import type { PostData } from '../types'

type PostFormProps = {
  initialFormData?: PostData
}

export default function PostForm({ initialFormData }: PostFormProps) {
  const { createPost, updatePost } = usePostsContext()
  const navigate = useNavigate()
  const isEditing = initialFormData !== undefined

  function handleFormAction(formData: FormData) {
    if (isEditing) {
      const fields = Object.fromEntries(formData) as unknown as Omit<PostData, 'id'>
      const votes = Number(fields.votes)
      updatePost(initialFormData.id, { ...fields, votes })
      navigate(`/posts/${initialFormData.id}`)
    } else {
      const fields = Object.fromEntries(formData) as Omit<PostData, 'id' | 'votes'>
      createPost(fields)
      navigate('/posts')
    }
  }

  return (
    <form action={handleFormAction}>
      <Stack gap="md">
        <TextInput
          label="Titel"
          name="title"
          type="text"
          defaultValue={initialFormData?.title}
          required
        />
        <TextInput
          label="Autor"
          name="author"
          type="text"
          defaultValue={initialFormData?.author}
          required
        />
        <TextInput
          label="Datum"
          name="date"
          type="date"
          defaultValue={initialFormData?.date}
          required
        />
        <Textarea
          label="Nachricht"
          name="message"
          defaultValue={initialFormData?.message}
          required
        />
        {isEditing && (
          <TextInput
            label="Stimmen"
            name="votes"
            type="number"
            defaultValue={initialFormData.votes}
            required
          />
        )}
        <Button type="submit">
          {isEditing ? 'Beitrag speichern' : 'Neuen Beitrag hinzufügen'}
        </Button>
      </Stack>
    </form>
  )
}
