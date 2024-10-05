import React from 'react';
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
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Home
        </Link>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </>
  );
};

export default SolarSystem;