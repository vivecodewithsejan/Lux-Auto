
import React from 'react';

const Services: React.FC = () => {
  const items = [
    {
      icon: 'local_shipping',
      title: 'White Glove Delivery',
      desc: 'Door-to-door enclosed transport for your vehicle, ensuring it arrives in pristine condition anywhere in the world.'
    },
    {
      icon: 'verified_user',
      title: 'Certified Inspection',
      desc: 'Every vehicle undergoes a rigorous 150-point inspection by our factory-trained master technicians.'
    },
    {
      icon: 'public',
      title: 'Global Sourcing',
      desc: "Can't find what you're looking for? Our concierge team accesses off-market inventory globally."
    }
  ];

  return (
    <section className="bg-[#0e121a] py-24 border-y border-[#282e39]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {items.map((item, i) => (
            <div key={i} className="group p-6 rounded-2xl hover:bg-[#1c1f27] transition-colors">
              <div className="inline-flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
