"use client"

import { notFound } from "next/navigation"
import User from "./User"

interface Props {
  params: { slug: string }
}
export default function Page({ params }: Props) {
  if (Number.isNaN(Number(params.slug))) notFound()

  return <User id={Number(params.slug)} />
}
