import Post from './Post'
import { Stack } from '@mantine/core'
import type { PostData } from '../types'

type PostListProps = {
  posts: PostData[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <Stack>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          message={post.message}
        />
      ))}
    </Stack>
  )
}
