import React from 'react'

type Props = {}

async function Page({ }: Props) {
  await new Promise((reslove) => setTimeout(reslove, 1000))
  return (
    <div>Page</div>
  )
}

export default Page
