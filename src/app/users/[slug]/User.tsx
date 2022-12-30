import { notFound } from "next/navigation"
import { useEffect } from "react"
import { useGetUserByIdQuery } from "src/api/user/user.slice.api"

export default function User({ id }: { id: number }) {
  const { data: user, error, isLoading } = useGetUserByIdQuery(id)

  const userName = user?.name
  useEffect(() => {
    // this does not work for now
    // https://github.com/vercel/next.js/issues/42239
    if (userName) document.title === userName
  }, [userName])

  if (error) notFound()
  if (isLoading) return <p role="progressbar">Loading...</p>
  if (user) return <h2>{user.name}</h2>
  return null
}
