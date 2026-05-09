"use client";

import React, { useState, useEffect } from 'react';
type PageID = 
  | 'landing'
  | 'story' | 'trustees' | 'team' 
  | 'protection' | 'education' 
  | 'updates' 
  | 'reports' | 'technical' 
  | 'partnership' | 'donation' | 'procurement' | 'jobs'
  | 'evidence' | 'capacity'; // Kept these to clear any old errors

const navItems = [
  { title: "Who we are", dropdown: [
      { name: "Our Story", id: "story" },
      { name: "Board of Trustee", id: "trustees" },
      { name: "Working Team", id: "team" }
  ]},
  { title: "What we do", dropdown: [
      { name: "Child Protection", id: "protection" },
      { name: "Education", id: "education" }
  ]},
  { title: "Programme updates", id: "updates" },
  { title: "Resources", dropdown: [
      { name: "Reports & Assessments", id: "reports" },
      { name: "Technical resources", id: "technical" }
  ]},
  { title: "Work with us", dropdown: [
      { name: "Partnership", id: "partnership" },
      { name: "Donation", id: "donation" },
      { name: "Procurement", id: "procurement" },
      { name: "Jobs", id: "jobs" }
  ]}
];

const UpdatesSection = () => (
  <section id="updates" className="py-20 md:py-28 px-4 md:px-10 bg-white border-b border-gray-100">      
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">Programme <span className="text-yellow-600">Updates</span></h2>
        <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full" />
      </div>

      <div className="space-y-24">
    
        {/* NEW DONOR IMPACT: ORPHANAGE VISIT & SCHOLARSHIPS */}
        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 border-2 border-dashed border-gray-300 hover:border-yellow-500 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3">
                <img src="/orph 1.jpg" alt="Children receiving support" className="w-full h-40 object-cover rounded-2xl shadow-md" />
                <img src="/orph 4.jpg" alt="Delivered food and school items" className="w-full h-40 object-cover rounded-2xl shadow-md" />
                <img src="/orph 5.jpg" alt="Group photo at orphanage" className="w-full h-64 object-cover col-span-2 rounded-2xl shadow-md" />
              </div>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-yellow-500 text-[10px] font-black px-4 py-1 bg-yellow-100 rounded-full uppercase tracking-widest mb-6 inline-block">
                Donor Spotlight • 11 December 2025
              </span>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none">
                Courtesty of a Donor: <br />
                <span className="text-yellow-500 text-2xl">Dignity, Nutrition & Education</span>
              </h3>
              <p className="text-sm text-black leading-relaxed mb-6 italic">
                Aunty, we are speechless… we won&apos;t fail you
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                On a donor&apos;s goodwill, we visited orphanages in Jos East and Jos North. Beyond delivering essential food items to ensure &quot;warm stomachs&quot; we removed financial barriers for 16 students by covering their WAEC and JAMB registrations, placing them on a vantage position for higher learning.
              </p>
              
              <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
                <div>
                  <p className="text-[10px] font-black uppercase text-yellow-500">Scholarships</p>
                  <p className="text-xl font-black">16 Students</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-yellow-500">Locations</p>
                  <p className="text-xl font-black">Jos East/North</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-yellow-500">Focus</p>
                  <p className="text-xl font-black">Dignity of Life</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEW OUTREACH: TIK TAK YEAR-END COUNTDOWN */}
        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 border-2 border-black">
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
        <div className="bg-white text-black rounded-[3rem] p-8 md:p-16 border-2 border-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-yellow-500 text-[10px] font-black px-4 py-1 border-2 border-yellow-500 rounded-full uppercase tracking-widest mb-6 inline-block">
                9 December 2026
              </span>
              <h3 className="text-4xl font-black text-black uppercase tracking-tighter mb-6 leading-none">
                Impact Moments: <br />
                <span className="text-yellow-500 text-2xl italic">Empowering GSS Fobur</span>
              </h3>
              <p className="text-sm text-black leading-relaxed mb-6">
                On the invitation of the First Lady (Jos East LGA), we reached over 150 adolescent girls. We dismantled myths surrounding SGBV and reproductive health, equipping them with the knowledge to protect their rights and personal safety in rural settings.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['#SGBVPrevention', '#RuralImpact', '#GirlsEmpowerment'].map((tag) => (
                  <span key={tag} className="text-[10px] font-bold bg-black/10 px-3 py-1 rounded-md">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-2 border-gray-50">
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
  </section>
);

const ChildProtectionSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 animate-in fade-in">
      
      {/* Section Header */}
      <div className="mb-12 border-l-8 border-red-600 pl-8">
        <h2 className="text-5xl font-black uppercase tracking-tighter">
          Child <br /> 
          <span className="text-red-600">Protection</span>
        </h2>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mt-2 italic">
          Strengthening Safeguarding Systems
        </p>
      </div>

      {/* Your Provided Section */}
      <div className="bg-white rounded-[3rem] p-8 md:p-16 border-2 border-yellow-500 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <img 
              src="/part c 1.jpg" 
              alt="Insecurity Affects Education Advocacy" 
              className="w-full rounded-2xl shadow-lg border-2 border-gray-100" 
            />
          </div>
          <div className="lg:col-span-8">
            <span className="bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">
              Urgent Action
            </span>
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none">
              Safe Schools Now: <br />
              <span className="text-gray-400 text-2xl">A Call to Government</span>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              With 47 Unity schools closed nationwide, insecurity is denying many Nigerian children their right to safe, quality education. 
              GICD is advocating for the implementation of the Safe Schools Declaration to protect our future.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="text-[10px] font-black text-gray-400">#SafeSchoolsNow</span>
              <span className="text-[10px] font-black text-gray-400">#RightToEducation</span>
              <span className="text-[10px] font-black text-gray-400">#GICDAdvocacy</span>
            </div>
          </div>
        </div>
      </div>

          <div className="max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left: Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative border-4 border-black p-2 bg-white shadow-lg">
            <img src="/part a 2.jpg" alt="Ministry Meeting" className="w-full h-[400px]" />
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
  );
};

