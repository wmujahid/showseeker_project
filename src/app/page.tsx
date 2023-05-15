'use client'
import * as React from 'react';
import { useEffect, useState } from 'react';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Datagrid2 from './components/grid/datagrid';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      <div style={{ minWidth: '100%' }}>
        <Navbar
          menuItems={['Programming', 'Research', 'Proposal', 'Order', 'Creative', 'Performance']}
          isMobile={isMobile}
        />
        <Datagrid2 isMobile={isMobile} />

        <Footer companyName="Showseeker" isMobile={isMobile}
 />
      </div>
    </main>
  );
}
