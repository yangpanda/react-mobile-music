import Layout from '@/pages/Layout';
import DiscoveryPage from '@/pages/DiscoveryPage';
import PersonalPage from '@/pages/PersonalPage';
import PlaylistDetailPage from '@/pages/PlaylistDetailPage';

import { useEffect } from 'react';
import showStatement from '@/utils/statement';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    setTimeout(() => showStatement(), 2500);
  }, []);

  return (
    <BrowserRouter basename="/m.music">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DiscoveryPage />}></Route>
          <Route path="personal" element={<PersonalPage />}></Route>
        </Route>
        <Route path="playlist-detail/:playlistId" element={<PlaylistDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
