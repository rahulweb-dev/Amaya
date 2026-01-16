'use client';
import React, { useState } from 'react';
import AmayaValues from './components/AmayaValues';
import AmayaFooter from './components/AmayaFooter';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', mobile: '', email: '' });
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* HERO SECTION */}
      <section
        className='relative min-h-screen w-full overflow-hidden'
        style={{
          backgroundImage:
            "url('/assests/Render.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Soft Overlay */}
        <div className='absolute inset-0 bg-black/30' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60' />

        {/* Navbar */}
        <header className='absolute top-0 left-0 w-full z-20'>
          <div className='max-w-7xl mx-auto px-4 py-6 flex items-center justify-between'>
           <Link href={'/'}> <div className='text-white font-semibold tracking-[0.25em] text-xl'>
              <Image
                src='/assests/Amaya_Logo_Final_copy.png'
                alt='AMAYA Logo'
                width={140}
                height={60}
                className='h-12 w-auto object-contain '
                priority
              />
            </div></Link>

            <nav className='hidden md:flex items-center gap-10 text-white/90 text-sm font-medium'>
              <a href='#/home' className='hover:text-white transition'>
                Home
              </a>
              <a href='#Services' className='hover:text-white transition'>
               Services
              </a>
              <a href='#Projects' className='hover:text-white transition'>
               Projects
              </a>
              <a href='#contact' className='hover:text-white transition'>
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Content */}
        <div className='relative z-10 min-h-screen flex items-end justify-center pb-20 px-4'>
          <div className='max-w-4xl text-center'>
            <p className='text-white  tracking-widest uppercase mb-4 text-6xl '>
              Coming Soon
            </p>

            <h1 className='text-white font-semibold leading-[1.05] text-4xl md:text-6xl'>
              The top choice for{' '}
              <span className='text-[#F7D34A]'>luxury living</span>
              <br className='hidden md:block' />
              <span className='text-white'>in Hyderabad</span>
            </h1>

            <p className='mt-5 text-white/80 text-base md:text-lg leading-relaxed'>
              We’re launching something new and exciting. Our website is under
              construction, but we’ll be live very soon. Leave your details
              below and we’ll reach out as soon as we’re ready.
            </p>

            {/* Buttons */}
            <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='#contact'
                className='inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#F7D34A] text-black font-semibold shadow-lg hover:brightness-95 transition'
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
      <AmayaValues />
      {/* LEAD FORM SECTION */}
      <section
        id='contact'
        className='relative py-20 overflow-hidden'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/65' />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" /> */}

        <div className='relative z-10 max-w-7xl mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left text */}
            <div>
              {/* <p className='text-xs tracking-[0.35em] uppercase text-white/70'>
                Get Early Access
              </p> */}

              <h2 className='mt-3 text-white text-3xl md:text-5xl font-semibold leading-tight'>
                Sign up for <br className='hidden md:block' />  News Letter
              </h2>

              <p className='text-white/75 mt-4 leading-relaxed max-w-xl'>
                Get first updates on the project launches. Our team will contact you shortly.
              </p>

              {/* <div className='mt-7 flex flex-wrap gap-3'>
                {[
                  'Premium Locations',
                  'Verified Properties',
                  'Exclusive Deals',
                ].map((item) => (
                  <span
                    key={item}
                    className='px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/85 text-sm backdrop-blur-md'
                  >
                    {item}
                  </span>
                ))}
              </div> */}

              <div className='mt-10 border-t border-white/15 pt-6 text-white/70 text-sm'>
                {/* <p>
                  <span className='text-white font-semibold'>AMAYA</span> —
                  crafted for comfort, trust, and timeless living.
                </p> */}
              </div>
            </div>

            {/* Form card (Glass UI) */}
            <div className='lg:justify-self-end w-full'>
              <div className='w-full max-w-md rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl p-8'>
                <h3 className='text-2xl font-semibold text-white'>
                  Get Notified First
                </h3>
                <p className='text-white/70 mt-1'>
                  Sign up for newsletter & new launches.
                </p>

                <form onSubmit={handleSubmit} className='mt-7 space-y-4'>
                  <div>
                    <label className='text-sm font-medium text-white/80'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Enter your name'
                      required
                      className='mt-2 w-full px-4 py-3 rounded-2xl border border-white/15 bg-black/30 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#F7D34A]'
                    />
                  </div>

                  <div>
                    <label className='text-sm font-medium text-white/80'>
                      Mobile Number
                    </label>
                    <input
                      type='tel'
                      name='mobile'
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder='Enter your number'
                      required
                      className='mt-2 w-full px-4 py-3 rounded-2xl border border-white/15 bg-black/30 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#F7D34A]'
                    />
                  </div>

                  <div>
                    <label className='text-sm font-medium text-white/80'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter your email'
                      required
                      className='mt-2 w-full px-4 py-3 rounded-2xl border border-white/15 bg-black/30 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#F7D34A]'
                    />
                  </div>

                  <button
                    type='submit'
                    className='w-full mt-2 px-6 py-3 rounded-full bg-[#F7D34A] text-black font-semibold hover:brightness-95 transition shadow-lg'
                  >
                    Submit
                  </button>

                  <p className='text-xs text-white/60 text-center mt-3'>
                    We respect your privacy. No spam.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AmayaFooter />
    </div>
  );
}
