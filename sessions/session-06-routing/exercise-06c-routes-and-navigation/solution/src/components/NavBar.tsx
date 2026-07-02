import { NavLink } from 'react-router'
import { Anchor, Group } from '@mantine/core'

export default function NavBar() {
  return (
    <Group justify="center" gap="xl" p="md">
      <Anchor component={NavLink} to="/" fw={700}>
        Startseite
      </Anchor>
      <Anchor component={NavLink} to="/posts" fw={700}>
        Alle Beiträge
      </Anchor>
      <Anchor component={NavLink} to="/add-post" fw={700}>
        Beitrag hinzufügen
      </Anchor>
    </Group>
  )
}
