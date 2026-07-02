import PostMeta from './PostMeta'
import Panel from './Panel'
import { Text, Title } from '@mantine/core'

type PostProps = {
  title: string
  author: string
  date: string
  message: string
}

export default function Post({ title, author, date, message }: PostProps) {
  return (
    <Panel title={<Title order={2}>{title}</Title>}>
      <PostMeta author={author} date={date} />
      <Text>{message}</Text>
    </Panel>
  )
}
