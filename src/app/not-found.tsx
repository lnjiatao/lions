'use client'
import { Button } from '@/components/antd'
import { useRouter } from 'next/navigation'
import React from 'react'

function NotFound() {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h1>NotFound</h1>
      <p>Sorry, this page doese not exist</p>
      <Button type="primary" onClick={() => router.push('/')}>Back to Home</Button>
    </div>
  )
}

export default NotFound
