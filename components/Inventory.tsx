
import React from 'react';
import { Car } from '../types';

interface InventoryProps {
  cars: Car[];
  onDetailsClick: (id: string) => void;
}

const Inventory: React.FC<InventoryProps> = ({ cars, onDetailsClick }) => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold text-white mb-3">New Arrivals</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        <a className="group flex items-center gap-2 text-primary hover:text-white transition-colors font-medium" href="#">
          View Full Inventory
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        {cars.length > 0 ? (
          cars.map((car) => (
            <div 
              key={car.id} 
              className="group bg-[#1c1f27] rounded-xl overflow-hidden border border-[#282e39] hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  alt={`${car.make} ${car.model}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={car.imageUrl}
                />
                {car.status && (
                  <div className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded backdrop-blur-sm border ${car.status === 'JUST ARRIVED' ? 'bg-primary/90' : 'bg-white/10 border-white/20'}`}>
                    {car.status}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white text-xl font-bold">{car.make} {car.model}</h3>
                  <span className="material-symbols-outlined text-gray-500 hover:text-primary cursor-pointer transition-colors">favorite</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{car.year} • {car.miles} • {car.transmission}</p>
                <div className="border-t border-[#282e39] pt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">${car.price.toLocaleString()}</span>
                  <button 
                    onClick={() => onDetailsClick(car.id)}
                    className="text-primary text-sm font-bold hover:text-white transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
            <span className="material-symbols-outlined text-6xl mb-4">search_off</span>
            <p className="text-xl">No vehicles match your search criteria.</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 text-primary font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Inventory;
