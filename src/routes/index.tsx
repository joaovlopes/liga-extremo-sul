import { Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/home/index';
import { Header } from '@/pages/header/index';
import { DefaultLayout } from '@/layout/default-layout';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path="header" element={<Header />} />
      </Route>
    </Routes>
  );
}