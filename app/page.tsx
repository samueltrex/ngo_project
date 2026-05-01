"use client";

import React, { useState } from "react";

const EvidenceSection = () => (
  <section className="px-6 bg-white py-24">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-6xl font-black uppercase mb-12 italic">
        Community <span className="text-yellow-500">Evidence</span>
      </h2>
      {/* Paste your specific Community Evidence content/images here */}
    </div>
  </section>
);

const UpdatesSection = () => (
  <section className="px-6 bg-gray-50 py-24">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-6xl font-black uppercase mb-12 italic">
        Field <span className="text-yellow-500">Updates</span>
      </h2>
      {/* Paste your specific Updates content/images here */}
    </div>
  </section>
);

const CapacitySection = () => (
  <section className="px-6 bg-white py-24 border-t-8 border-black">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-6xl font-black uppercase mb-12 italic">
        Capacity <span className="text-yellow-500">Building</span>
      </h2>
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
        <p className="text-sm uppercase font-black tracking-widest text-gray-500 mb-4">
          Core Focus
        </p>
        <h3 className="text-2xl font-black uppercase">Governance & Accountability</h3>
        <p className="mt-4 text-gray-700 italic">
          “This opportunity aligns strongly with our aspirations to strengthen leadership systems for greater community impact.”
        </p>
      </div>
    </div>
  </section>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<"landing" | "evidence" | "updates" | "capacity">("landing");
  const [showDonationFlow, setShowDonationFlow] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const REMITA_URL = "https://www.remita.net/pay-a-biller";

  const trustees = [
    { name: "Rev Fr Hilary Naankot Longs", role: "Catholic Priest / Leadership", img: "/a.jpg" },
    { name: "Ejilayomi Omokorede Damoeroem", role: "PHD Science Educator", img: "/b.jpg" },
    { name: "Abdulrazak Ishola", role: "Child Protection Specialist", img: "/c.jpg" },
    { name: "Iliya John Dayok", role: "Human Resources Professional", img: "/d.jpg" },
    { name: "Atihong Lois Yengoet", role: "Economist / Director General", img: "/e.jpg" },
    { name: "Dr. Terna Abege (PHD)", role: "Head of MHPSS", img: "/f.jpg" },
    { name: "Dorcas Bello (Sheffy)", role: "Multimedia Journalist", img: "/g.jpg" },
  ];

  const stats = [
    { val: "96.9%", label: "Protection Risk", img: "/5.jpg" },
    { val: "65.6%", label: "Violence Exp.", img: "/2.jpg" },
    { val: "1 in 5", label: "Child Marriage Risk", img: "/4.jpg" },
    { val: "88%", label: "Education Aspiration", img: "/1.jpg" },
    { val: "0.0%", label: "Health Access", img: "/3.jpg" },
  ];

  const navigateTo = (page: "landing" | "evidence" | "updates" | "capacity") => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const getLinkStyle = (page: "landing" | "evidence" | "updates" | "capacity") => `
    block w-full text-left px-8 py-4 font-black uppercase tracking-widest text-sm 
    border-b-2 border-black transition-colors
    ${currentPage === page ? "bg-yellow-500 text-black" : "bg-white text-black hover:bg-gray-100"}
  `;

  const handleRemitaRedirect = () => {
    window.open(REMITA_URL, "_blank");
  };

  return (
    <main className="w-full min-h-screen bg-white text-black font-sans selection:bg-yellow-100 overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigateTo("landing")}>
            <div className="border-l-4 border-black pl-4" />
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="font-black uppercase text-sm tracking-widest"
          >
            Menu
          </button>
        </div>

        {menuOpen && (
          <div className="absolute right-0 mt-4 w-72 bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] z-50">
            <nav className="flex flex-col">
              <button onClick={() => navigateTo("landing")} className={getLinkStyle("landing")}>
                Home
              </button>
              <button onClick={() => navigateTo("evidence")} className={getLinkStyle("evidence")}>
                Community Evidence
              </button>
              <button onClick={() => navigateTo("updates")} className={getLinkStyle("updates")}>
                Field Updates
              </button>
              <button onClick={() => navigateTo("capacity")} className={getLinkStyle("capacity")}>
                Capacity Building
              </button>
            </nav>
          </div>
        )}
      </header>

      {currentPage === "landing" ? (
        <>
          <section className="pt-32 pb-10 bg-white">
            <section className="relative z-10 bg-black text-white py-20 px-6 md:px-12 border-b-8 border-yellow-500">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
                  <img
                    src="/logo.jpg"
                    alt="GICD Logo"
                    className="relative w-32 md:w-48 rounded-3xl border border-white/10 shadow-2xl"
                  />
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
          </section>

          <section id="findings" className="bg-yellow-500 border-t-8 border-black">
            <section className="relative z-20 py-16 px-6 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-600 mb-2">
                    Research Analysis
                  </h2>
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
                        <span className="bg-black text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-widest">
                          View Map Data
                        </span>
                      </div>
                      <img src="/ss.jpg" alt="Research Map" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section className="relative z-20 bg-gray-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 border-l-8 border-yellow-500 pl-8">
                <h2 className="text-5xl font-black uppercase tracking-tighter">
                  Board of <br /> <span className="text-yellow-500">Trustees</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {trustees.map((person, i) => (
                  <div
                    key={i}
                    className="group relative bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200"
                  >
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
                      <h4 className="font-black uppercase text-2xl tracking-tighter group-hover:scale-110 transition-transform">
                        {item}
                      </h4>
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
                    {["5000", "10000", "25000", "50000"].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setSelectedAmount(amt)}
                        className={`py-6 border-4 border-black font-black text-2xl transition-all ${
                          selectedAmount === amt ? "bg-yellow-500" : "bg-white hover:bg-gray-50"
                        }`}
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

          <section id="resources" className="py-28 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black uppercase tracking-tighter italic">
                  Resource <span className="text-yellow-600">Hub</span>
                </h2>
                <p className="text-xs text-gray-400 font-bold uppercase mt-4 tracking-widest">
                  Public Access Documents
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-black transition-all cursor-pointer">
                  <p className="text-[9px] font-black text-yellow-600 uppercase mb-4 tracking-widest">
                    Field Data
                  </p>
                  <h4 className="text-lg font-black uppercase tracking-tight group-hover:text-white">
                    Reports & Assessments
                  </h4>
                </div>
                <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-black transition-all cursor-pointer">
                  <p className="text-[9px] font-black text-yellow-600 uppercase mb-4 tracking-widest">
                    Guidance
                  </p>
                  <h4 className="text-lg font-black uppercase tracking-tight group-hover:text-white">
                    Technical Resources
                  </h4>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-40 pb-20 px-6 bg-white min-h-screen">
            <div className="max-w-[1200px] mx-auto">
              <div className="mb-16">
                <span className="bg-black text-white px-4 py-1 font-black uppercase text-xs tracking-widest">
                  Nov 27, 2025
                </span>
                <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mt-4 leading-none">
                  Strengthening <br />
                  <span className="text-yellow-500 italic">Leadership.</span>
                </h2>
                <p className="mt-8 text-xl font-bold max-w-3xl leading-relaxed">
                  GICD participated in a two-phased capacity development programme led by the
                  <span className="underline decoration-yellow-500 decoration-4"> Nigeria Network of NGOs </span>
                  with support from the
                  <span className="underline decoration-yellow-500 decoration-4"> TY Danjuma Foundation</span>.
                </p>
              </div>
            </div>
          </section>
        </>
      ) : currentPage === "evidence" ? (
        <div className="pt-40">
          <EvidenceSection />
        </div>
      ) : currentPage === "updates" ? (
        <UpdatesSection />
      ) : (
        <CapacitySection />
      )}

      <footer className="bg-black py-16 px-6 border-t border-white/10 text-center">
        <div className="flex justify-center gap-12 mb-12">
          <a
            href="https://www.facebook.com/share/1BqVaP3TVA/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-white font-black uppercase tracking-[0.4em] hover:text-yellow-500 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/thegicd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-white font-black uppercase tracking-[0.4em] hover:text-yellow-500 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-gray-600 text-[10px] font-mono tracking-[0.6em] uppercase">
          © 2026 THE GUARDIANS INITIATIVE • GICD NIGERIA
        </p>
      </footer>
    </main>
  );
}