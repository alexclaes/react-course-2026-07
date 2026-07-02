import PostMeta from './PostMeta'
import Panel from './Panel'
import { Button, Group, Text, Title } from '@mantine/core'
import { useState } from 'react'

type PostProps = {
  title: string
  author: string
  date: string
  message: string
}

export default function Post({ title, author, date, message }: PostProps) {
  const [showMore, setShowMore] = useState(false)
  const [votes, setVotes] = useState(0)

  function toggleShowMore() {
    setShowMore(!showMore)
  }

  function handleUpvote() {
    setVotes(votes + 1)
  }

  function handleDownvote() {
    setVotes(votes - 1)
  }

  return (
    <Panel title={<Title order={2}>{title}</Title>}>
      <PostMeta author={author} date={date} />

      <Group gap="xs" align="center">
        <Button onClick={handleUpvote}>Hochwählen</Button>
        <Button onClick={handleDownvote}>Runterwählen</Button>
        <Text fw={600}>Stimmen: {votes}</Text>
      </Group>

      <Button onClick={toggleShowMore} variant="outline">
        {showMore ? 'Weniger anzeigen' : 'Mehr lesen'}
      </Button>

      {showMore && <Text>{message}</Text>}
    </Panel>
  )
}
