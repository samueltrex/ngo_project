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
    <main className="min-h-screen bg-white text-black font-sans selection:bg-yellow-100">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-yellow-500 font-black text-xs">G</div>
            <span className="font-black uppercase tracking-tighter text-sm">GICD <span className="text-yellow-600">Nigeria</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest">
            <a href="#who" className="hover:text-yellow-600 transition-colors">Who We Are</a>
            <a href="#what" className="hover:text-yellow-600 transition-colors">What We Do</a>
            <a href="#updates" className="hover:text-yellow-600 transition-colors">Updates</a>
            <a href="#resources" className="hover:text-yellow-600 transition-colors">Resources</a>
            <a href="#work" className="bg-black text-white px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-all">Work With Us</a>
          </div>
        </div>
      </nav>

      {/* 1. WHO WE ARE */}
      <section id="who" className="pt-32 pb-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.5em] mb-6">Section 01</h2>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-10 uppercase italic">
              Who We <br /> <span className="text-yellow-500">Are.</span>
            </h1>
            <div className="space-y-8 border-l-4 border-yellow-500 pl-10">
              <p className="text-2xl font-light italic text-gray-300 leading-tight">
                &quot;Protection for Every Child; Empowerment for Every Youth; Resilience for Every Community.&quot;
              </p>
              <p className="text-sm leading-relaxed text-gray-400 max-w-md">
                GICD is a community-driven organization committed to advancing locally grounded research and context-specific development initiatives in Plateau State.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {trustees.slice(0, 4).map((t, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-[2rem] border border-white/10 text-center hover:bg-white/10 transition-colors">
                <img src={t.img} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover grayscale" alt={t.name} />
                <p className="text-[11px] font-black uppercase leading-tight">{t.name}</p>
                <p className="text-[9px] text-yellow-500 font-bold uppercase tracking-widest mt-2">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO */}
      <section id="what" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <h2 className="text-6xl font-black uppercase tracking-tighter italic leading-none">What <br /><span className="text-yellow-500 underline decoration-[12px] underline-offset-8">We Do.</span></h2>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-2">Impact Areas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-16 bg-gray-50 rounded-[4rem] border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="text-5xl mb-8">🛡️</div>
              <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Child Protection</h3>
              <p className="text-base text-gray-500 leading-relaxed">Implementing community-based protection risk assessments and safeguarding measures to amplify the voices of children and families.</p>
            </div>
            <div className="p-16 bg-gray-50 rounded-[4rem] border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="text-5xl mb-8">🧪</div>
              <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Education</h3>
              <p className="text-base text-gray-500 leading-relaxed">Driving science literacy and chemistry performance through school-based research and targeted academic interventions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMME UPDATES */}
      <section id="updates" className="py-28 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">Programme <span className="text-yellow-600">Updates</span></h2>
            <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-24">
            {/* ARTICLE 1: TUDUN WADA */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img src="/part b 1.jpg" className="rounded-3xl shadow-lg grayscale hover:grayscale-0 transition-all duration-500" alt="Community Leaders" />
                    <img src="/part b 3.jpg" className="rounded-3xl shadow-lg grayscale hover:grayscale-0 transition-all duration-500" alt="Interaction" />
                  </div>
                  <div className="pt-12">
                    <img src="/part b 2.jpg" className="rounded-3xl shadow-lg grayscale hover:grayscale-0 transition-all duration-500" alt="Consultation" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.4em] mb-4 block">October 22, 2025</span>
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">Safe Futures <br /> in Tudun Wada</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  We sat with the Sarkin Tudun Wada and community leaders to incorporate their insights into the GICD Safe Futures Project.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 italic text-xs text-gray-500 mb-8">
                  &quot;The communities openness to ask and discuss tough questions assures of readiness to lead a change.&quot;
                </div>
                <div className="flex gap-4">
                  <span className="text-[9px] font-bold text-gray-400">#SafeFutures</span>
                  <span className="text-[9px] font-bold text-gray-400">#YouthEmpowerment</span>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* ARTICLE 2: MINISTRY ENGAGEMENT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 text-right">
                <span className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.4em] mb-4 block">Recent Achievement</span>
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">Laughs at Last: <br /> Ministry Approval</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  The Honorable Commissioner approved our Research Protocol, signifying a cornerstone for evidence-based child protection in the State.
                </p>
                <button className="px-8 py-3 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-yellow-500 transition-all">Read Full Report</button>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img src="/part a 2.jpg" alt="Ministry Engagement" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESOURCES */}
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

      {/* 5. WORK WITH US */}
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