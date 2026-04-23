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
      <section id="impact" className="relative z-10 py-16 px-6 bg-white">
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
{/* 3. BOARD OF TRUSTEES - CLEAN STACK */}
      <section className="relative z-10 bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12">Board of <span className="text-yellow-500">Trustees</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Your Trustee Cards here */}
          </div>
        </div>
      </section>

      {/* 4. IMPACT DATA (THE 5 CARDS) - FORCED CLICKABLE */}
      <section className="relative z-20 bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pointer-events-auto">
            {/* Your 5 Impact Cards here */}
            {/* Make sure each card has "relative z-30" inside it */}
          </div>
        </div>
      </section>

      {/* 5. CONTACT PORTAL & MAP - TOP LAYER */}
      <section className="relative z-40 bg-black text-white py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Map & Info */}
            <div className="w-full lg:w-1/3 space-y-6">
              <h3 className="text-3xl font-black uppercase tracking-tighter">Contact<span className="text-yellow-500">.</span></h3>
              <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 relative z-50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.02424848033!2d8.818163539062503!3d9.89047910000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10890e0904770147%3A0x6335198039fe65e6!2sJos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  className="pointer-events-auto"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-2/3 bg-white/5 p-6 rounded-2xl border border-white/10 relative z-50">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 pointer-events-auto">
                <input type="text" className="bg-transparent border-b border-white/20 p-2 outline-none focus:border-yellow-500 text-white text-sm" placeholder="Name" />
                <input type="email" className="bg-transparent border-b border-white/20 p-2 outline-none focus:border-yellow-500 text-white text-sm" placeholder="Email" />
                <input type="text" className="md:col-span-2 bg-transparent border-b border-white/20 p-2 outline-none focus:border-yellow-500 text-white text-sm" placeholder="Message" />
                <div className="md:col-span-2 flex justify-end">
                  <button type="button" className="px-8 py-3 bg-yellow-500 text-black font-black uppercase text-[10px] rounded-lg hover:bg-white transition-all cursor-pointer">
                    Send
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      <footer className="relative z-40 bg-black py-8 border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] font-mono tracking-[0.3em]">© 2026 GICD NIGERIA</p>
      </footer>
    </main>
  );
}