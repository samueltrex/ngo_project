"use client";

import React, { useState } from 'react';

const EvidenceSection = () => (
  <section className="px-6 bg-white py-24">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-6xl font-black uppercase mb-12 italic">Community <span className="text-yellow-500">Evidence</span></h2>
      
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">Programme <span className="text-yellow-600">Updates</span></h2>
        <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full" />
      </div>

      <div className="space-y-24">
        {/* PREVIOUS UPDATE: SAFE SCHOOLS ADVOCACY */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border-2 border-yellow-500 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <img src="/part c 1.jpg" alt="Insecurity Affects Education Advocacy" className="w-full rounded-2xl shadow-lg" />
            </div>
            <div className="lg:col-span-8">
              <span className="bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">Urgent Action</span>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none">Safe Schools Now: <br /><span className="text-gray-400 text-2xl">A Call to Government</span></h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                With 47 Unity schools closed nationwide, insecurity is denying many Nigerian children their right to safe, quality education.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-[10px] font-black text-gray-400">#SafeSchoolsNow</span>
                <span className="text-[10px] font-black text-gray-400">#RightToEducation</span>
              </div>
            </div>
          </div>
        </div>
        {/* NEW OUTREACH: TIK TAK YEAR-END COUNTDOWN */}
        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 border-2 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 grid grid-cols-2 gap-2">
              <img src="/tik 1.jpg" alt="Outreach group" className="w-full h-48 object-cover rounded-tl-[2rem]" />
              <img src="/tik 2.jpg" alt="Student engagement" className="w-full h-48 object-cover rounded-tr-lg" />
              <img src="/tik 7.jpg" alt="Distribution" className="w-full h-48 object-cover rounded-bl-lg" />
              <img src="/tik 4.jpg" alt="Classroom session" className="w-full h-48 object-cover rounded-br-[2rem]" />
            </div>
            <div className="lg:col-span-7">
              <span className="text-yellow-600 text-[10px] font-black px-4 py-1 border-2 border-yellow-600 rounded-full uppercase tracking-widest mb-6 inline-block">6 December 2025</span>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none">Tik... Tak... <br /><span className="text-gray-400 text-2xl">Countdown to Year-End</span></h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Engaged 167 girls and boys from United Faith Tabernacle School (Jarawan Kogi) and GSS Federe (Angware) on reproductive health and SGBV prevention. We are building a future where informed children are better protected.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t-2 border-gray-200 pt-6">
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400">Reach</p>
                  <p className="text-xl font-black">167 Students</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400">Location</p>
                  <p className="text-xl font-black">Angware, Plateau</p>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* NEW IMPACT MOMENT: GSS FOBUR */}
        <div className="bg-black text-white rounded-[3rem] p-8 md:p-16 border-2 border-black shadow-[15px_15px_0px_0px_rgba(234,179,8,1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-yellow-500 text-[10px] font-black px-4 py-1 border-2 border-yellow-500 rounded-full uppercase tracking-widest mb-6 inline-block">
                9 December 2026
              </span>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none">
                Impact Moments: <br />
                <span className="text-yellow-500 text-2xl italic">Empowering GSS Fobur</span>
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                On the invitation of the First Lady (Jos East LGA), we reached over 150 adolescent girls. We dismantled myths surrounding SGBV and reproductive health, equipping them with the knowledge to protect their rights and personal safety in rural settings.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['#SGBVPrevention', '#RuralImpact', '#GirlsEmpowerment'].map((tag) => (
                  <span key={tag} className="text-[10px] font-bold bg-white/10 px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                <div>
                  <p className="text-[10px] font-black uppercase text-yellow-500">Reach</p>
                  <p className="text-xl font-black">150+ Girls</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-yellow-500">Partner</p>
                  <p className="text-xl font-black">First Lady, Jos East</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-yellow-500/20 blur-xl rounded-full" />
              <div className="relative space-y-4">
                <img 
                  src="/gss 1.jpg" 
                  alt="High impact learning session at GSS Fobur" 
                  className="w-full h-64 object-cover rounded-[2rem] border-2 border-white/10 shadow-2xl" 
                />
                <div className="grid grid-cols-2 gap-4">
                  <img src="/gss 2.jpg" alt="Girls engaged in session" className="w-full h-32 object-cover rounded-2xl" />
                  <img src="/gss 3.jpg" alt="Facilitator presentation" className="w-full h-32 object-cover rounded-2xl" />
                </div>
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
);

const UpdatesSection = () => (
  <section className="px-6 bg-gray-50 py-24">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-6xl font-black uppercase mb-12 italic">Field <span className="text-yellow-500">Updates</span></h2>
      <section id="updates" className="py-20 md:py-28 px-4 md:px-10 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative border-4 border-black p-2 bg-white shadow-lg">
                <img src="/part a 2.jpg" alt="Ministry Meeting" className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-black font-black px-6 py-2 border-2 border-black text-xs uppercase tracking-widest shadow-md">
                Protocol Approved
              </div>
            </div>

            {/* Right: Content */}
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
    </div>
  </section>
);

const CapacitySection = () => (
  <section className="px-6 bg-white py-24 border-t-8 border-black">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-6xl font-black uppercase mb-12 italic">Capacity <span className="text-yellow-500">Building</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border-4 border-black hover:-rotate-1 transition-transform">
          <img src="/hon 2.jpg" className="w-full h-80 object-cover" alt="Training" />
        </div>
        <div className="border-4 border-black hover:rotate-1 transition-transform">
          <img src="/hon 7.jpg" className="w-full h-80 object-cover" alt="Training" />
        </div>
        <div className="border-4 border-black md:col-span-2 lg:col-span-1">
          <img src="/hon 5.jpg" className="w-full h-80 object-cover" alt="Group Photo" />
        </div>
      </div>
      <div className="mt-12 p-8 border-l-8 border-black bg-gray-50">
        <p className="text-sm uppercase font-black tracking-widest text-gray-500 mb-4">Core Focus</p>
        <h3 className="text-2xl font-black uppercase">Governance & Accountability</h3>
        <p className="mt-4 text-gray-700 italic">&ldquo;This opportunity aligns strongly with our aspirations to strengthen leadership systems for greater community impact.&rdquo;</p>
      </div>
    </div>

    {/* NEW UPDATE: YOUTH RESILIENCE MENTORS */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border-2 border-black shadow-[15px_15px_0px_0px_rgba(234,179,8,1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-black text-[10px] font-black px-4 py-1 border-2 border-black rounded-full uppercase tracking-widest mb-6 inline-block">
                18 December 2025
              </span>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none">
                Building Resilience: <br />
                <span className="text-yellow-500 text-2xl italic">Community Mentors</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                We successfully onboarded and trained Community Mentors for adolescents using the Save the Children Youth Resilience Program. Moving beyond direct outreach, we are establishing structured safety nets and psychosocial support in the Angwan Rukuba community, reinforced by continuous parent and caregiver engagements.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['#YouthResilience', '#ChildProtection', '#PositiveParenting'].map((tag) => (
                  <span key={tag} className="text-[10px] font-bold bg-gray-100 px-3 py-1 rounded-md text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 border-t-2 border-gray-100 pt-6">
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400">Framework</p>
                  <p className="text-xl font-black">Save the Children</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400">Location</p>
                  <p className="text-xl font-black">Angwan Rukuba</p>
                </div>
              </div>
            </div>
                      
            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              <img 
                src="/onboard 1.jpg" 
                alt="Facilitator leading the mentor training" 
                className="w-full h-48 object-cover rounded-tl-[2rem] border-2 border-gray-100" 
              />
              <img 
                src="/onboard 2.jpg" 
                alt="Mentors collaborating on community maps" 
                className="w-full h-48 object-cover rounded-tr-[2rem] border-2 border-gray-100" 
              />
              <img 
                src="/onboard 3.jpg" 
                alt="Small group discussion" 
                className="w-full h-48 object-cover rounded-bl-[2rem] border-2 border-gray-100" 
              />
              <img 
                src="/onboard 4.jpg" 
                alt="Presentation on psychosocial support" 
                className="w-full h-48 object-cover rounded-br-[2rem] border-2 border-gray-100" 
              />
            </div>
          </div>
        </div>
</section>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [showDonationFlow, setShowDonationFlow] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<'landing' | 'evidence' | 'updates' | 'capacity'>('landing'); 
  const REMITA_URL = "https://www.remita.net/pay-a-biller";

  const handleRemitaRedirect = () => {
    window.open(REMITA_URL, "_blank");
  };

  const trustees = [
    { name: "Rev Fr Hilary Naankot Longs", role: "Catholic Priest / Leadership", img: "/a.jpg" },
    { name: "Ejilayomi Omokorede Damoeroem", role: "PHD Science Educator", img: "/b.jpg"},
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

  const navigateTo = (page: 'landing' | 'evidence' | 'updates' | 'capacity') => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const getLinkStyle = (page: 'landing' | 'evidence' | 'updates' | 'capacity') => `
    block w-full text-left px-8 py-4 font-black uppercase tracking-widest text-sm 
    border-b-2 border-black transition-colors
    ${currentPage === page ? 'bg-yellow-500 text-black' : 'bg-white text-black hover:bg-gray-100'}
  `;

  return (    
    <main className="w-full min-h-screen bg-white text-black font-sans selection:bg-yellow-100 overflow-x-hidden"> 
      
      {/* HEADER */}
     <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black px-4 md:px-6 py-3">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          
          {/* UPDATED LOGO & FULL NAME AREA */}
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigateTo('landing')}>
            <img src="/logo.jpg" alt="GICD Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm border border-gray-100" />
            <div className="border-l-2 border-yellow-500 pl-3 flex flex-col justify-center">
              <span className="font-black text-[10px] md:text-xs uppercase tracking-widest leading-tight text-black">
                The Guardians Initiative
              </span>
              <span className="font-bold text-[8px] md:text-[9px] text-gray-500 uppercase tracking-widest leading-tight">
                For Community Development
              </span>
            </div>
          </div>
          
          {/* Added a toggle button so the menu can actually be opened! */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="font-black uppercase text-sm tracking-widest hover:text-yellow-600 transition-colors"
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        {/* Menu Dropdown */}
        {menuOpen && (
          <div className="absolute right-0 mt-4 w-72 bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] z-50">
            <nav className="flex flex-col">
              <button onClick={() => navigateTo('landing')} className={getLinkStyle('landing')}>Home</button>
              <button onClick={() => navigateTo('evidence')} className={getLinkStyle('evidence')}>Community Evidence</button>
              <button onClick={() => navigateTo('updates')} className={getLinkStyle('updates')}>Field Updates</button>
              <button onClick={() => navigateTo('capacity')} className={getLinkStyle('capacity')}>Capacity Building</button>
            </nav>
          </div>
        )}
      </header>
  
      {/* --- CONDITIONAL ROUTING (Cleaned up the logic) --- */}
      
      {currentPage === "landing" && (
        <>
          {/* 1. HERO SECTION */}
          <section className="relative z-10 bg-black text-white py-20 px-6 md:px-12 border-b-8 border-yellow-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-10">
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

          {/* 3. TRUSTEES */}
          <section className="relative z-20 bg-gray-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 border-l-8 border-yellow-500 pl-8">
                <h2 className="text-5xl font-black uppercase tracking-tighter">Board of <br/> <span className="text-yellow-500">Trustees</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {trustees.map((person, i) => (
                  <div key={i} className="group relative bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
                    <div className="relative aspect-[3/2] overflow-hidden bg-gray-200">
                      <img
                        src={person.img}
                        alt={person.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-6 bg-white relative">
                      <h4 className="text-lg font-black uppercase leading-tight tracking-tight group-hover:text-yellow-600 transition-colors">
                        {person.name}
                      </h4>
                      <div className="w-12 h-1 bg-yellow-500 my-3 group-hover:w-24 transition-all duration-500" />
                      <p className="text-[11px] text-gray-500 font-bold uppercase tracking-[0.2em]">
                        {person.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. RESOURCE HUB */}
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

          {/* 5. WORK WITH US / DONATION */}
          <section id="work" className="py-28 px-6 bg-gray-50 text-black">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-7xl font-black uppercase mb-20 tracking-tighter italic text-center leading-none">
                {showDonationFlow ? "Support" : "Work With"} <br />
                <span className="text-yellow-500 underline decoration-[10px] underline-offset-8">
                  {showDonationFlow ? "GICD." : "Us."}
                </span>
              </h2>

              {!showDonationFlow ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {["Partnership", "Donation", "Volunteer", "Jobs"].map((item) => (
                    <button 
                      key={item} 
                      onClick={() => item === "Donation" && setShowDonationFlow(true)}
                      className="aspect-square border border-black/10 rounded-[3rem] flex flex-col items-center justify-center hover:bg-yellow-500 hover:text-black transition-all group bg-white shadow-sm"
                    >
                      <h4 className="font-black uppercase text-2xl tracking-tighter group-hover:scale-110 transition-transform">{item}</h4>
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-6 group-hover:bg-black" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="max-w-2xl mx-auto bg-white border-8 border-black p-10 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                  <button 
                    onClick={() => setShowDonationFlow(false)} 
                    className="mb-8 font-black uppercase text-xs tracking-widest hover:text-yellow-500"
                  >
                    ← Back to options
                  </button>
                  <h3 className="text-3xl font-black uppercase mb-8">Select Amount (NGN)</h3>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {['5000', '10000', '25000', '50000'].map((amt) => (
                      <button 
                        key={amt}
                        onClick={() => setSelectedAmount(amt)}
                        className={`py-6 border-4 border-black font-black text-2xl transition-all ${selectedAmount === amt ? 'bg-yellow-500' : 'bg-white hover:bg-gray-50'}`}
                      >
                        ₦{parseInt(amt).toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input 
                    type="number" 
                    value={selectedAmount}
                    onChange={(e) => setSelectedAmount(e.target.value)}
                    className="w-full p-4 border-4 border-black font-black text-2xl mb-8 focus:bg-yellow-50 outline-none"
                    placeholder="Custom Amount"
                  />
                  <button 
                    onClick={handleRemitaRedirect}
                    className="w-full py-6 bg-black text-white font-black uppercase tracking-widest text-xl border-4 border-black hover:bg-yellow-500 hover:text-black transition-all"
                  >
                    Pay with Remita
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Map Modal */}
          {selectedImg && (
            <div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
              onClick={() => setSelectedImg(null)}
            >
              <img
                src={selectedImg}
                alt="Enlarged view"
                className="max-w-4xl max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}
        </>
      )}

      {/* --- INTERNAL PAGES --- */}
      {currentPage === "evidence" && (
        <div className="pt-24">
          <EvidenceSection />
        </div>
      )}
      
      {currentPage === "updates" && (
        <div className="pt-24">
          <UpdatesSection />
        </div>
      )}
      
      {currentPage === "capacity" && (
        <div className="pt-24">
          <CapacitySection />
        </div>
      )}

      {/* FOOTER (Shows on all pages) */}
      <footer className="bg-black py-16 px-6 border-t border-white/10 text-center mt-auto">
        <div className="flex justify-center gap-12 mb-12">
          <a href="https://www.facebook.com/share/1BqVaP3TVA/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-white font-black uppercase tracking-[0.4em] hover:text-yellow-500 transition-colors">Facebook</a>
          <a href="https://www.linkedin.com/company/thegicd/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-white font-black uppercase tracking-[0.4em] hover:text-yellow-500 transition-colors">LinkedIn</a>
        </div>
        <p className="text-gray-600 text-[10px] font-mono tracking-[0.6em] uppercase">© 2026 THE GUARDIANS INITIATIVE • GICD NIGERIA</p>
      </footer> 
    </main>
  );
}