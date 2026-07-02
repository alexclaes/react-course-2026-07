import { Group, Title } from '@mantine/core'

export default function Header() {
  return (
    <Group justify="center" bg="blue" p="md">
      <Title order={1} c="white">
        Message Board
      </Title>
    </Group>
  )
}
