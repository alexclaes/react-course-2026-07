import PostMeta from './PostMeta'
import Panel from './Panel'
import { Button, Text, Title } from '@mantine/core'
import { useState } from 'react'

type PostProps = {
  title: string
  author: string
  date: string
  message: string
}

export default function Post({ title, author, date, message }: PostProps) {
  const [showMore, setShowMore] = useState(false)

  function toggleShowMore() {
    setShowMore(!showMore)
  }

  return (
    <Panel title={<Title order={2}>{title}</Title>}>
      <PostMeta author={author} date={date} />

      <Button onClick={toggleShowMore} variant="outline">
        {showMore ? 'Weniger anzeigen' : 'Mehr lesen'}
      </Button>

      {showMore && <Text>{message}</Text>}
    </Panel>
  )
}
