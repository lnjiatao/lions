'use client'
import { Layout, Menu, MenuProps } from 'antd';
import React, { useState } from 'react'
import { AppstoreOutlined, HomeFilled } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Search from '@/components/search';

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: '/',
    icon: <HomeFilled />,
  },
  {
    label: 'Static',
    key: '/static',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Dynamic',
    key: '/dynamic',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'ISR',
    key: '/isr',
    icon: <AppstoreOutlined />,
  },
];

function NavBar() {
  const router = useRouter()
  const pathname = usePathname()
  const [current, setCurrent] = useState(pathname);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    router.push(e.key)
  };

  return (
    <Layout.Header className='flex items-center'>
      <Link href={'/'} className="text-white text-xl mr-8">Lions</Link>
      <Menu className='flex-1' onClick={onClick} theme="dark" selectedKeys={[current]} mode="horizontal" items={items} />
      <Search />
    </Layout.Header>
  )
}

export default NavBar
