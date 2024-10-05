import React from 'react';
import Image from 'next/image';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative">
        <Image
          src="/panel_1.svg"
          alt="Info Panel Background"
          width={509}
          height={718}
        />
        <div className="absolute inset-0 p-8 overflow-auto">
          <h2 className="text-2xl font-bold mb-4">Solar System Information</h2>
          <p className="mb-4">
            This interactive viewer allows you to explore the solar system and near-Earth objects (NEOs).
          </p>
          <p className="mb-4">
            Use the controls on the right to zoom in/out, toggle layers, and enter fullscreen mode.
          </p>
          <p className="mb-4">
            Click on planets to focus on them and see more details.
          </p>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}