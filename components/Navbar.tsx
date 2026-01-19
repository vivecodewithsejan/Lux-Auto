
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-0' : 'py-2'}`}>
      <div className={`bg-[#101622]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300`}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 text-white group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">directions_car</span>
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">LuxAuto</h2>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {['Inventory', 'Sell Your Car', 'Finance', 'About Us'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button 
              onClick={onContactClick}
              className="hidden sm:flex items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary hover:bg-blue-700 transition-all text-white text-sm font-bold tracking-wide shadow-[0_0_15px_rgba(17,82,212,0.4)]"
            >
              Contact Concierge
            </button>
            <button className="lg:hidden text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
