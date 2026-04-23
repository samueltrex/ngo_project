"use client";

import React from 'react';

export default function Home() {
  const trustees = [
    { name: "Rev Fr Hilary Naankot Longs", role: "Catholic Priest / Leadership", img: "/a.jpg" },
    { name: "Ejilayomi Omokorede Damoeroem", role: "PHD Science Educator", img: "/b.jpg" },
    { name: "Abdulrazak Ishola", role: "Child Protection Specialist", img: "/c.jpg" },
    { name: "Iliya John Dayok", role: "Human Resources Professional", img: "/d.jpg" },
    { name: "Atihong Lois Yengoet", role: "Economist / Director General", img: "/e.jpg" },
    { name: "Dr. Terna Abege (PHD)", role: "Head of MHPSS", img: "/f.jpg" },
    { name: "Dorcas Bello (Sheffy)", role: "Multimedia Journalist", img: "/g.jpg" }
  ];

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-yellow-100">
      
      {/* --- BOLD INSTITUTIONAL HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-[6px] border-black px-8 py-8">
        <div className="max-w-[2048px] mx-auto flex justify-between items-center lg:px-12">
          
          <div className="flex items-center gap-8">
            {/* Logo from public folder */}
            <img 
              src="/logo.jpeg" 
              alt="GICD Logo" 
              className="w-20 h-20 object-contain border-2 border-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
            />
            <div className="border-l-[6px] border-black pl-8">
              <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">
                The Guardian <span className="text-yellow-600">Initiative</span>
              </h1>
              <p className="text-sm font-black text-gray-500 uppercase tracking-[0.4em]">
                For Community Development
              </p>
            </div>
          </div>

          <nav className="hidden xl:flex items-center gap-16 text-md font-black uppercase tracking-widest">
            <a href="#who" className="hover:text-yellow-600 transition-colors">Who We Are</a>
            <a href="#updates" className="hover:text-yellow-600 transition-colors">Updates</a>
            <button className="bg-yellow-500 text-black border-4 border-black px-10 py-5 hover:bg-black hover:text-white transition-all shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
              Work With Us
            </button>
          </nav>
        </div>
      </header>

      {/* --- SECTION 1: WHO WE ARE (2048x1336 Layout) --- */}
      <section id="who" className="pt-80 pb-40 px-6 bg-black text-white">
        <div className="max-w-[2048px] mx-auto lg:px-20">
          <div className="mb-40">
            <h1 className="text-9xl md:text-[16rem] font-black tracking-tighter leading-[0.7] uppercase italic">
              Who We <br /> <span className="text-yellow-500 underline decoration-[20px] underline-offset-[20px]">Are.</span>
            </h1>
          </div>

          {/* BOARD GRID - Optimized for 2048px Resolution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {trustees.map((t, i) => (
              <div key={i} className="group bg-neutral-900 border-2 border-white/10 p-0 overflow-hidden hover:border-yellow-500 transition-all duration-500 shadow-2xl">
                <div className="overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 aspect-[2048/1336]">
                  <img 
                    src={t.img} 
                    alt={t.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]"
                  />
                </div>
                <div className="p-10 border-t-4 border-yellow-500">
                  <h4 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none group-hover:text-yellow-500 transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-black uppercase tracking-[0.3em] leading-relaxed">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PROGRAMME UPDATES --- */}
      <section id="updates" className="py-56 px-6 bg-white">
        <div className="max-w-[2048px] mx-auto lg:px-20 grid lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-7">
            <div className="relative p-6 border-[8px] border-black shadow-[30px_30px_0px_0px_rgba(234,179,8,1)]">
              <img 
                src="/part a 2.jpg" 
                alt="Ministry Meeting" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000" 
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <span className="bg-black text-white font-black text-sm uppercase tracking-[0.5em] px-6 py-2 mb-10 inline-block">
              Field Updates 2026
            </span>
            <h2 className="text-9xl font-black uppercase tracking-tighter leading-[0.75] mb-16">
              Laughs <br /> at <span className="text-yellow-500 italic">Last!</span>
            </h2>
            <div className="space-y-10 text-3xl text-gray-700 leading-tight italic border-l-[12px] border-yellow-500 pl-12">
              <p className="font-black text-black">
                &quot;The Commissioner&apos;s signing of the Research Protocol marks a milestone for children in Plateau State.&quot;
              </p>
            </div>
            
            <div className="mt-20 flex items-center gap-10 p-10 bg-gray-50 border-4 border-black w-fit shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
              <img src="/part a 1.jpg" className="w-24 h-32 object-cover shadow-2xl" alt="Document" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-2">Verified Protocol</p>
                <p className="text-lg font-black text-black uppercase underline decoration-4 underline-offset-4">GICD_Protocol_Signed.pdf</p>
              </div>
            </div>
          </div>
        </div>
</section>

{/* SECTION 3: PROGRAMME UPDATES - ADVOCACY & FIELD WORK */}
<section id="updates" className="py-28 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">Programme <span className="text-yellow-600">Updates</span></h2>
            <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-24">

            {/* URGENT UPDATE: SAFE SCHOOLS ADVOCACY */}
            <div className="bg-white rounded-[3rem] p-8 md:p-16 border-2 border-yellow-500 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4">
                  <img src="/part c 1.jpg" alt="Insecurity Affects Education Advocacy" className="w-full rounded-2xl shadow-lg" />
                </div>
                <div className="lg:col-span-8">
                  <span className="bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest mb-6 inline-block animate-pulse">Urgent Action</span>
                  <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none">Safe Schools Now: <br /><span className="text-gray-400 text-2xl">A Call to Government</span></h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    With 47 Unity schools closed nationwide and closures effective Nov 22-24 in Plateau State, insecurity is denying many Nigerian children their right to safe, quality education.
                  </p>
                  <p className="text-base font-bold text-black mb-8 italic">
                    &quot;Our children deserve safe classrooms, not crises.&quot;
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="text-[10px] font-black text-gray-400">#SafeSchoolsNow</span>
                    <span className="text-[10px] font-black text-gray-400">#RightToEducation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PREVIOUS UPDATE: TUDUN WADA */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12">
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img src="/part b 1.jpg" className="rounded-3xl shadow-lg grayscale hover:grayscale-0 transition-all duration-500" alt="Community Leaders" />
                    <img src="/part b 3.jpg" className="rounded-3xl shadow-lg grayscale hover:grayscale-0 transition-all duration-500" alt="Consultation Meeting" />
                  </div>
                  <div className="pt-12">
                    <img src="/part b 2.jpg" className="rounded-3xl shadow-lg grayscale hover:grayscale-0 transition-all duration-500" alt="Sarkin Tudun Wada Discussion" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.4em] mb-4 block">Field Consultation</span>
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">Safe Futures <br /> in Tudun Wada</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  Integrating community insights from the Sarkin Tudun Wada into the design of the GICD Safe Futures Project to combat drug abuse and teenage pregnancy.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 italic text-xs text-gray-500">
                  &quot;The community&apos;s openness to discuss tough questions assures readiness to take ownership.&quot;
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: RESOURCES */}
      <section id="resources" className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter italic">Resource <span className="text-yellow-600">Hub</span></h2>
            <p className="text-xs text-gray-400 font-bold uppercase mt-4 tracking-widest">Public Access Documents</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-black transition-all cursor-pointer">
              <p className="text-[9px] font-black text-yellow-600 uppercase mb-4 tracking-widest">Field Data</p>
              <h4 className="text-lg font-black uppercase tracking-tight group-hover:text-white">Reports & Assessments</h4>
            </div>
            <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-black transition-all cursor-pointer">
              <p className="text-[9px] font-black text-yellow-600 uppercase mb-4 tracking-widest">Guidance</p>
              <h4 className="text-lg font-black uppercase tracking-tight group-hover:text-white">Technical Resources</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WORK WITH US */}
      <section id="work" className="py-28 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-7xl font-black uppercase mb-20 tracking-tighter italic text-center leading-none">Work With <br /><span className="text-yellow-500 underline decoration-[10px] underline-offset-8">Us.</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Partnership", "Donation", "Volunteer", "Jobs"].map((item) => (
              <button key={item} className="aspect-square border border-white/10 rounded-[3rem] flex flex-col items-center justify-center hover:bg-yellow-500 hover:text-black transition-all group">
                <h4 className="font-black uppercase text-2xl tracking-tighter group-hover:scale-110 transition-transform">{item}</h4>
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-6 group-hover:bg-black" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 px-6 border-t border-white/10 text-center">
        <div className="flex justify-center gap-12 mb-12">
          <a href="https://www.facebook.com/share/1BqVaP3TVA/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-white font-black uppercase tracking-[0.4em] hover:text-yellow-500 transition-colors">Facebook</a>
          <a href="https://www.linkedin.com/company/thegicd/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-white font-black uppercase tracking-[0.4em] hover:text-yellow-500 transition-colors">LinkedIn</a>
        </div>
        <p className="text-gray-600 text-[10px] font-mono tracking-[0.6em] uppercase">© 2026 THE GUARDIANS INITIATIVE • GICD NIGERIA</p>
      </footer>
    </main>
  );
}
  
