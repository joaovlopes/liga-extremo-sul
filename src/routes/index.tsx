import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '@/layout/default-layout';

import { Home } from '@/pages/home/index';
import { Header } from '@/pages/header/index';
import { Classificao } from '@/pages/classificacao/index';
import { Ranking } from '@/pages/ranking/index';
import { Midias } from '@/pages/midias/index';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>

        <Route path='/' element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/classificacao" element={<Classificao />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/midias" element={<Midias />} />

      </Route>
    </Routes>
  );
}