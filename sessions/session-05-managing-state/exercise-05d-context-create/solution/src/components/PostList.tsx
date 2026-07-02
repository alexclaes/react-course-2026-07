import Post from './Post'
import { useState } from 'react'
import { Stack, TextInput } from '@mantine/core'
import type { PostData } from '../types'

type PostListProps = {
  posts: PostData[]
  onUpdatePost: (id: string, updatedItem: Partial<PostData>) => void
  onDeletePost: (id: string) => void
}

export default function PostList({
  posts,
  onUpdatePost,
  onDeletePost,
}: PostListProps) {
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
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          message={post.message}
          votes={post.votes}
          onUpdatePost={onUpdatePost}
          onDeletePost={onDeletePost}
        />
      ))}
    </Stack>
  )
}
