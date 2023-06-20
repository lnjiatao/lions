'use client'
import { UnsplashImage } from '@/models/unsplash-image';
import { Button, Empty, Form, Input, Space, Spin, message } from 'antd'
import Image from 'next/image';
import React, { useState } from 'react'
import styles from './SearchPage.module.css'



function SearchPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [images, setImages] = useState<UnsplashImage[] | null>(null)

  const onFinish = () => {
    form.validateFields()
      .then(async (values: { query: string }) => {
        setLoading(true)
        setIsError(false)
        setImages(null)
        try {
          const response = await fetch(`/api/search?query=${values.query}`)
          const images = await response.json()
          setImages(images)
        } catch (error) {
          setIsError(true)
        } finally {
          setLoading(false)
        }
      })

  };

  return (
    <div className='p-2'>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="query"
          label="Search query"
          rules={[{ required: true }]}
          style={{ maxWidth: '400px' }}
        >
          <Input placeholder="E.G. cats, foods, ..." />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" loading={loading} htmlType="submit">
              Search
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <div className={styles['flex-c']}>
        {loading && <Spin />}
        {
          isError && <p className='text-red-300'>something went error, please try again</p>
        }
        {
          images?.length === 0 &&
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Nothing found. Try a different query!' />
        }
        {
          images && <div className={styles.images}>
            {
              images.map(image => (
                <Image key={image.urls.raw} src={image.urls.raw} width={250} height={250} alt={image.description} className={styles.image} />
              ))
            }
          </div>
        }
      </div>
    </div>
  )
}

export default SearchPage
