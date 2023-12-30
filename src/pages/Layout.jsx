import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header />
      <main className='p-0 min-h-screen'>
        <Outlet />
      </main>
    </>
  )
}
