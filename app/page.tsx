"use client";

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
    <main className="min-h-screen bg-white text-black font-sans selection:bg-yellow-200">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-yellow-500 font-black text-xs">G</div>
            <span className="font-black uppercase tracking-tighter text-sm">GICD <span className="text-yellow-600">Nigeria</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest">
            <a href="#who" className="hover:text-yellow-600">Who We Are</a>
            <a href="#what" className="hover:text-yellow-600">What We Do</a>
            <a href="#updates" className="hover:text-yellow-600">Updates</a>
            <a href="#resources" className="hover:text-yellow-600">Resources</a>
            <a href="#work" className="bg-black text-white px-4 py-2 rounded-full">Work With Us</a>
          </div>
        </div>
      </nav>

      {/* 1. WHO WE ARE */}
      <section id="who" className="pt-32 pb-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-8 uppercase italic">
              Who We <br /> <span className="text-yellow-500">Are.</span>
            </h1>
            <div className="space-y-6 border-l-4 border-yellow-500 pl-8">
              <p className="text-xl font-light italic text-gray-300">
                &quot;Our story is one of resilience and community-led change.&quot;
              </p>
              <p className="text-sm leading-relaxed text-gray-400 max-w-md">
                The Guardians Initiative for Community Development (GICD) is a dedicated NGO focused on empowering populations through professional research and intervention.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {trustees.slice(0, 4).map((t, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                <img src={t.img} className="w-12 h-12 rounded-full mx-auto mb-3 object-cover grayscale" alt={t.name} />
                <p className="text-[10px] font-black uppercase">{t.name}</p>
                <p className="text-[8px] text-yellow-500 font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO */}
      <section id="what" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-16 italic">What <span className="text-yellow-500 underline decoration-8">We Do.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Child Protection</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Implementing community-based protection risk assessments and safeguarding measures for vulnerable youth.</p>
            </div>
            <div className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Education</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Enhancing science literacy through targeted chemistry performance assessments in secondary schools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMME UPDATES */}
      <section id="updates" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-center">Programme <span className="text-yellow-600">Updates</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
                <div className="aspect-video bg-gray-100 rounded-2xl mb-6" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-600 mb-2">Activity Log</p>
                <h4 className="font-black uppercase text-sm mb-4 italic">Latest Outreach Report</h4>
                <div className="w-8 h-1 bg-black mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESOURCES */}
      <section id="resources" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Resources</h2>
            <div className="h-2 w-20 bg-yellow-500 mx-auto mt-2" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl group hover:bg-black hover:text-white transition-all cursor-pointer">
              <span className="text-xs font-black uppercase tracking-widest">Reports & Assessments</span>
              <span className="text-[10px] font-bold border border-current px-4 py-1 rounded-full italic">Open</span>
            </div>
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl group hover:bg-black hover:text-white transition-all cursor-pointer">
              <span className="text-xs font-black uppercase tracking-widest">Technical Resources</span>
              <span className="text-[10px] font-bold border border-current px-4 py-1 rounded-full italic">Open</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WORK WITH US */}
      <section id="work" className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black uppercase mb-16 tracking-tighter italic text-center">Work With <span className="text-yellow-500">Us.</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Partnership", "Donation", "Volunteer", "Jobs"].map((item) => (
              <button key={item} className="aspect-square border border-white/10 rounded-[2rem] flex flex-col items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                <h4 className="font-black uppercase text-xl tracking-tighter">{item}</h4>
                <p className="text-[8px] font-bold uppercase tracking-widest mt-2 opacity-40">Contact</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 px-6 border-t border-white/5 text-center">
        <div className="flex justify-center gap-12 mb-8">
          <a href="https://www.facebook.com/share/1BqVaP3TVA/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-white font-black uppercase tracking-widest hover:text-yellow-500 transition-colors">Facebook</a>
          <a href="https://www.linkedin.com/company/thegicd/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-white font-black uppercase tracking-widest hover:text-yellow-500 transition-colors">LinkedIn</a>
        </div>
        <p className="text-gray-600 text-[10px] font-mono tracking-[0.5em]">© 2026 THE GUARDIANS INITIATIVE • GICD NIGERIA</p>
      </footer>

    </main>
  );
}