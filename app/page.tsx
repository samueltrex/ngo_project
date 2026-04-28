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
    <main className="w-full min-h-screen bg-white text-black font-sans selection:bg-yellow-100 overflow-x-hidden">
      
      {/* --- RESPONSIVE HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black px-4 md:px-8 py-4">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          
          <div className="flex items-center gap-4 md:gap-6">
            <img 
              src="/logo.jpg" 
              alt="GICD Logo" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain border-2 border-black p-0.5" 
            />
            <div className="border-l-4 border-black pl-4 md:pl-6">
              <h1 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none mb-1">
                The Guardian <span className="text-yellow-600">Initiative</span>
              </h1>
              <p className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-[0.3em]">
                For Community Development
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest">
            <a href="#who" className="hover:text-yellow-600 transition-colors">Who We Are</a>
            <a href="#updates" className="hover:text-yellow-600 transition-colors">Updates</a>
            <button className="bg-black text-white px-6 py-3 hover:bg-yellow-500 hover:text-black transition-all">
              Work With Us
            </button>
          </nav>
        </div>
      </header>

      {/* --- SECTION 1: WHO WE ARE (Responsive Layout) --- */}
      <section id="who" className="pt-48 md:pt-60 pb-24 md:pb-32 px-4 md:px-10 bg-black text-white">
        <div className="max-w-[1800px] mx-auto">
          
          <div className="mb-16 md:mb-24 border-l-8 border-yellow-500 pl-6 md:pl-10">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic">
              Who We <br /> <span className="text-yellow-500 underline decoration-[6px] md:decoration-[10px] underline-offset-[8px]">Are.</span>
            </h2>
          </div>

          {/* BOARD GRID - Auto-responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {trustees.map((t, i) => (
              <div key={i} className="group bg-neutral-900 border border-white/5 hover:border-yellow-500 transition-all duration-500 shadow-xl overflow-hidden">
                <div className="overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 aspect-[2048/1336] w-full">
                  <img 
                    src={t.img} 
                    alt={t.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="text-lg md:text-xl font-black uppercase tracking-tighter mb-2 md:mb-3 leading-tight group-hover:text-yellow-500 transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-[9px] md:text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] leading-relaxed italic">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* --- SECTION 2: UPDATES (Compact & Professional) --- */}
      <section id="updates" className="py-20 md:py-28 px-4 md:px-10 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Image with a tighter frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative border-4 border-black p-2 bg-white shadow-lg">
                <img 
                  src="/part a 2.jpg" 
                  alt="Ministry Meeting" 
                  className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-black font-black px-6 py-2 border-2 border-black text-xs uppercase tracking-widest shadow-md">
                Protocol Approved
              </div>
            </div>

            {/* Right: Content with smaller, cleaner typography */}
            <div className="lg:col-span-6 lg:pl-10">
              <div className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] px-4 py-1.5 mb-6">
                Latest Engagement
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                Laughs <br /> <span className="text-yellow-600 italic">at Last!</span>
              </h2>

              <div className="space-y-6">
                <blockquote className="border-l-4 border-yellow-500 pl-6 text-lg md:text-xl font-medium text-gray-800 leading-snug italic">
                  &quot;The Commissioner&apos;s signing marks a major milestone for child protection research in Plateau State.&quot;
                </blockquote>
                
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  We have concluded high-level discussions with the Honorable Commissioner, Plateau State Ministry of Women Affairs and Social Development, ensuring local research is grounded in official policy.
                </p>

                {/* Compact Document Link */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg w-fit mt-8">
                  <div className="w-10 h-12 bg-black flex items-center justify-center text-yellow-500 font-bold text-xs">PDF</div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">View Signed File</p>
                    <p className="text-xs font-bold text-black uppercase hover:text-yellow-600 cursor-pointer transition-colors">
                      Research_Protocol_2026.pdf
                    </p>
                  </div>
                </div>
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