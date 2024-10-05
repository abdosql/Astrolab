import React from 'react';
import Image from 'next/image';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" style={{ zIndex: 1000 }}>
      <div className="relative w-[409px] h-[500px]">
        <Image
          src="/panel_1.svg"
          alt="Info Panel Background"
          layout="fill"
          objectFit="contain"
        />
        <div className="absolute inset-0 p-8 flex flex-col">
          <div className="flex items-center mb-2">
            <button
              className="text-white hover:text-gray-300 mr-2"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl font-bold text-white flex-grow text-center">Info</h2>
          </div>
          <div className="w-full h-px bg-white mt-1 mb-4"></div>
          <div className="flex-grow flex flex-col items-center justify-center overflow-y-auto">
            <h3 className="text-xl font-bold text-white text-center mb-2">Info Content</h3>
            <p className="text-white text-center text-sm px-2">
              This is where you can add your detailed information about the solar system, 
              planets, or any other relevant content. You can include multiple paragraphs 
              or even add more complex content structure here.
            </p>
          </div>
          <div className="w-full h-px bg-white mt-4 mb-1"></div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;