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
    <main className="min-h-screen bg-white text-black overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative z-10 bg-black text-white py-20 px-6 md:px-12 border-b-8 border-yellow-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="relative group">
             <div className="absolute -inset-1 bg-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             <img src="/logo.jpg" alt="GICD Logo" className="relative w-32 md:w-48 rounded-3xl border border-white/10 shadow-2xl" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-6 uppercase">
              The Guardians Initiative <span className="text-yellow-500">for</span> Community <br />
              Development<span className="text-yellow-500">.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl font-light border-l-4 border-yellow-500 pl-6 leading-relaxed">
              Empowering vulnerable populations and strengthening community resilience through evidence-based research in Plateau State.
            </p>
          </div>
        </div>
      </section>

      {/* 2. RESEARCH DATA - HORIZONTAL CARDS (NO MAP) */}
      <section className="relative z-20 py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-600 mb-2">Research Analysis</h2>
            <h3 className="text-5xl font-black italic tracking-tight text-black">Angwan Rukuba Findings</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
              <button 
                key={i} 
                type="button" 
                onClick={() => setSelectedImg(stat.img)} 
                className="w-full text-left bg-white p-6 shadow-md border-t-4 border-yellow-500 hover:bg-yellow-50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[160px] group"
              >
                <h4 className="text-3xl font-black text-black group-hover:text-yellow-600 transition-colors">{stat.val}</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-4 leading-relaxed">{stat.label}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BOARD OF TRUSTEES - 3 PER ROW (3:2 RATIO) */}
      <section className="relative z-20 bg-gray-50 py-24 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 border-l-8 border-yellow-500 pl-8">
             <h2 className="text-5xl font-black uppercase tracking-tighter">Board of <br/> <span className="text-yellow-500">Trustees</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {trustees.map((person, i) => (
              <div key={i} className="group relative bg-white overflow-hidden shadow-xl border border-gray-200">
                <div className="relative aspect-[3/2] overflow-hidden bg-gray-200">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
                </div>
                <div className="p-6 bg-white">
                  <h4 className="text-lg font-black uppercase leading-tight group-hover:text-yellow-600 transition-colors">{person.name}</h4>
                  <div className="w-12 h-1 bg-yellow-500 my-3 group-hover:w-24 transition-all" />
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-[0.2em]">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT PORTAL - UPDATED SOCIAL LINKS */}
      <section className="relative z-30 bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 underline decoration-yellow-500 decoration-4">Contact Portal.</h3>
              <div className="space-y-6">
                <p className="text-gray-400">📍 Jos, Plateau State, Nigeria</p>
                
                <div className="flex flex-col gap-4 pt-4">
                  <a href="https://www.facebook.com/share/1BqVaP3TVA/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-blue-600 transition-all group">
                    <span className="font-black uppercase tracking-widest text-xs">Facebook</span>
                    <span className="text-xl">→</span>
                  </a>
                  <a href="https://www.linkedin.com/company/thegicd/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-blue-700 transition-all group">
                    <span className="font-black uppercase tracking-widest text-xs">LinkedIn</span>
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl">
              <form className="space-y-6">
                <input type="text" className="w-full bg-transparent border-b border-white/20 p-3 outline-none focus:border-yellow-500 text-sm text-white" placeholder="Full Name" />
                <input type="email" className="w-full bg-transparent border-b border-white/20 p-3 outline-none focus:border-yellow-500 text-sm text-white" placeholder="Email Address" />
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 p-3 outline-none focus:border-yellow-500 text-sm text-white resize-none" placeholder="Your Message"></textarea>
                <button type="button" className="w-full py-5 bg-yellow-500 text-black font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-white transition-all transform active:scale-95">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL FOR IMAGE VIEWING */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer" onClick={() => setSelectedImg(null)}>
          <div className="relative max-w-5xl w-full">
            <img src={selectedImg} className="w-full h-auto rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" alt="Full Preview" />
            <p className="text-white/50 text-center mt-4 text-[10px] uppercase tracking-widest font-bold">Click anywhere to close</p>
          </div>
        </div>
      )}

      <footer className="relative z-30 bg-black py-10 border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] font-mono tracking-[0.4em] uppercase">© 2026 The Guardians Initiative • GICD Nigeria</p>
      </footer>
    </main>
  );
}