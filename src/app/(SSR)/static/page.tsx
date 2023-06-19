import { Alert } from '@/components/antd'
import { UnsplashImage } from '@/models/unsplash-image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Static Fetching - Lions',
}

async function Page() {
  const responses = await fetch('https://api.unsplash.com/photos/random?client_id=' + process.env.UNSPLASH_ACCESS_KEY)
  const image: UnsplashImage = await responses.json()

  const width = Math.min(image.width, 500)
  const height = (width / image.width) * image.height

  return (
    <>
      <div className='flex flex-col items-center h-full w-full py-[20px] gap-[10px]'>
        {
          image?.description &&
          <Alert message="Image Description" description={image.description} type="info" showIcon />
        }
        <Image className='rounded-xl shadow max-w-full' src={image.urls.raw} width={width} height={height} alt={image.description || 'image'} />
        <div>
          by <Link className='no-underline' href={`/users/${image.user.username}`}>{image.user.username}</Link>
        </div>
      </div>
    </>
  )
}

export default Page
