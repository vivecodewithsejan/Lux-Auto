
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0f15] border-t border-[#1c1f27] pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-white">
              <div className="size-8 text-primary">
                <span className="material-symbols-outlined text-3xl">directions_car</span>
              </div>
              <h2 className="text-white text-xl font-bold tracking-tight">LuxAuto</h2>
            </div>
            <p className="text-gray-500 text-sm">
              Redefining the luxury automotive experience. <br/>
              Beverly Hills • Miami • Dubai
            </p>
            <div className="flex gap-4">
              {['videocam', 'photo_camera', 'alternate_email'].map((icon, i) => (
                <a key={i} className="size-10 rounded-full bg-[#1c1f27] flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Inventory</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              {['New Arrivals', 'Supercars', 'SUVs & Trucks', 'Classics', 'Sell Your Car'].map(item => (
                <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              {['About LuxAuto', 'Concierge Services', 'Financing', 'Careers', 'Contact Us'].map(item => (
                <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Stay Informed</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe to receive updates on new inventory and exclusive events.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="bg-[#1c1f27] border border-[#282e39] text-white rounded-lg p-3 text-sm focus:ring-primary focus:border-primary outline-none" 
                placeholder="Email Address" 
                type="email"
              />
              <button className="bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg text-sm transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-[#1c1f27] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2024 LuxAuto Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-gray-400" href="#">Privacy Policy</a>
            <a className="hover:text-gray-400" href="#">Terms of Service</a>
            <a className="hover:text-gray-400" href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
