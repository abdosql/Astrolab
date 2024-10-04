import React from 'react';
import LargeLogo from './LargeLogo';

export default function HeaderWave({ logoImageName }) {
  return (
    <div>
      <LargeLogo imageName={logoImageName} />
      <div className="header-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1877 490">
          <defs>
            <style>{`.cls-1{fill:#fff;}`}</style>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cls-1"
                d="M1922,1354,0,1365V198s718,125,795-14C930,184,943.87,0,943.87,0S982,184,1093,184c80,135,829,3,829,3Z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}