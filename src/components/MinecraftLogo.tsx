import React from 'react';

export default function MinecraftLogo() {
  return (
    <div className="w-16 h-16 flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
      <img 
        src="/diamond-pickaxe.png" 
        alt="Diamond Pickaxe" 
        className="w-12 h-12"
      />
    </div>
  );
}