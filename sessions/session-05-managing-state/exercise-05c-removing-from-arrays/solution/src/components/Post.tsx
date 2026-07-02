import PostMeta from './PostMeta'
import Panel from './Panel'
import { Button, Group, Text, Title } from '@mantine/core'
import { useState } from 'react'
import type { PostData } from '../types'

type PostProps = {
  id: string
  title: string
  author: string
  date: string
  message: string
  votes: number
  onUpdatePost: (id: string, updatedItem: Partial<PostData>) => void
  onDeletePost: (id: string) => void
}

export default function Post({
  id,
  title,
  author,
  date,
  message,
  votes,
  onUpdatePost,
  onDeletePost,
}: PostProps) {
  const [showMore, setShowMore] = useState(false)

  function toggleShowMore() {
    setShowMore(!showMore)
  }

  function handleUpvote() {
    onUpdatePost(id, { votes: votes + 1 })
  }

  function handleDownvote() {
    onUpdatePost(id, { votes: votes - 1 })
  }

  function handleDelete() {
    onDeletePost(id)
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
      </Group>

      {showMore && <Text>{message}</Text>}
    </Panel>
  )
}
