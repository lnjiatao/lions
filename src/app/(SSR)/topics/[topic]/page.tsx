import { UnsplashImage } from '@/models/unsplash-image'
import React from 'react'
import Image from 'next/image'
import styles from './TopicPage.module.css'
import { Title } from '@/components/antd'
import { Metadata } from 'next'

type Props = {
  params: {
    topic: string,
  },
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export async function generateMetadata({ params: { topic } }: Props): Promise<Metadata> {
  return {
    title: `${topic} - Image Gallery`
  }
}

export async function generateStaticParams() {
  return ['health', 'coding', 'lion'].map(topic => ({ topic }))
}

async function Page({ params: { topic }, searchParams }: Props) {
  const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
  const images: UnsplashImage[] = await response.json()

  return (
    <>
      <Title level={2} className='text-center uppercase'>{topic}</Title>
      <div className={styles.images}>
        {
          images.map(image => (
            <Image src={image.urls.raw} width={250} height={200} alt={image.description} key={image.urls.raw} className={styles.image} />
          ))
        }
      </div>
    </>
  )
}

export default Page
