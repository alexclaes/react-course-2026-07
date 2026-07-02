import { Card, Stack } from '@mantine/core'
import type { ReactNode } from 'react'

type PanelProps = {
  children: ReactNode
}

export default function Panel({ children }: PanelProps) {
  return (
    <Card withBorder radius="md" padding="lg">
      <Stack gap="md">{children}</Stack>
    </Card>
  )
}
