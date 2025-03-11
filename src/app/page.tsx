'use client';

import { useState } from 'react';
import Navbar from './components/navbars/Navbar';
import Sidebar from './components/navbars/Sidebar';
import Tokyo from './components/tokyo/Tokyo';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  return (
    <>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        lightMode={lightMode}
        setLightMode={setLightMode}
      />
      <Navbar setShowSidebar={setShowSidebar} lightMode={lightMode} />
      {/* TODO: Move section into component itself and reference lightMode via React Context */}
      <section style={{height: '800px'}} className={lightMode ? 'lightMode' : undefined}>Test</section>
      <section style={{height: '800px'}} className={lightMode ? 'lightMode' : undefined}>
        <Tokyo />
      </section>
    </>
  );
}