const WorkingTeamSection = () => {
  return (
    <section className="px-6 bg-white py-24 border-t-8 border-black animate-in fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-black uppercase mb-12 italic">
          Working <span className="text-yellow-500">Team</span>
        </h2>
        
        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border-4 hover:-rotate-1 transition-transform overflow-hidden bg-gray-100">
            <img src="/hon 2.jpg" className="w-full h-80 object-cover" alt="Training" />
          </div>
          <div className="border-4 border-black hover:rotate-1 transition-transform overflow-hidden bg-gray-100">
            <img src="/hon 7.jpg" className="w-full h-80 object-cover" alt="Training" />
          </div>
          <div className="border-4 border-black md:col-span-2 lg:col-span-1 overflow-hidden bg-gray-100">
            <img src="/hon 5.jpg" className="w-full h-80 object-cover" alt="Group Photo" />
          </div>
        </div>

        {/* Core Focus Card */}
        <div className="mt-12 p-8 border-l-8 border-black bg-gray-50">
          <p className="text-sm uppercase font-black tracking-widest text-gray-500 mb-4">Core Focus</p>
          <h3 className="text-2xl font-black uppercase">Governance & Accountability</h3>
          <p className="mt-4 text-gray-700 italic">
            &ldquo;This opportunity aligns strongly with our aspirations to strengthen leadership systems for greater community impact.&rdquo;
          </p>
        </div>
      </div>

      {/* YOUTH RESILIENCE MENTORS CARD */}
      <div className="max-w-7xl mx-auto mt-24">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border-2 border-black">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-6">
              <span className="text-black text-[10px] font-black px-4 py-1 border-2 border-black rounded-full uppercase tracking-widest mb-6 inline-block">
                18 December 2025
              </span>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none">
                Building Resilience: <br />
                <span className="text-yellow-500 text-2xl italic">Community Mentors</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                We successfully onboarded and trained Community Mentors for adolescents using the Save the Children Youth Resilience Program. 
                Moving beyond direct outreach, we are establishing structured safety nets and psychosocial support in the Angwan Rukuba community.
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
            
            {/* Right Column: Image Mosaic */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              <img src="/onboard 1.jpg" alt="Training 1" className="w-full h-48 object-cover rounded-tl-[2rem] border-2 border-gray-100" />
              <img src="/onboard 2.jpg" alt="Training 2" className="w-full h-48 object-cover rounded-tr-[2rem] border-2 border-gray-100" />
              <img src="/onboard 3.jpg" alt="Training 3" className="w-full h-48 object-cover rounded-bl-[2rem] border-2 border-gray-100" />
              <img src="/onboard 4.jpg" alt="Training 4" className="w-full h-48 object-cover rounded-br-[2rem] border-2 border-gray-100" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const PartnershipSection = () => (
  <section className="px-6 bg-white py-24">
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gray-50 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-yellow-500  text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">
              Strategic Collaboration
            </span>
            <h3 className="text-4xl font-black uppercase mb-6 leading-tight tracking-tighter">
              Kavod Relief <span className="text-yellow-500">×</span> GICD
            </h3>
            <div className="prose prose-sm text-gray-600 font-medium leading-relaxed space-y-4">
              <p>We are proud to announce the signing of a Memorandum of Understanding (MoU) formalizing a strategic collaboration to expand access to protection and skills for adolescents in Plateau State.</p>
              <p>This partnership anchors <strong>&quot;Goals for Skills: Football Meets Tech,&quot;</strong> an integrated programme combining sport-based engagement with digital skills training and mentorship.</p>
              <p className="border-l-4 border-yellow-500 pl-4 italic">&quot;This MoU represents more than a partnership; it reflects strong governance and a joint commitment to measurable impact&quot;.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["#YouthDevelopment", "#ChildProtection", "#FootballMeetsTech"].map(tag => (
                <span key={tag} className="text-[10px] font-black uppercase text-gray-400">{tag}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-yellow-500 -z-10 rounded-2xl transform rotate-2"></div>
            <img src="/partners.jpg" alt="GICD and Kavod Relief MoU Signing" className="w-full h-auto rounded-xl border-4 border-black shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProcurementSection = () => (
  <section className="px-6 bg-white py-24 border-t-8 border-black">
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <span className="bg-yellow-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase mb-4 inline-block">Open: 9th – 20th Feb 2026</span>
            <h3 className="text-4xl font-black uppercase mb-6 leading-tight">Vendor <br/>Prequalification</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">The Guardian Initiative for Community Development (GICD) seeks reputable vendors for ICT, Hospitality, and General Supplies.</p>
            <div className="space-y-4 mb-8">
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-xs">01</div>
                <p className="text-xs font-black uppercase tracking-tight">ICT Supplies & Services</p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-xs">02</div>
                <p className="text-xs font-black uppercase tracking-tight">Food & Event Management</p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-xs">03</div>
                <p className="text-xs font-black uppercase tracking-tight">General Printing & Branding</p>
              </div>
            </div>
            <a href="mailto:gicdprocurements@gmail.com?subject=EOI – Vendor Prequalification" className="block text-center py-6 bg-black text-white font-black uppercase tracking-widest text-xl border-4 border-black hover:bg-yellow-500 hover:text-black transition-all">Submit EOI Email</a>
          </div>
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase text-gray-400 text-center">Reference Documents</p>
            <div className="grid grid-cols-2 gap-2">
              <img src="/vol 1.jpg" alt="EOI Doc 1" className="w-full h-32 object-cover border-2 border-black hover:scale-105 transition-transform" />
              <img src="/vol 2.jpg" alt="EOI Doc 2" className="w-full h-32 object-cover border-2 border-black hover:scale-105 transition-transform" />
              <img src="/vol 3.jpg" alt="EOI Doc 3" className="w-full h-32 object-cover border-2 border-black col-span-2 hover:scale-105 transition-transform" />
            </div>
            <p className="text-[9px] text-gray-400 italic text-center uppercase font-bold">Registration Period: Feb 9th - 20th 2026</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Wrapped the floating Donation section into a proper React component
const DonationSection = ({ 
  selectedAmount, 
  setSelectedAmount, 
  onClose, 
  handleRemitaRedirect 
}: { 
  selectedAmount: string, 
  setSelectedAmount: (val: string) => void, 
  onClose: () => void,
  handleRemitaRedirect: () => void
}) => (
  <section className="px-6 bg-white py-24 border-t-8 border-black">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row border-2 border-yellow-500">
      {/* Left Column */}
      <div className="lg:w-1/2 p-8 md:p-12 bg-yellow-500 text-black flex flex-col justify-between border-b-8 lg:border-b-0 lg:border-r-8 border-black">
        <div>
          <span className="bg-black text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">
            Support Our Mission
          </span>
          <h3 className="text-5xl font-black uppercase mb-6 leading-none tracking-tighter">
            Your Support <br /> Creates Change.
          </h3>
          <p className="font-medium text-lg mb-8 leading-relaxed">
            Every Naira you donate goes directly toward providing safe spaces, essential education, and vital psychosocial support for vulnerable children and adolescents in Plateau State.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-black text-white flex-shrink-0 flex items-center justify-center font-black rounded-full">✓</div>
              <div>
                <h4 className="font-black uppercase text-sm">Education & Skills</h4>
                <p className="text-sm font-medium opacity-90 mt-1">Funding WAEC/JAMB registrations and digital skills training.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-black text-white flex-shrink-0 flex items-center justify-center font-black rounded-full">✓</div>
              <div>
                <h4 className="font-black uppercase text-sm">Child Protection</h4>
                <p className="text-sm font-medium opacity-90 mt-1">Supporting our community mentors and SGBV prevention spaces.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-black text-white flex-shrink-0 flex items-center justify-center font-black rounded-full">✓</div>
              <div>
                <h4 className="font-black uppercase text-sm">Nutrition & Care</h4>
                <p className="text-sm font-medium opacity-90 mt-1">Providing basic welfare, food, and dignity for local orphanages.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t-4 border-black/20">
          <p className="text-xs font-black uppercase tracking-widest">
            GICD is a transparent, registered non-profit.
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: THE FORM (How to Donate) */}
      <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
        <button 
          onClick={onClose} 
          className="absolute top-8 right-8 font-black uppercase text-xs tracking-widest hover:text-yellow-500 transition-colors"
        >
          ✕ Close
        </button>

        <h3 className="text-3xl font-black uppercase mb-2 mt-4 lg:mt-0">Select Amount</h3>
        <p className="text-sm text-gray-500 mb-8 font-medium">All donations are securely processed via Remita (NGN).</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {['5000', '10000', '25000', '50000'].map((amt) => (
            <button 
              key={amt}
              onClick={() => setSelectedAmount(amt)}
              className={`py-4 border-4 border-black font-black text-2xl transition-all ${
                selectedAmount === amt 
                ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(234,179,8,1)]' 
                : 'bg-white hover:bg-gray-50'
              }`}
            >
              ₦{parseInt(amt).toLocaleString()}
            </button>
          ))}
        </div>

        <div className="mb-8">
          <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
            Or enter custom amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-xl text-gray-400">₦</span>
            <input 
              type="number" 
              value={selectedAmount}
              onChange={(e) => setSelectedAmount(e.target.value)}
              className="w-full pl-10 p-4 border-4 border-black font-black text-xl focus:bg-yellow-50 outline-none transition-colors"
              placeholder="0.00"
            />
          </div>
        </div>

        <button 
          onClick={handleRemitaRedirect}
          className="w-full py-5 bg-yellow-500 text-black font-black uppercase tracking-widest text-xl border-4 border-black hover:bg-black hover:text-yellow-500 transition-all flex justify-center items-center gap-2"
        >
          Donate Securely 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        <p className="text-center text-xs text-gray-400 mt-4 font-bold flex justify-center items-center gap-1 uppercase tracking-wider">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          100% Secure Payment Guarantee
        </p>
      </div>
    </div>
  </section>
);



const ActivityCarousel = () => {
  const images = ["cover.jpg", "match 18.jpg", "hon 5.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden border-b-8 border-black">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={src} alt="Activity" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-yellow-500" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ReportsAssessmentsSection = () => {
  const stats = [
    { val: "88%", label: "Education Aspiration", img: "/1.jpg" },
    { val: "65.6%", label: "Violence Exp.", img: "/2.jpg" },
    { val: "0.0%", label: "Health Access", img: "/3.jpg" },
    { val: "1 in 5", label: "Child Marriage Risk", img: "/4.jpg" },
    { val: "96.9%", label: "Protection Risk", img: "/5.jpg" },
  ];

  // 1. State for swapping the small image
  const [selectedImg, setSelectedImg] = useState("/ss.jpg");
  
  // 2. State for the "Pop-Out" (the zoom)
  const [isZoomed, setIsZoomed] = useState(false);

  return (
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
                className={`w-full text-left p-4 shadow-sm border-l-4 transition-all flex flex-col justify-center group 
                  ${selectedImg === stat.img ? 'bg-yellow-50 border-yellow-500' : 'bg-white border-transparent hover:bg-gray-50'}`}
              >
                <h4 className={`text-2xl font-black ${selectedImg === stat.img ? 'text-yellow-600' : 'text-black'}`}>
                  {stat.val}
                </h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 relative min-h-[400px]">
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border border-gray-200 cursor-zoom-in group"
              // 📍 WHEN CLICKED, SET ZOOM TO TRUE
              onClick={() => setIsZoomed(true)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                <span className="bg-black text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-widest">
                  View Full Data Pop Out
                </span>
              </div>
              <img src={selectedImg} alt="Research Map" className="w-full h-full object-cover transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* 📍 THE POP-OUT BOX (Only shows when isZoomed is true) */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setIsZoomed(false)}
        >
          <button className="absolute top-10 right-10 text-white font-black uppercase tracking-widest border-2 border-white px-4 py-2 hover:bg-white hover:text-black transition-all">
            Close [X]
          </button>
          <div className="relative max-w-5xl w-full bg-white p-2 border-8 border-black shadow-[20px_20px_0px_0px_rgba(234,179,8,1)] animate-in zoom-in-95">
            <img src={selectedImg} alt="Full Data" className="w-full h-auto" />
          </div>
        </div>
      )}
    </section>
  );
};
const TrusteesSection = () => {
  // Your Data
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
    <section className="relative z-20 bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto"> 
        {/* Header */}
        <div className="mb-12 border-l-8 border-yellow-500 pl-8">
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            Board of <br /> 
            <span className="text-yellow-500">Trustees</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trustees.map((person, i) => (
            <div key={i} className="group relative bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
              
              {/* Image Container */}
              <div className="relative aspect-[3/2] overflow-hidden bg-gray-200">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 bg-white relative">
                <h4 className="text-lg font-black uppercase leading-tight tracking-tight group-hover:text-yellow-600 transition-colors">
                  {person.name}
                </h4>
                
                {/* The expanding line you created */}
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
  );
};
  
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [activeFlow, setActiveFlow] = useState('menu'); // options: 'menu','partners', 'donation', 'procurement'
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState('');
  const [currentPage, setCurrentPage] = useState<'landing' | 'story' | 'trustees' | 'team' | 'protection' | 'education' | 'updates' | 'reports' | 'technical' | 'partnership' | 'donation' | 'procurement' | 'jobs' | 'evidence' | 'capacity'>('landing');
  const REMITA_URL = "https://www.remita.net/pay-a-biller";
  const handleRemitaRedirect = () => {
    window.open(REMITA_URL, "_blank");
  };

const navigateTo = (page: 'landing' | 'story' | 'trustees' | 'team' | 'protection' | 'education' | 'updates' | 'reports' | 'technical' | 'partnership' | 'donation' | 'procurement' | 'jobs' | 'evidence' | 'capacity') => {
    setCurrentPage(page);
    setActiveFlow('menu');
    setMenuOpen(false);
    window.scrollTo(0, 0);
};

const getLinkStyle = (page: 'landing' | 'story' | 'trustees' | 'team' | 'protection' | 'education' | 'updates' | 'reports' | 'technical' | 'partnership' | 'donation' | 'procurement' | 'jobs' | 'evidence' | 'capacity') => `
    block w-full text-left px-8 py-4 font-black uppercase tracking-widest text-sm 
    border-b-2 border-black transition-colors
    ${currentPage === page ? 'bg-yellow-500 text-black' : 'bg-white text-black hover:bg-gray-100'}
`;
const [zoomedImage, setZoomedImage] = useState(null);

return (    
    <main className="w-full min-h-screen bg-white text-black font-sans selection:bg-yellow-100 overflow-x-hidden"> 

  <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black px-4 md:px-6 py-3">
  <div className="max-w-[1400px] mx-auto flex justify-between items-center">
    
    {/* LOGO AREA (Keeping your exact styling) */}
    <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigateTo('landing')}>
      <img src="/logo.jpg" alt="GICD Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm border border-gray-100" />
      <div className="border-l-2 border-yellow-500 pl-3 flex flex-col justify-center">
        <span className="font-black text-[10px] md:text-xs uppercase tracking-widest leading-tight text-black">
          The Guardian Initiative
        </span>
        <span className="font-bold text-[8px] md:text-[9px] text-gray-500 uppercase tracking-widest leading-tight">
          For Community Development
        </span>
      </div>
    </div>
    
    {/* MENU TOGGLE BUTTON */}
    <button 
      onClick={() => setMenuOpen(!menuOpen)} 
      className="font-black uppercase text-sm tracking-widest hover:text-yellow-600 transition-colors"
    >
      {menuOpen ? 'CLOSE' : 'MENU'}
    </button>
  </div>

  {/* FULL SCREEN / LARGE DROPDOWN MENU */}
  {menuOpen && (
  <div className="absolute right-0 mt-4 w-full md:w-[400px] bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] z-50 overflow-hidden">
    <nav className="flex flex-col">
      
      {/* WHO WE ARE */}
      <div className="border-b-2 border-black">
        <button 
          onClick={() => setExpandedSection(expandedSection === 'who' ? null : 'who')}
          className="w-full flex justify-between items-center px-6 py-4 font-black uppercase text-sm bg-gray-50 hover:bg-yellow-500 transition-colors"
        >
          Who we are <span>{expandedSection === 'who' ? '−' : '+'}</span>
        </button>
        {expandedSection === 'who' && (
          <div className="bg-white py-2 animate-in slide-in-from-top-2 duration-200">
            <button onClick={() => navigateTo('story')} className={getLinkStyle('story')}>Our Story</button>
            <button onClick={() => navigateTo('trustees')} className={getLinkStyle('trustees')}>Board of Trustees</button>
            <button onClick={() => navigateTo('team')} className={getLinkStyle('team')}>Working Team</button>
          </div>
        )}
      </div>

      {/* WHAT WE DO */}
      <div className="border-b-2 border-black">
        <button 
          onClick={() => setExpandedSection(expandedSection === 'what' ? null : 'what')}
          className="w-full flex justify-between items-center px-6 py-4 font-black uppercase text-sm bg-gray-50 hover:bg-yellow-500 transition-colors"
        >
          What we do <span>{expandedSection === 'what' ? '−' : '+'}</span>
        </button>
        {expandedSection === 'what' && (
          <div className="bg-white py-2 animate-in slide-in-from-top-2 duration-200">
            <button onClick={() => navigateTo('protection')} className={getLinkStyle('protection')}>Child Protection</button>
            <button onClick={() => navigateTo('education')} className={getLinkStyle('education')}>Education</button>
          </div>
        )}
      </div>

      {/* PROGRAMME UPDATES (Direct Link) */}
      <button 
        onClick={() => navigateTo('updates')} 
        className="w-full text-left px-6 py-4 font-black uppercase text-sm border-b-2 border-black hover:bg-yellow-500 transition-colors"
      >
        Programme Updates
      </button>

      {/* RESOURCES */}
      <div className="border-b-2 border-black">
        <button 
          onClick={() => setExpandedSection(expandedSection === 'res' ? null : 'res')}
          className="w-full flex justify-between items-center px-6 py-4 font-black uppercase text-sm bg-gray-50 hover:bg-yellow-500 transition-colors"
        >
          Resources <span>{expandedSection === 'res' ? '−' : '+'}</span>
        </button>
        {expandedSection === 'res' && (
          <div className="bg-white py-2 animate-in slide-in-from-top-2 duration-200">
            <button onClick={() => navigateTo('reports')} className={getLinkStyle('reports')}>Reports & Assessments</button>
            <button onClick={() => navigateTo('technical')} className={getLinkStyle('technical')}>Technical Resources</button>
          </div>
        )}
      </div>

      {/* WORK WITH US */}
      <div className="border-b-2 border-black">
        <button 
          onClick={() => setExpandedSection(expandedSection === 'work' ? null : 'work')}
          className="w-full flex justify-between items-center px-6 py-4 font-black uppercase text-sm bg-gray-50 hover:bg-yellow-500 transition-colors"
        >
          Work with us <span>{expandedSection === 'work' ? '−' : '+'}</span>
        </button>
        {expandedSection === 'work' && (
          <div className="bg-white py-2 animate-in slide-in-from-top-2 duration-200">
            <button onClick={() => navigateTo('partnership')} className={getLinkStyle('partnership')}>Partnership</button>
            <button onClick={() => navigateTo('donation')} className={getLinkStyle('donation')}>Donation</button>
            <button onClick={() => navigateTo('procurement')} className={getLinkStyle('procurement')}>Procurement</button>
            <button onClick={() => navigateTo('jobs')} className={getLinkStyle('jobs')}>Jobs</button>
          </div>
        )}
      </div>
    </nav>
  </div>
)}
</header>
  
      {/* --- CONDITIONAL ROUTING (Cleaned up the logic) --- */}
      
      {currentPage === "landing" && (
  <div className="animate-reveal">
    
    {/* 1. Hero & Carousel Section */}
         <section className="relative z-10 bg-yellow-100 text-black py-20 border-b-8 border-yellow-500 w-full overflow-hidden"> 
    {/* Header Content Container */}
            <div className="w-full flex flex-col md:flex-row items-center gap-12 px-6 md:px-16 mb-16">
              <div className="relative group">
                <div className="absolute -inset-1 bg-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <img src="/logo.jpg" alt="GICD Logo" className="relative w-32 md:w-48 rounded-3xl border border-white/10 shadow-2xl" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-6 uppercase">
                  The Guardian Initiative <br/> <span className="text-yellow-500">for</span> Community <br />
                  Development <span className="text-yellow-500">.</span>
                </h1>
                <p className="text-lg text-black max-w-2xl font-light border-l-4 border-yellow-500 pl-6 leading-relaxed">
                  Empowering vulnerable populations and strengthening community resilience through evidence-based research in Plateau State.
                </p>
              </div>
            </div>
          <ActivityCarousel />
    </section>

    {/* 2. About Us & Our Model (Side by Side on Desktop) */}
    <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl font-black uppercase border-b-4 border-yellow-500 inline-block mb-6 pb-2 text-center">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
          The Guardian Initiative for Community Development (GICD) is a child-focused Nigerian charity that responds to and addresses humanitarian and development challenges affecting children. We strengthen protection systems, advance education and youth development, and improve the resilience of households and communities to achieve sustainable outcomes across both humanitarian and development contexts.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 font-bold text-justify">
          We operate at the intersection of child protection, socio-economic empowerment, and the translation of global frameworks into meaningful grassroots outcomes.
        </p>
      </div>
      
      <div className="bg-gray-50 p-8 border-4 border-black">
        <h2 className="text-3xl font-black uppercase mb-6">Our Model: <br/><span className="text-yellow-600">Protection through Exposure</span></h2>
        <p className="text-base leading-relaxed text-gray-700 mb-4 text-justify">
          Our work is inspired by a persistent and widening gap; between learning and purpose, and between protection and the lived socio-economic realities of children, particularly in underserved communities. In these environments, curiosity, resilience, and talent often fade quietly, not from lack of potential, but from lack of intentional nurture and meaningful exposure. Young people follow the expected path through school, yet still arrive at adulthood unprepared; not because they failed, but because the system never fully revealed what was possible.
        </p>
        <p className="text-base leading-relaxed text-gray-700 font-bold italic text-justify">
          We exist to intervene early and deliberately; to safeguard children, equip adolescents, and expand the worldview of young people. We see guided exposure as a form of protection, one that broadens perspective, strengthens decision-making, and inspires dreams.
        </p>
      </div>
    </section>

    {/* 3. Mission Banner */}
    <section className="bg-yellow-500 py-16 px-6 border-y-4 border-black text-center">
      <h2 className="text-2xl font-black uppercase mb-4 tracking-widest text-black/70">Our Mission</h2>
      <p className="text-3xl md:text-4xl font-black max-w-4xl mx-auto leading-tight text-justify">
        To protect children’s rights, drive sustainable development, and build resilient communities through evidence-based approaches.
      </p>
    </section>

    {/* 4. What We Do (3-Column Grid) */}
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter">What We Do</h2>
        <div className="h-2 w-24 bg-black mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Child Protection */}
        <div className="border-2 border-black p-8 hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-black uppercase mb-4 border-b-2 border-yellow-500 pb-2 text-center">Child Protection</h3>
          <p className="text-gray-700 leading-relaxed text-sm text-justify">
            We strengthen child protection through community-based awareness and prevention initiatives, early identification and referral of vulnerable children, and targeted parenting support that promotes family stability. We also work to reinforce informal protection systems within communities, ensuring that children are surrounded by responsive, informed, and supportive structures that can safeguard their well-being.
          </p>
        </div>

        {/* Education */}
        <div className="border-2 border-black p-8 hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-black uppercase mb-4 border-b-2 border-yellow-500 pb-2 text-center">Education</h3>
          <p className="text-gray-700 leading-relaxed text-sm text-justify">
            We improve access to formal education by addressing barriers that prevent children from enrolling, attending, and staying in school, while promoting learning environments that support their growth, dignity, and long-term development. We also inspire learning through structured exposure that broadens learners’ worldview and gives them a clear sense of purpose to remain in school.
          </p>
        </div>

        {/* Youth Empowerment */}
        <div className="border-2 border-black p-8 hover:-translate-y-2 transition-transform duration-300 bg-white text-black">
          <h3 className="text-2xl font-black uppercase mb-4 border-b-2 border-yellow-500 pb-2 text-center">Youth Development</h3>
          <p className="text-black leading-relaxed text-sm text-justify">
            We equip young people with the tools they need to transition successfully into adulthood by expanding access to education, providing psychosocial support and life-skills development, and creating pathways for vocational training and meaningful economic participation. We deliberately pursue alternative learning pathways that empower and prepare young people for the future workforce and self-sustenance.
          </p>
        </div>

      </div>
    </section>

  </div>
)}
      {/* --- INTERNAL PAGES --- */}
  {currentPage === "updates" && <UpdatesSection/>}
  {currentPage === 'team' && <WorkingTeamSection/>}
  {currentPage === 'reports' && <ReportsAssessmentsSection/>}
  {currentPage === 'trustees' && <TrusteesSection />}
  {currentPage === "partnership" && <PartnershipSection />}
  {currentPage === 'protection' && <ChildProtectionSection />}
  {currentPage === 'jobs' && "Career Opportunities"}
  {currentPage === "donation" && <DonationSection selectedAmount={''} setSelectedAmount={function (val: string): void {
        throw new Error('Function not implemented.');
      } } onClose={function (): void {
        throw new Error('Function not implemented.');
      } } handleRemitaRedirect={function (): void {
        throw new Error('Function not implemented.');
      } } />}
  {currentPage === "procurement" && <ProcurementSection />}
  {/* This only appears if zoomedImage has a value */}
{zoomedImage && (
  <div 
    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
    onClick={() => setZoomedImage(null)} // Click anywhere to close
  >
    <div className="relative max-w-5xl w-full bg-white p-2 border-4 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
      <button className="absolute -top-12 right-0 text-white font-black text-xl uppercase tracking-widest">Close [X]</button>
      <img src={zoomedImage} alt="Zoomed View" className="w-full h-auto" />
    </div>
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