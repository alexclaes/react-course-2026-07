import { Card, Stack } from '@mantine/core'
import type { ReactNode } from 'react'

type PanelProps = {
  title?: ReactNode
  children: ReactNode
}

export default function Panel({ title, children }: PanelProps) {
  return (
    <Card withBorder radius="md" padding="lg">
      <Stack gap="md">
        {title}
        {children}
      </Stack>
    </Card>
  )
}
