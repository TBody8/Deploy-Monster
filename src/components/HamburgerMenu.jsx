import React from 'react';
import { X, Wine, Settings as SettingsIcon } from 'lucide-react';

export default function HamburgerMenu({ open, onClose, onSelect }) {
  if (!open) return null;
  return (
    <div className='fixed inset-0 z-50 flex items-end justify-end'>
      {/* Fondo oscuro igual que los modales */}
      <div className='absolute inset-0 bg-black/80' onClick={onClose}></div>
      <div className='relative bg-gray-900 rounded-t-2xl shadow-2xl w-full max-w-xs p-6 border-t-4 border-pink-400 animate-slideInUp'>
        <button className='absolute top-3 right-3 text-white' onClick={onClose}>
          <X className='w-6 h-6' />
        </button>
        {/* Ajustes solo en móvil */}
        <div className='flex flex-col gap-4 mt-6'>
          <button
            onClick={() => {
              onSelect('settings');
              onClose();
            }}
            className='flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 hover:bg-pink-700 text-white font-bold transition-all w-full justify-center block md:hidden'
          >
            <SettingsIcon className='w-6 h-6 text-green-300' />
            Ajustes
          </button>
        </div>
        <div className='mt-8 border-t border-pink-400 pt-4'>
          <button
            onClick={() => {
              onSelect('partyMeter');
              onClose();
            }}
            className='flex items-center gap-3 px-4 py-3 rounded-lg bg-pink-700 hover:bg-pink-600 text-white font-bold transition-all w-full justify-center animate-bounce'
          >
            <Wine className='w-6 h-6 text-yellow-200' />
            Medidor de Borrachera
          </button>
        </div>
      </div>
    </div>
  );
}
