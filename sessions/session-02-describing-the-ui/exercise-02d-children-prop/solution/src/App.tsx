import Header from './components/Header'
import Post from './components/Post'
import { Container } from '@mantine/core'

export default function App() {
  return (
    <>
      <Header />
      <Container size="sm" py="xl">
        <Post
          title="Production Deployment am Freitagabend"
          author="Nina"
          date="2026-06-01"
          message="No risk, no Risiko!"
        />
        <Post
          title="Nur kurz ein kleines Refactoring"
          author="Sophie"
          date="2026-06-07"
          message="Jetzt ist der Code sauberer, aber nichts geht mehr."
        />
      </Container>
    </>
  )
}
