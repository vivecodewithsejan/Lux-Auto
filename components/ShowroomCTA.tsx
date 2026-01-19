
import React from 'react';

interface ShowroomCTAProps {
  onBookClick: () => void;
}

const ShowroomCTA: React.FC<ShowroomCTAProps> = ({ onBookClick }) => {
  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto bg-[#1c1f27] rounded-3xl overflow-hidden shadow-2xl border border-[#282e39] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img 
            alt="LuxAuto Showroom" 
            className="absolute inset-0 w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbts-vqFP9Lh6-VaBH5MBvY_L5ZbFWArPD0WDH8g06MxKBQ-o9hs3GW2gJk5JaIR7qVzoUReZrrk474_jD_OKgXheufO1dl0kpdC8jtHGPqAO3qzi8FEIOVyldEFsa2xujjpyTU7Es-FZZCRbfeuQS0oflx2pAaD2Mayc5f9L4vauyKYg4To0i0f0rNogePEoxIP1pQftMX_l-7MebLKGyRTNKlSTKhMMH8GAPWxvbaVd_S5v4T8gOJvnYIuJxPyENuhckAqUjgvwf"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent md:hidden"></div>
        </div>
        <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-center items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Visit Our Flagship Showroom</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Immerse yourself in the world of luxury. Experience our collection firsthand in our climate-controlled, state-of-the-art facility. Private viewings available by appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button 
              onClick={onBookClick}
              className="flex-1 bg-primary hover:bg-blue-600 text-white h-12 rounded-lg font-bold transition-colors"
            >
              Book Appointment
            </button>
            <button className="flex-1 bg-transparent border border-[#3b4354] hover:bg-[#282e39] text-white h-12 rounded-lg font-bold transition-colors">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomCTA;
