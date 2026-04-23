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

  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden font-sans">
      
      {/* --- HERO / HEADER --- */}
      <nav className="bg-black text-white py-6 px-6 md:px-12 flex justify-between items-center border-b border-yellow-500/30">
        <div className="flex items-center gap-4">
          <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-lg" />
          <span className="font-black tracking-tighter text-xl">GICD <span className="text-yellow-500 text-sm block font-normal tracking-widest">NIGERIA</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest">
          <a href="#who" className="hover:text-yellow-500 transition-colors">Who We Are</a>
          <a href="#what" className="hover:text-yellow-500 transition-colors">What We Do</a>
          <a href="#updates" className="hover:text-yellow-500 transition-colors">Updates</a>
          <a href="#work" className="text-yellow-500 border border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-all">Work With Us</a>
        </div>
      </nav>

      {/* 1. WHO WE ARE SECTION */}
      <section id="who" className="relative z-10 bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-yellow-500 text-xs font-black uppercase tracking-[0.5em] mb-4">Section 01</h2>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic">
                Who We <br /> <span className="text-yellow-500">Are.</span>
              </h1>
              <div className="space-y-6 text-gray-400 border-l-2 border-yellow-500 pl-8">
                <p className="text-xl font-light italic">"Our story is one of resilience and community-led change."</p>
                <p className="text-sm leading-relaxed">The Guardians Initiative for Community Development (GICD) is a dedicated NGO focused on empowering populations in Plateau State through strategic intervention and professional leadership.</p>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">Board of Trustees & Team</h3>
              <div className="grid grid-cols-2 gap-4">
                {trustees.slice(0, 4).map((t, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <img src={t.img} className="w-10 h-10 rounded-full object-cover grayscale" alt={t.name} />
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-black truncate">{t.name}</p>
                      <p className="text-[8px] text-yellow-500 uppercase font-bold">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO SECTION */}
      <section id="what" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-black uppercase mb-16 tracking-tighter italic">Our <span className="text-yellow-500">Focus.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-gray-50 p-12 rounded-[2rem] border border-gray-100 hover:bg-black hover:text-white transition-all duration-500">
              <h3 className="text-3xl font-black mb-4 uppercase">Child Protection</h3>
              <p className="text-sm opacity-60 leading-relaxed mb-6">Implementing safe-guarding strategies and psychological support for vulnerable children in high-risk zones.</p>
              <div className="w-full h-1 bg-yellow-500 group-hover:w-20 transition-all" />
            </div>
            <div className="group bg-gray-50 p-12 rounded-[2rem] border border-gray-100 hover:bg-black hover:text-white transition-all duration-500">
              <h3 className="text-3xl font-black mb-4 uppercase">Education</h3>
              <p className="text-sm opacity-60 leading-relaxed mb-6">Strengthening chemistry performance and general science literacy across secondary schools in Gombe and Plateau.</p>
              <div className="w-full h-1 bg-yellow-500 group-hover:w-20 transition-all" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMME UPDATES */}
      <section id="updates" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Programme <span className="text-yellow-500 underline decoration-8">Updates</span></h2>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">All activities posted here</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="aspect-video bg-gray-200 rounded-xl mb-4" />
                <p className="text-[10px] text-yellow-600 font-bold mb-2">MARCH 2026</p>
                <h4 className="font-black uppercase text-sm mb-2">Field Report: Angwan Rukuba Analysis</h4>
                <p className="text-[11px] text-gray-500">Initial findings from our community protection risk assessment...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESOURCES */}
      <section className="py-24 px-6 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-black uppercase mb-6">Technical Resources</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors cursor-pointer">
                <span className="text-yellow-600 font-bold">PDF</span>
                <span className="text-xs font-black uppercase">Standard Operating Procedures</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black uppercase mb-6">Reports & Assessments</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors cursor-pointer">
                <span className="text-yellow-600 font-bold">DOC</span>
                <span className="text-xs font-black uppercase">2026 Impact Assessment Report</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. WORK WITH US */}
      <section id="work" className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-16 tracking-tighter text-center">Work With <span className="text-yellow-500 underline">Us.</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Partnership", "Donation", "Volunteer", "Jobs"].map((role) => (
              <button key={role} className="p-8 border border-white/10 rounded-2xl hover:bg-yellow-500 hover:text-black transition-all group">
                <h4 className="font-black uppercase tracking-tighter text-xl mb-2">{role}</h4>
                <p className="text-[8px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100">Click to Inquire</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & SOCIALS */}
      <footer className="bg-black py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-[10px] text-gray-500 font-mono tracking-[0.5em]">© 2026 THE GUARDIANS INITIATIVE</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/share/1BqVaP3TVA/" target="_blank" className="text-white text-xs font-bold hover:text-yellow-500 transition-colors">FACEBOOK</a>
            <a href="https://www.linkedin.com/company/thegicd/" target="_blank" className="text-white text-xs font-bold hover:text-yellow-500 transition-colors">LINKEDIN</a>
          </div>
        </div>
      </footer>

    </main>
  );
}