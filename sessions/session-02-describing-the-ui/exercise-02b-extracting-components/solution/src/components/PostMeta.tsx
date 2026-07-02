type PostMetaProps = {
  author: string
  date: string
}

export default function PostMeta({ author, date }: PostMetaProps) {
  return (
    <>
      <div>von {author}</div>
      <div>am {date}</div>
    </>
  )
}
