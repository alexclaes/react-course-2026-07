import PostMeta from './PostMeta'
import Panel from './Panel'
import { Button, Group, Text, Title } from '@mantine/core'
import { useState } from 'react'

type PostProps = {
  title: string
  author: string
  date: string
  message: string
  votes: number
}

export default function Post({
  title,
  author,
  date,
  message,
  votes,
}: PostProps) {
  const [showMore, setShowMore] = useState(false)

  function toggleShowMore() {
    setShowMore(!showMore)
  }

  function handleUpvote() {
    // Stimmen werden jetzt als Props empfangen, können aber noch nicht aktualisiert werden
  }

  function handleDownvote() {
    // Stimmen werden jetzt als Props empfangen, können aber noch nicht aktualisiert werden
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
