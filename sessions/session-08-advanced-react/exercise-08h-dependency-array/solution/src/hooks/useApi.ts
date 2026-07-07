import { useCallback, useEffect, useState } from 'react'
import { uid } from 'uid'
import { api } from '../api'
import type { PostData } from '../types'

export function useApi() {
  const [posts, setPosts] = useState<PostData[]>([])

  const loadPosts = useCallback(async () => {
    const response = await api.getPosts()
    const data: PostData[] = await response.json()
    setPosts(data)
  }, [])

  useEffect(() => {
    loadPosts()
  }, [loadPosts])

  async function createPost(newPost: Omit<PostData, 'id' | 'votes'>) {
    setPosts([...posts, { id: uid(), votes: 0, ...newPost }])
    await api.createPost(newPost)
    loadPosts()
  }

  async function updatePost(id: string, updatedItem: Partial<PostData>) {
    setPosts(
      posts.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item,
      ),
    )
    await api.updatePost(id, updatedItem)
    loadPosts()
  }

  async function deletePost(id: string) {
    setPosts(posts.filter((item) => item.id !== id))
    await api.deletePost(id)
    loadPosts()
  }

  return { posts, createPost, updatePost, deletePost }
}
