import { Outlet } from 'react-router-dom'
import { Header } from '@/pages//header/index'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}