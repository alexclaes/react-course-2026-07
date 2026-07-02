import PostMeta from './PostMeta'
import { Card, Stack, Text, Title } from '@mantine/core'

type PostProps = {
  title: string
  author: string
  date: string
  message: string
}

export default function Post({ title, author, date, message }: PostProps) {
  return (
    <Card withBorder radius="md" padding="lg">
      <Stack gap="md">
        <Title order={2}>{title}</Title>
        <PostMeta author={author} date={date} />
        <Text>{message}</Text>
      </Stack>
    </Card>
  )
}
