'use client'
import * as React from 'react';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Datagrid2 from './components/grid/datagrid';
  
export default function Home() {
  return (
    <main>
      <div>
        <Navbar
          menuItems={['Programming', 'Research', 'Proposal', 'Order', 'Creative', 'Performance']}
          />
        <Datagrid2/>

        <Footer companyName="Showseeker" />
      </div>
    </main>
  )
}
