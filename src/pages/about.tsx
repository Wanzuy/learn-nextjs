import { useRouter } from 'next/router'
import React from 'react'

export default function AboutPage() {
  const router = useRouter()

  console.log('About query:', router.query)

  return <div>About Pagee</div>
}

export function getServerSideProps() {
  return {
    props: {},
  }
}
