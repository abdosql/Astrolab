import React, { useState } from 'react';
import Image from 'next/image';
import InfoModal from './InfoModal';

interface ViewerMenuProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onToggleLight: () => void;
  onToggleFullscreen: () => void;
}

export default function ViewerMenu({ onZoomIn, onZoomOut, onToggleLight, onToggleFullscreen }: ViewerMenuProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <div className="relative">
          <Image 
            src="/btns holder.svg" 
            alt="Menu Background" 
            width={60} 
            height={300}
            className={`transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className={`absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-around items-center ${isExpanded ? '' : 'pointer-events-none'}`}>
            {isExpanded && (
              <>
                <button className="text-white p-2" onClick={() => setShowInfoModal(true)} title="Show info panel">
                  <Image src="/info.svg" alt="Info" width={24} height={24} />
                </button>
                <button className="text-white p-2" onClick={onToggleLight} title="Toggle layers">
                  <Image src="/layers.svg" alt="Layers" width={24} height={24} />
                </button>
                <div className="flex flex-col items-center">
                  <button className="text-white p-2" onClick={onZoomIn} title="Zoom in">
                    <Image src="/plus.svg" alt="Zoom in" width={24} height={24} />
                  </button>
                  <button className="text-white p-2" onClick={onZoomOut} title="Zoom out">
                    <Image src="/minus.svg" alt="Zoom out" width={24} height={24} />
                  </button>
                </div>
                <button className="text-white p-2" onClick={onToggleFullscreen} title="Toggle fullscreen">
                  <Image src="/full screen .svg" alt="Fullscreen" width={24} height={24} />
                </button>
              </>
            )}
          </div>
        </div>
        <button 
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-black bg-opacity-50 text-white p-2 rounded-l-md"
          onClick={() => setIsExpanded(!isExpanded)} 
          title={isExpanded ? "Hide menu" : "Show menu"}
        >
          <Image 
            src="/return.svg" 
            alt={isExpanded ? "Collapse" : "Expand"} 
            width={24} 
            height={24} 
            style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)' }}
          />
        </button>
      </div>
      <InfoModal isOpen={showInfoModal} onClose={() => setShowInfoModal(false)} />
    </>
  );
}