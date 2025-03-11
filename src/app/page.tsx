'use client';

import { useState } from 'react';
import Navbar from './components/navbars/Navbar';
import Sidebar from './components/navbars/Sidebar';
import Tokyo from './components/tokyo/Tokyo';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Navbar setShowSidebar={setShowSidebar} />
      <Tokyo />
    </>
  );
}
