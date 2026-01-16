'use client';
import React, { useState } from 'react';

const valuesData = [
  {
    title: 'Life on Your Terms',
    desc: 'Homes built to support independence, comfort, and freedom.',
    active: true,
  },
  {
    title: 'Well-Being First',
    desc: 'A calm environment that encourages healthy daily living.',
  },
  {
    title: 'Community & Belonging',
    desc: 'Spaces that bring people together and create connection.',
  },
  {
    title: 'Trust & Dignity',
    desc: 'Built with transparency, respect, and reliability.',
  },
  {
    title: 'Thoughtful Design',
    desc: 'Elegant planning that balances beauty with functionality.',
  },
];

const AmayaValues = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-[#f6f1e7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            AMAYA Values
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl leading-relaxed">
            Every AMAYA home is shaped around timeless principles — comfort,
            trust, community, and thoughtful living.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuesData.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`cursor-pointer rounded-3xl p-6 transition duration-300 border ${
                  isActive
                    ? 'bg-[#1f2a2d] text-white border-[#1f2a2d] shadow-xl'
                    : 'bg-white text-gray-900 border-gray-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Icon */}
                <div
                  className={`h-11 w-11 rounded-2xl flex items-center justify-center mb-4 ${
                    isActive ? 'bg-white/10' : 'bg-gray-100'
                  }`}
                >
                  <span className={`${isActive ? 'text-white' : 'text-gray-800'} text-lg`}>
                    ✦
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold">{item.title}</h3>

                {/* Desc */}
                <p className={`mt-2 text-sm leading-relaxed ${isActive ? 'text-white/75' : 'text-gray-600'}`}>
                  {item.desc}
                </p>

                {/* Link */}
                <button
                  className={`mt-4 text-sm font-medium underline-offset-4 hover:underline ${
                    isActive ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  Read more
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmayaValues;
