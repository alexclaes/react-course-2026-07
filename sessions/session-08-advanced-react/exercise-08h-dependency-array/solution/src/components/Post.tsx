import PostMeta from './PostMeta'
import Panel from './Panel'
import { Button, Group, Text, Title } from '@mantine/core'
import { useState } from 'react'
import { usePostsContext } from '../PostsContext'
import { useNavigate } from 'react-router'

type PostProps = {
  id: string
  title: string
  author: string
  date: string
  message: string
  votes: number
  onChange?: () => void
}

export default function Post({
  id,
  title,
  author,
  date,
  message,
  votes,
  onChange,
}: PostProps) {
  const { updatePost, deletePost } = usePostsContext()
  const [showMore, setShowMore] = useState(false)
  const navigate = useNavigate()

  function toggleShowMore() {
    setShowMore(!showMore)
  }

  async function handleUpvote() {
    await updatePost(id, { votes: votes + 1 })
    onChange?.()
  }

  async function handleDownvote() {
    await updatePost(id, { votes: votes - 1 })
    onChange?.()
  }

  function handleDelete() {
    deletePost(id)
    navigate('/posts')
  }

  function handleEdit() {
    navigate(`/posts/${id}/edit`)
  }

  return (
    <Panel title={<Title order={2}>{title}</Title>}>
      <PostMeta author={author} date={date} />

      <Group gap="xs" align="center">
        <Button onClick={handleUpvote}>Hochwählen</Button>
        <Button onClick={handleDownvote}>Runterwählen</Button>
        <Text fw={600}>Stimmen: {votes}</Text>
      </Group>

      <Group gap="xs" align="center">
        <Button onClick={toggleShowMore} variant="outline">
          {showMore ? 'Weniger anzeigen' : 'Mehr lesen'}
        </Button>
        <Button onClick={handleDelete} bg="red">
          löschen
        </Button>
        <Button onClick={handleEdit} variant="outline">
          bearbeiten
        </Button>
      </Group>

      {showMore && <Text>{message}</Text>}
    </Panel>
  )
}
