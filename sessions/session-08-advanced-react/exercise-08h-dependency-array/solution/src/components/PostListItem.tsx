import { memo } from 'react'
import { Link } from 'react-router'
import { Anchor, Group, Text } from '@mantine/core'
import Panel from './Panel'
import type { PostData } from '../types'

type PostListItemProps = {
  post: PostData
}

function PostListItem({ post }: PostListItemProps) {
  console.log('rendere PostListItem:', post.title)
  return (
    <Anchor
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
  )
}

export default memo(PostListItem)
