import { useState } from 'react'

// Minimal fallback `useUser` hook. Replace with real auth integration (Clerk/Firebase/Supabase).
export function useUser() {
  const [state] = useState({ user: null, isLoaded: true, isSignedIn: false })
  return state
}

export default useUser
