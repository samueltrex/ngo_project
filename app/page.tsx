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
      
      {/* --- NEW HEADER: Logo, Name & Navigation --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-[2048px] mx-auto flex justify-between items-center lg:px-20">
          <div className="flex items-center gap-4">
            {/* Replace with your actual logo file */}
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-black text-white text-xl">G</div>
            <div>
              <h1 className="text-xl font-black uppercase tracking-tighter leading-none">The Guardian Initiative</h1>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">For Community Development</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-widest">
            <a href="#who" className="hover:text-yellow-600 transition-colors">Who We Are</a>
            <a href="#updates" className="hover:text-yellow-600 transition-colors">Updates</a>
            <a href="#" className="hover:text-yellow-600 transition-colors">Resources</a>
            <a href="#" className="bg-black text-white px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-all">Work With Us</a>
          </nav>
        </div>
      </header>

      {/* --- SECTION 1: WHO WE ARE (Layout Item 1) --- */}
      <section id="who" className="pt-60 pb-32 px-6 bg-black text-white">
        <div className="max-w-[2048px] mx-auto lg:px-20">
          <div className="mb-24">
            <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-[0.75] uppercase italic">
              Who We <span className="text-yellow-500">Are.</span>
            </h1>
          </div>

          {/* REFINED BOARD GRID: Minimal & Professional */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trustees.map((t, i) => (
              <div key={i} className="group relative overflow-hidden bg-neutral-900 border border-white/5 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-500">
                <div className="relative z-10">
                  <div className="mb-6 overflow-hidden rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 aspect-square">
                    <img 
                      src={t.img} 
                      alt={t.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-yellow-500 transition-colors">
                    {t.name}
                  </h4>
                  <div className="h-0.5 w-8 bg-yellow-500 mb-4"></div>
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] leading-relaxed">
                    {t.role}
                  </p>
                </div>
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PROGRAMME UPDATES (Layout Item 3) --- */}
      <section id="updates" className="py-40 px-6 bg-white">
        <div className="max-w-[2048px] mx-auto lg:px-20 grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-7">
            <img 
              src="/part a 2.jpg" 
              alt="Ministry Meeting" 
              className="w-full rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>

          <div className="lg:col-span-5">
            <span className="text-yellow-600 font-black text-[12px] uppercase tracking-[0.4em] mb-6 block">Latest Updates</span>
            <h2 className="text-6xl font-black uppercase tracking-tighter leading-[0.8] mb-10">
              Laughs <br /> at <span className="text-yellow-500 italic">Last!</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed italic border-l-4 border-yellow-500 pl-8">
              <p className="font-bold text-black text-2xl">
                &quot;The Commissioner&apos;s signing of the Research Protocol marks a milestone.&quot;
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6 p-4 bg-gray-50 rounded-2xl border border-gray-100 w-fit">
              <img src="/part a 1.jpg" className="w-16 h-20 object-cover rounded shadow-sm" alt="Document" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Status: Approved</p>
                <p className="text-xs font-bold text-black uppercase">Research_Protocol_2026.pdf</p>
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
  
