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
      <div>von {author}</div>
      <div>am {date}</div>
      <p>{message}</p>
    </div>
  )
}
