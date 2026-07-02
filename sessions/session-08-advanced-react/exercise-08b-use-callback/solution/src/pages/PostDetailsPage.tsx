import { useParams } from 'react-router'
import { usePostsContext } from '../PostsContext'
import Post from '../components/Post'

export default function PostDetailsPage() {
  const { posts } = usePostsContext()
  const { id } = useParams()

  if (posts.length === 0) {
    return <p>Laden...</p>
  }

  const post = posts.find((p) => p.id === id)

  if (!post) {
    return <p>Nicht gefunden</p>
  }

  return (
    <Post
      id={post.id}
      title={post.title}
      author={post.author}
      date={post.date}
      message={post.message}
      votes={post.votes}
    />
  )
}
