import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import JoinCallButton from '../src/components/JoinCallButton';

const JoinCallPage: React.FC = () => {
  const router = useRouter();

  const handleJoinCall = () => {
    router.push('/video-call');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-900 to-blue-700">
      <header className="w-full p-6 flex justify-center">
        <Image src="/images/astrolab white 2.png" alt="Astrolab Logo" width={80} height={80} className="hover:opacity-80 transition-opacity" />
      </header>
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Rejoindre l'appel <span className="text-blue-300">vidéo</span>
          </h1>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Connectez-vous avec vos collègues et explorez l'univers ensemble dans une expérience immersive.
          </p>
          <div className="mb-8 flex justify-center">
            <JoinCallButton onClick={handleJoinCall} />
          </div>
          <div className="mt-16 relative">
            <Image 
              src="/images/video-call-illustration.svg" 
              alt="Video Call Illustration" 
              width={600} 
              height={400} 
              className="mx-auto"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-indigo-900 to-transparent opacity-50"></div>
          </div>
        </div>
      </main>
      <footer className="w-full p-6 text-center text-sm text-blue-200">
        <p>© 2023 Astrolab. Tous droits réservés.</p>
      </footer>  
    </div>
  );
};

export default JoinCallPage;