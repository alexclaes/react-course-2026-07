import { useState } from 'react'
import { usePostsContext } from '../PostsContext'
import { Link } from 'react-router'
import Panel from './Panel'
import { Anchor, Group, Stack, Text, TextInput } from '@mantine/core'

export default function PostList() {
  const { posts } = usePostsContext()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Stack>
      <TextInput
        placeholder="Suchen..."
        value={searchTerm}
        onChange={(event) =>
          setSearchTerm(event.currentTarget.value)
        }
      />
      {filteredPosts.map((post) => (
        <Anchor
          key={post.id}
          component={Link}
          to={`/posts/${post.id}`}
          underline="never"
          c="inherit"
        >
          <Panel>
            <Group justify="space-between" align="center">
              <Text>
                <strong>{post.title}</strong> ({post.date})
              </Text>
              <Text c="dimmed">Stimmen: {post.votes}</Text>
            </Group>
          </Panel>
        </Anchor>
      ))}
    </Stack>
  )
}
