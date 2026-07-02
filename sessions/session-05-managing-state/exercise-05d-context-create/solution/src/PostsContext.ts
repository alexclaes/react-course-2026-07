import { createContext } from 'react'
import type { PostData } from './types'

type PostsContextValue = {
  posts: PostData[]
  createPost: (newPost: Omit<PostData, 'id' | 'votes'>) => void
  updatePost: (id: string, updatedItem: Partial<PostData>) => void
  deletePost: (id: string) => void
}

export const PostsContext = createContext<PostsContextValue | undefined>(
  undefined,
)
