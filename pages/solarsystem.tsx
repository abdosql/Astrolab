import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../src/components/Header';
import '../src/app/SolarSystem.css';
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'
import Image from 'next/image'
import Link from 'next/link'

const NEOViewer = dynamic(() => import('@/components/NEOViewer'), {
  ssr: false
})

const SolarSystem: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const headerStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  };

  return (
    <>
      <Header 
        showText={false} 
        className="solar-system-header" 
        showHeaderWave={false} 
        style={headerStyles}
      />
      <div className="solar-system-page">
        <Suspense fallback={<Loading />}>
          <NEOViewer />
        </Suspense>
      </div>
    </>
  );
};

export default SolarSystem;