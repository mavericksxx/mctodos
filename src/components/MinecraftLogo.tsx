import React from 'react';
import { Pickaxe } from 'lucide-react';

export default function MinecraftLogo() {
  return (
    <div className="w-16 h-16 flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
      <Pickaxe className="w-12 h-12 text-cyan-500 dark:text-cyan-400" />
    </div>
  );
}