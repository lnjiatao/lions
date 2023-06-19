import { Card } from '@/components/antd'
import { UnsplashUser } from '@/models/unsplash-user'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
  params: {
    username: string
  }
}

async function getUser(username: string): Promise<UnsplashUser> {
  const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
  if (response.status === 404) {
    notFound()
  }
  return await response.json()
}

export async function generateMetadata({ params: { username } }: Props): Promise<Metadata> {
  const user = await getUser(username)
  return {
    title: `${[user.first_name, user.last_name].filter(Boolean).join(' ') || user.username} - Image Gallery`
  }
}

async function Page({ params: { username } }: Props) {
  const user = await getUser(username)

  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-gray-100'>
      <Card title={user.username} bordered={false} style={{ width: 320 }}
        cover={
          <img alt={user.username} src={user.profile_image.large} />
        }
        extra={
          <a href={`https://unsplash.com/${user.username}`} target='_blank'>Unsplash Profile</a>
        }
      >
        <p>First name: {user.first_name}</p>
        <p>Last name: {user.last_name}</p>

      </Card>
    </div>
  )
}

export default Page
