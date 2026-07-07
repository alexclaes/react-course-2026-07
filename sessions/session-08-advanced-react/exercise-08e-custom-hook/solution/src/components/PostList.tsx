import { useMemo, useReducer } from 'react'
import { usePostsContext } from '../PostsContext'
import { Link } from 'react-router'
import Panel from './Panel'
import {
  Anchor,
  Button,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'

type FilterState = {
  searchTerm: string
  sortField: string
  sortDirection: string
}

type FilterAction =
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_SORT_FIELD'; payload: string }
  | { type: 'SET_SORT_DIRECTION'; payload: string }
  | { type: 'RESET_FILTERS' }

const initialState: FilterState = {
  searchTerm: '',
  sortField: 'date',
  sortDirection: 'desc',
}

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchTerm: action.payload }
    case 'SET_SORT_FIELD':
      return { ...state, sortField: action.payload }
    case 'SET_SORT_DIRECTION':
      return { ...state, sortDirection: action.payload }
    case 'RESET_FILTERS':
      return initialState
    default:
      return state
  }
}

export default function PostList() {
  const { posts } = usePostsContext()
  const [state, dispatch] = useReducer(filterReducer, initialState)

  const sortedPosts = useMemo(() => {
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(state.searchTerm.toLowerCase()),
    )

    return [...filteredPosts].sort((a, b) => {
      if (state.sortField === 'votes') {
        return state.sortDirection === 'asc'
          ? a.votes - b.votes
          : b.votes - a.votes
      }
      const valA = String(
        a[state.sortField as keyof typeof a] ?? '',
      ).toLowerCase()
      const valB = String(
        b[state.sortField as keyof typeof b] ?? '',
      ).toLowerCase()
      return state.sortDirection === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA)
    })
  }, [posts, state])

  if (posts.length === 0) {
    return <Text>Laden...</Text>
  }

  return (
    <Stack>
      <TextInput
        placeholder="Suchen..."
        value={state.searchTerm}
        onChange={(event) =>
          dispatch({ type: 'SET_SEARCH', payload: event.currentTarget.value })
        }
      />
      <Group justify="space-between">
        <Group gap="xs">
          <Select
            w={160}
            value={state.sortField}
            onChange={(value) =>
              value && dispatch({ type: 'SET_SORT_FIELD', payload: value })
            }
            data={[
              { value: 'date', label: 'Datum' },
              { value: 'title', label: 'Titel' },
              { value: 'votes', label: 'Stimmen' },
            ]}
          />
          <Select
            w={160}
            value={state.sortDirection}
            onChange={(value) =>
              value && dispatch({ type: 'SET_SORT_DIRECTION', payload: value })
            }
            data={[
              { value: 'desc', label: 'Absteigend' },
              { value: 'asc', label: 'Aufsteigend' },
            ]}
          />
        </Group>
        <Button
          variant="default"
          onClick={() => dispatch({ type: 'RESET_FILTERS' })}
        >
          Zurücksetzen
        </Button>
      </Group>
      {sortedPosts.map((post) => (
        <Anchor
          key={post.id}
          component={Link}
          to={`/posts/${post.id}`}
          underline="never"
          c="inherit"
        >
          <Panel>
            <Group justify="space-between" align="center">
              <Text>
                <strong>{post.title}</strong> ({post.date})
              </Text>
              <Text c="dimmed">Stimmen: {post.votes}</Text>
            </Group>
          </Panel>
        </Anchor>
      ))}
    </Stack>
  )
}
