"use client";
import { useState } from "react";

export default function Home() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const trustees = [
    { name: "Rev Fr Hilary Naankot Longs", role: "Catholic Priest / Leadership", img: "/a.jpg" },
    { name: "Ejilayomi Omokorede Damoeroem", role: "PHD Science Educator", img: "/b.jpg" },
    { name: "Abdulrazak Ishola", role: "Child Protection Specialist", img: "/c.jpg" },
    { name: "Iliya John Dayok", role: "Human Resources Professional", img: "/d.jpg" },
    { name: "Atihong Lois Yengoet", role: "Economist / Director General", img: "/e.jpg" },
    { name: "Dr. Terna Abege (PHD)", role: "Head of MHPSS", img: "/f.jpg" },
    { name: "Dorcas Bello (Sheffy)", role: "Multimedia Journalist", img: "/g.jpg" }
  ];

  const stats = [
    { val: "96.9%", label: "Protection Risk", img: "/5.jpg" },
    { val: "65.6%", label: "Violence Exp.", img: "/2.jpg" },
    { val: "1 in 5", label: "Child Marriage Risk", img: "/4.jpg" },
    { val: "88%", label: "Education Aspiration", img: "/1.jpg" },
    { val: "0.0%", label: "Health Access", img: "/3.jpg" }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* 1. HERO SECTION */}
{/* 1. HERO SECTION - CORRECTED BRANDING */}
      <section className="bg-black text-white py-24 px-6 md:px-12 border-b-8 border-yellow-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Logo Container */}
          <div className="relative group">
             <div className="absolute -inset-1 bg-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             <img src="/logo.jpg" alt="GICD Logo" className="relative w-32 md:w-56 rounded-3xl border border-white/10 shadow-2xl" />
          </div>

          <div className="text-center md:text-left">
            {/* The Full Official Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1] mb-6 uppercase">
              The Guardians Initiative <span className="text-yellow-500">for</span>  Community <br />
              Development<span className="text-yellow-500">.</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light border-l-4 border-yellow-500 pl-6 leading-relaxed">
                Empowering vulnerable populations and strengthening community resilience through evidence-based research and strategic intervention in Plateau State.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* 2. RESEARCH DATA - MAP RIGIDLY MATCHING CARD HEIGHT */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-yellow-600 mb-2">Research Analysis</h2>
            <h3 className="text-5xl font-black italic tracking-tight text-black">Angwan Rukuba Findings</h3>
          </div>

          {/* This grid ensures the columns stay aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* LEFT COLUMN: The cards determine the total height */}
            <div className="lg:col-span-4 flex flex-col gap-3 h-full">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedImg(stat.img)}
                  className="bg-white p-4 shadow-sm border-l-4 border-yellow-500 cursor-pointer hover:bg-yellow-50 transition-all group flex-1 flex flex-col justify-center"
                >
                  <h4 className="text-2xl font-black text-black leading-tight">{stat.val}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN: The map fits the column height without exceeding it */}
            <div className="lg:col-span-8 relative min-h-[300px]">
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white cursor-zoom-in group"
                onClick={() => setSelectedImg("/ss.jpg")}
              >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                   <span className="bg-black/80 text-white px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-widest">Enlarge Map</span>
                </div>
                <img 
                  src="/ss.jpg" 
                  alt="Research Map" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUSTEES SECTION */}
{/* 3. BOARD OF TRUSTEES - WIDE 3-PER-ROW LAYOUT */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20 border-l-[10px] border-yellow-500 pl-8">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-yellow-600 mb-2">The Leadership</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-black uppercase">Board of Trustees</h3>
          </div>

          {/* Grid: Exactly 3 per row on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {trustees.map((member, index) => (
              <div key={index} className="group flex flex-col">
                
                {/* IMAGE CONTAINER 
                   We use aspect-video (16/9) or a custom 3/2 aspect 
                   to perfectly fit 2048 x 1336 images without cropping.
                */}
                <div className="relative w-full aspect-[3/2] mb-8 overflow-hidden bg-gray-100 rounded-[2rem] border-4 border-black/5 group-hover:border-yellow-500 transition-all duration-500 shadow-xl">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
{/* 4. CONTACT PORTAL - BOLD & FUNCTIONAL */}
      <section className="py-24 px-6 md:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left Side: Information */}
            <div>
              <div className="mb-12 border-l-[10px] border-yellow-500 pl-8">
                <h2 className="text-sm font-black uppercase tracking-[0.5em] text-yellow-600 mb-2">Connect</h2>
                <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">Contact <br/> Portal<span className="text-yellow-500">.</span></h3>
              </div>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-yellow-500 font-mono uppercase tracking-widest text-xs mb-3">Headquarters</h4>
                  <p className="text-2xl font-light text-gray-300">
                    Jos, Plateau State,<br />
                    Nigeria.
                  </p>
                </div>

                <div>
                  <h4 className="text-yellow-500 font-mono uppercase tracking-widest text-xs mb-3">Research & Partnerships</h4>
                  <p className="text-2xl font-light text-gray-300">
                    research@gicd.org.ng
                  </p>
                </div>

                {/* Vertical Badge for status */}
                <div className="inline-block border border-white/20 px-6 py-4 rounded-2xl">
                  <span className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-bold uppercase tracking-widest">Portal Active</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Bold Form */}
            <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Full Name</label>
                    <input type="text" className="bg-white/10 border-b-2 border-white/20 p-4 outline-none focus:border-yellow-500 transition-colors text-white" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Email Address</label>
                    <input type="email" className="bg-white/10 border-b-2 border-white/20 p-4 outline-none focus:border-yellow-500 transition-colors text-white" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Subject</label>
                  <select className="bg-white/10 border-b-2 border-white/20 p-4 outline-none focus:border-yellow-500 transition-colors text-white appearance-none">
                    <option className="bg-black">General Inquiry</option>
                    <option className="bg-black">Research Collaboration</option>
                    <option className="bg-black">Community Development</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Message</label>
                  <textarea rows={4} className="bg-white/10 border-b-2 border-white/20 p-4 outline-none focus:border-yellow-500 transition-colors text-white resize-none" placeholder="How can we collaborate?"></textarea>
                </div>

                <button className="w-full py-6 bg-yellow-500 text-black font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>                
                {/* TEXT CONTENT */}
                <div className="px-2">
                  <h4 className="text-2xl font-black leading-tight mb-2 text-black uppercase tracking-tighter">
                    {member.name}
                  </h4>
                  <div className="w-12 h-1.5 bg-yellow-500 mb-4 transition-all duration-500 group-hover:w-20"></div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-600 font-mono leading-relaxed">
                    {member.role}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <img src={selectedImg} className="max-w-full max-h-full object-contain shadow-2xl" alt="Full view" />
        </div>
      )}

      <footer className="bg-black text-white py-12 px-6 text-center border-t border-white/10">
        <p className="text-gray-500 text-sm italic mb-2">&quot;Strengthening community resilience at all levels.&quot;</p>
        <p className="text-gray-600 text-[10px] uppercase tracking-widest">Jos, Plateau State, Nigeria</p>
      </footer>
    </main>
  );
}