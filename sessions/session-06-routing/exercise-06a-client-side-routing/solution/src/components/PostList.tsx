import Post from './Post'
import { useState } from 'react'
import { usePostsContext } from '../PostsContext'
import { Stack, TextInput } from '@mantine/core'

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
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          message={post.message}
          votes={post.votes}
        />
      ))}
    </Stack>
  )
}
