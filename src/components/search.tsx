'use client'
import React from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useRouter } from 'next/navigation';

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);


function Search() {
  const router = useRouter()
  const onSearch = (value: string) => {
    router.push(`/topics/${value.trim()}`)
  };
  return (
    <Input.Search
      placeholder="input search topic"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
      className='w-[400px]'
    />
  )
}

export default Search
