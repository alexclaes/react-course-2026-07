import PostMeta from './PostMeta'

type PostProps = {
  title: string
  author: string
  date: string
  message: string
}

export default function Post({ title, author, date, message }: PostProps) {
  return (
    <div>
      <h2>{title}</h2>
      <PostMeta author={author} date={date} />
      <p>{message}</p>
    </div>
  )
}
