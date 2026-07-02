import type { PostData } from './types'

const API_URL = 'http://localhost:3001/api'

export const api = {
  getPosts() {
    return fetch(`${API_URL}/posts`)
  },
  getPost(id: string) {
    return fetch(`${API_URL}/posts/${id}`)
  },
  createPost(post: Omit<PostData, 'id' | 'votes'>) {
    return fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
  },
  updatePost(id: string, post: Partial<PostData>) {
    return fetch(`${API_URL}/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
  },
  deletePost(id: string) {
    return fetch(`${API_URL}/posts/${id}`, {
      method: 'DELETE',
    })
  },
}
