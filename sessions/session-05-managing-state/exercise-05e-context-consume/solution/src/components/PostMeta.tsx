import { Group, Text } from '@mantine/core'

type PostMetaProps = {
  author: string
  date: string
}

export default function PostMeta({ author, date }: PostMetaProps) {
  return (
    <Group gap="xs">
      <Text size="sm" c="dimmed">
        von {author}
      </Text>
      <Text size="sm" c="dimmed">
        am {date}
      </Text>
    </Group>
  )
}
