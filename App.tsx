
import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import Services from './components/Services';
import ShowroomCTA from './components/ShowroomCTA';
import Footer from './components/Footer';
import ConciergeModal from './components/ConciergeModal';
import { CARS } from './constants';
import { FilterState } from './types';

const App: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    make: 'All Makes',
    model: 'All Models',
    maxPrice: 500000,
  });

  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [activeCarId, setActiveCarId] = useState<string | null>(null);

  const filteredCars = useMemo(() => {
    return CARS.filter(car => {
      const makeMatch = filters.make === 'All Makes' || car.make === filters.make;
      const modelMatch = filters.model === 'All Models' || car.model === filters.model;
      const priceMatch = car.price <= filters.maxPrice;
      return makeMatch && modelMatch && priceMatch;
    });
  }, [filters]);

  const handleSearch = (newFilters: FilterState) => {
    setFilters(newFilters);
    // Scroll to inventory section
    const inventorySection = document.getElementById('inventory');
    if (inventorySection) {
      inventorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openConcierge = (carId?: string) => {
    if (carId) setActiveCarId(carId);
    else setActiveCarId(null);
    setIsConciergeOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar onContactClick={() => openConcierge()} />
      
      <main>
        <Hero onSearch={handleSearch} />
        
        <div id="inventory">
          <Inventory 
            cars={filteredCars} 
            onDetailsClick={(id) => openConcierge(id)}
          />
        </div>
        
        <Services />
        <ShowroomCTA onBookClick={() => openConcierge()} />
      </main>

      <Footer />

      {isConciergeOpen && (
        <ConciergeModal 
          isOpen={isConciergeOpen} 
          onClose={() => setIsConciergeOpen(false)}
          carContext={activeCarId ? CARS.find(c => c.id === activeCarId) : undefined}
        />
      )}
    </div>
  );
};

export default App;
