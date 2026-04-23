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

      {/* 2. RESEARCH DATA */}
      <section className="relative z-20 py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-600 mb-2">Research Analysis</h2>
            <h3 className="text-4xl font-black italic tracking-tight text-black">Angwan Rukuba Findings</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-4 flex flex-col gap-3">
              {stats.map((stat, i) => (
                <button 
                  key={i} 
                  type="button"
                  onClick={() => setSelectedImg(stat.img)}
                  className="w-full text-left bg-white p-4 shadow-sm border-l-4 border-yellow-500 hover:bg-yellow-50 transition-all flex flex-col justify-center group"
                >
                  <h4 className="text-2xl font-black text-black group-hover:text-yellow-600">{stat.val}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 relative min-h-[400px]">
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border border-gray-200 cursor-zoom-in group"
                onClick={() => setSelectedImg("/ss.jpg")}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                   <span className="bg-black text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-widest">View Map Data</span>
                </div>
                <img src="/ss.jpg" alt="Research Map" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOARD OF TRUSTEES */}
      <section className="relative z-20 bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12">Board of <span className="text-yellow-500">Trustees</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trustees.map((person, i) => (
              <div key={i} className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="text-sm font-black uppercase leading-tight">{person.name}</h4>
                  <p className="text-[10px] text-yellow-600 font-bold uppercase mt-1 tracking-widest">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT PORTAL */}
      <section className="relative z-30 bg-black text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 underline decoration-yellow-500 decoration-4">Contact Portal.</h3>
              <div className="space-y-4 text-sm text-gray-400">
                <p>📍 Jos, Plateau State, Nigeria</p>
                <p>📧 research@gicd.org.ng</p>
                <div className="h-40 w-full rounded-xl overflow-hidden grayscale mt-6 border border-white/10">
                  <iframe 
                    title="GICD Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125712.56942004246!2d8.82194680227181!3d9.890352220455208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1089201979b9b18b%3A0xc3311894d0752f9!2sJos!5e0!3m2!1sen!2sng!4v1713872100000!5m2!1sen!2sng" 
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy">
                  </iframe>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <form className="space-y-4">
                <input type="text" className="w-full bg-transparent border-b border-white/20 p-2 outline-none focus:border-yellow-500 text-sm text-white" placeholder="Full Name" />
                <input type="email" className="w-full bg-transparent border-b border-white/20 p-2 outline-none focus:border-yellow-500 text-sm text-white" placeholder="Email" />
                <textarea rows={3} className="w-full bg-transparent border-b border-white/20 p-2 outline-none focus:border-yellow-500 text-sm text-white resize-none" placeholder="Message"></textarea>
                <button type="button" className="w-full py-4 bg-yellow-500 text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-all">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} className="max-w-full max-h-full rounded-lg shadow-2xl" alt="Preview" />
          <button type="button" className="absolute top-10 right-10 text-white text-4xl font-light">×</button>
        </div>
      )}

      <footer className="relative z-30 bg-black py-8 border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] font-mono tracking-[0.3em]">© 2026 GICD NIGERIA</p>
      </footer>

    </main>
  );
}