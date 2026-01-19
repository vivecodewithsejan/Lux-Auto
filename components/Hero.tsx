
import React, { useState } from 'react';
import { MAKES, MODELS } from '../constants';
import { FilterState } from '../types';

interface HeroProps {
  onSearch: (filters: FilterState) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [make, setMake] = useState('All Makes');
  const [model, setModel] = useState('All Models');
  const [price, setPrice] = useState(500000);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ make, model, maxPrice: price });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#101622] z-10"></div>
        <img 
          alt="Cinematic luxury car" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqw8RkQelQtPbE-WOusZUuUoDJ2sBm0UUIyLeZipP51n7mDU6vZiJLsx7HPVqcJLD4KOxYSKbN2qD9YeVKJFYIXHtfmz9lzUijU2oE2Vth1qFWVTwHwUhhHkIkKzRbsU8I1zHeYCihWUlQEoEn0ZbejWO-excnb1jWL4LY5la5aB497f2xQJoiVhl4iiOKjbA7P02d83ZYMWp4_huUAqoaK4CsrxN-rx5aMm6bWRK0f85TJrkIr5yBrEX7JPiuxgFprAyqDAGoOI7Z"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center justify-center h-full pt-20">
        <div className="text-center max-w-4xl mb-12 animate-fade-in-up">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">The Art of Performance</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-tight mb-6 drop-shadow-2xl">
            Experience the <br/>Extraordinary
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Curated collection of the world's finest automobiles. Discover engineering perfection.
          </p>
        </div>

        {/* Search Widget */}
        <div className="w-full max-w-5xl bg-[#1c1f27]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-3">
              <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">Make</label>
              <div className="relative">
                <select 
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className="w-full bg-[#101622] border border-[#282e39] text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-3 pr-10 appearance-none"
                >
                  {MAKES.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">Model</label>
              <div className="relative">
                <select 
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-[#101622] border border-[#282e39] text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-3 pr-10 appearance-none"
                >
                  {MODELS.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 px-2">
              <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-4 flex justify-between">
                <span>Max Price</span>
                <span className="text-primary font-bold">${(price / 1000).toFixed(0)}k</span>
              </label>
              <input 
                type="range"
                min="50000"
                max="500000"
                step="10000"
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
                className="w-full h-2 bg-[#282e39] rounded-full appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="md:col-span-2">
              <button 
                type="submit"
                className="w-full h-[46px] bg-primary hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">search</span>
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce cursor-pointer" onClick={() => document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

export default Hero;
