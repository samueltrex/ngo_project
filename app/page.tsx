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
      {/* 3. PROGRAMME UPDATES - LATEST LAUNCH */}
      <section id="updates" className="py-24 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter">Programme <span className="text-yellow-600">Updates</span></h2>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-2">Latest activity from the field</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-gray-200 mx-8 mb-4"></div>
            <span className="text-[10px] font-black uppercase bg-black text-white px-4 py-2 rounded-full">April 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Featured Post: Laughs at Last! */}
            <div className="lg:col-span-8 group">
              <div className="relative aspect-video overflow-hidden rounded-[2.5rem] bg-gray-200 mb-8 shadow-2xl border border-gray-100">
                <img 
                  src="/part a 2.jpg" 
                  alt="GICD Team with Honorable Commissioner" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute top-6 left-6 bg-yellow-500 text-black font-black text-[10px] px-4 py-2 rounded-full uppercase">New Launch</div>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-yellow-600 transition-colors">Laughs at Last!</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 italic border-l-4 border-yellow-500 pl-6">
                &quot;The Commissioner&apos;s signing and approval of the Research Protocol signifies that the assessment will spotlight the critical knowledge gaps in the situation of children.&quot;
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                We are happy to complete a series of engagement with the Honorable Commissioner, Plateau State Ministry of Women Affairs and Social Development, as part of our preparatory activities for the launch of GICD&apos;s Child Protection Assessment in Jos North.
              </p>
              <div className="flex gap-3 text-[9px] font-black uppercase tracking-widest text-gray-400">
                <span>#ChildProtection</span>
                <span>•</span>
                <span>#CommunityDevelopment</span>
              </div>
            </div>

            {/* Sidebar: Research Protocol */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h4 className="text-xs font-black uppercase mb-6 tracking-widest">Research Protocol</h4>
                <div className="aspect-[3/4] bg-gray-50 rounded-xl mb-6 overflow-hidden border border-gray-100">
                  <img src="/part a 1.jpg" alt="Research Protocol Document" className="w-full h-full object-cover" />
                </div>
                <button className="w-full py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-yellow-500 hover:text-black transition-all">
                  View Protocol
                </button>
              </div>
            </div>
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