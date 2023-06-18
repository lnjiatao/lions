import { Spin } from '@/components/antd'
import React from 'react'

type Props = {}

function Loading({ }: Props) {
  return (
    <div className='w-full h-full flex items-center justify-center text-center'>
      <Spin />
    </div>
  )
}

export default Loading
