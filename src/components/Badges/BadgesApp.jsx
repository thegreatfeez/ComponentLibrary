import React from 'react';
import Badges from './Badges';

function BadgesApp() {
  const colorArray = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  
 return (
  <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
   
    <h1 className="text-6xl font-bold text-black mb-12 font-permanent-marker transform -rotate-2">
      BADGES
    </h1>
    
  
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-700 mb-6 font-permanent-marker transform -rotate-1 text-center">
        SQUARE
      </h2>
      <div className='flex gap-3 mb-6'>
        {colorArray.map((color) => (
          <div key={color} className="flex flex-col items-center">
            <p className="text-gray-600 text-xs mb-2 capitalize">{color} - Square</p>
            <Badges color={color} variant="square">Badge</Badges>
          </div>
        ))}
      </div>
    </div>

    
    <div>
      <h2 className="text-3xl font-bold text-gray-700 mb-6 font-permanent-marker transform rotate-1 text-center">
        PILL
      </h2>
      <div className='flex gap-3'>
        {colorArray.map((color) => (
          <div key={`${color}-pill`} className="flex flex-col items-center">
            <p className="text-gray-600 text-xs mb-2 capitalize">{color} - Pill</p>
            <Badges color={color} variant="pill">Badge</Badges>
          </div>
        ))}
      </div>
    </div>
  </div>
)
}

export default BadgesApp;