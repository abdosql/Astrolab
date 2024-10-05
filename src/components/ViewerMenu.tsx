import React, { useState } from 'react';
import { FaInfoCircle, FaLayerGroup, FaPlus, FaMinus, FaSun, FaMoon, FaExpand } from 'react-icons/fa';

interface ViewerMenuProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onToggleLight: () => void;
  onToggleFullscreen: () => void;
}

export default function ViewerMenu({ onZoomIn, onZoomOut, onToggleLight, onToggleFullscreen }: ViewerMenuProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-lg p-2 ${isExpanded ? 'w-10' : 'w-auto'}`}>
      <div className="flex flex-col space-y-4">
        {isExpanded && (
          <>
            <button className="text-white" title="Show info panel"><FaInfoCircle /></button>
            <button className="text-white" title="Toggle layers"><FaLayerGroup /></button>
            <div className="flex flex-col items-center">
              <button className="text-white" onClick={onZoomIn} title="Zoom in"><FaPlus /></button>
              <div className="w-4 h-px bg-white my-1"></div>
              <button className="text-white" onClick={onZoomOut} title="Zoom out"><FaMinus /></button>
            </div>
            <button className="text-white" onClick={() => { onToggleLight(); setIsDarkMode(!isDarkMode); }} title="Toggle light mode">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button className="text-white" onClick={onToggleFullscreen} title="Toggle fullscreen"><FaExpand /></button>
          </>
        )}
        <button 
          className="text-white" 
          onClick={() => setIsExpanded(!isExpanded)} 
          title={isExpanded ? "Hide menu" : "Show menu"}
        >
          {isExpanded ? '◀' : '▶'}
        </button>
      </div>
    </div>
  );
}