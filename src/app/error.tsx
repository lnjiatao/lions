'use client'
import React from 'react'
import { Button } from 'antd';

type Props = {
  error: Error
  reset: () => void
}

function Error({ error, reset }: Props) {
  return (
    <div>
      <h1>Error 😵</h1>
      <p>Something went wrong</p>
      <Button type="primary" onClick={reset}>Try again</Button>
    </div>
  )
}

export default Error
