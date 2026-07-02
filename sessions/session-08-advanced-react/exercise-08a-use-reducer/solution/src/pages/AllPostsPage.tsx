import PostList from '../components/PostList'
import { Stack, Title } from '@mantine/core'

export default function AllPostsPage() {
  return (
    <Stack gap="md">
      <Title order={2}>Alle Beiträge</Title>
      <PostList />
    </Stack>
  )
}
