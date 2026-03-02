'use client';

import React, { useState, useEffect } from 'react';

export default function KodeksPage() {
  const [currentLang, setCurrentLang] = useState('da');
  const [activePage, setActivePage] = useState('home');
  const [mounted, setMounted] = useState(false);

  // Sikrer at siden er loadet korrekt i browseren
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // --- DATA FRA DIN HTML ---
  const articles = [
    { 
        id: 1, 
        title: "AI-forordningen: Nye krav til gennemsigtighed", 
        category: "Regulering", 
        date: "12. Maj 2024", 
        excerpt: "Hvordan de nye regler påvirker europæiske tech-virksomheder i praksis." 
    },
    { 
        id: 2, 
        title: "Dataoverførsel til USA efter Privacy Framework", 
        category: "Data", 
        date: "10. Maj 2024", 
        excerpt: "En gennemgang af de nyeste retningslinjer for sikker overførsel." 
    },
    { 
        id: 3, 
        title: "Smart Contracts og den danske aftaleret", 
        category: "Tech-jura", 
        date: "05. Maj 2024", 
        excerpt: "Er koden stærk nok til at erstatte den juridiske underskrift?" 
    }
  ];

  const courses = [
    { id: 1, title: "IT-kontraktstyring", type: "Certificering", price: "12.500 kr." },
    { id: 2, title: "GDPR for Produktudviklere", type: "Workshop", price: "6.800 kr." },
    { id: 3, title: "Legal Tech Implementering", type: "Masterclass", price: "4.500 kr." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* --- HEADER / NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
          <button onClick={() => setActivePage('home')} className="group flex items-center">
            <span className="text-xl font-bold tracking-tight text-slate-900">
              KODEKS<span className="text-yellow-500">.</span>TECH
            </span>
          </button>
          
          <div className="hidden md:flex items-center space-x-10">
            <button onClick={() => setActivePage('articles')} className={`text-xs font-semibold transition-colors ${activePage === 'articles' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}>Medie</button>
            <button onClick={() => setActivePage('courses')} className={`text-xs font-semibold transition-colors ${activePage === 'courses' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}>Akademi</button>
            <button onClick={() => setActivePage('about')} className={`text-xs font-semibold transition-colors ${activePage === 'about' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}>Om os</button>
            <button onClick={() => setActivePage('contact')} className={`text-xs font-semibold transition-colors ${activePage === 'contact' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}>Kontakt</button>
            
            <button 
              onClick={() => setCurrentLang(currentLang === 'da' ? 'en' : 'da')}
              className="ml-2 px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-md text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors"
            >
              {currentLang === 'da' ? 'EN' : 'DK'}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* --- FORSIDE (HERO) --- */}
        {activePage === 'home' && (
          <section className="pt-48 pb-32 px-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.15] mb-8 tracking-tight">
              Klarhed i et <br />
              <span className="relative inline-block italic pr-2">
                komplekst
                <span className="absolute bottom-4 left-0 w-full h-3 bg-yellow-500/20 -z-10 rounded-sm"></span>
              </span> marked.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <p className="max-w-lg text-lg text-slate-600 leading-relaxed">
                Kodeks.tech leverer præcis indsigt i tech-jura gennem uafhængig journalistik og specialiserede kurser.
              </p>
              <div className="flex gap-4">
                <button onClick={() => setActivePage('courses')} className="px-8 py-3.5 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
                  Se Akademi →
                </button>
              </div>
            </div>
          </section>
        )}

        {/* --- ARTIKLER (MEDIE) --- */}
        {activePage === 'articles' && (
          <section className="max-w-5xl mx-auto px-6 py-40 animate-in fade-in duration-500">
            <header className="mb-20">
              <div className="text-yellow-600 text-sm font-semibold mb-4 flex items-center gap-3 uppercase tracking-widest">
                <div className="w-8 h-[2px] bg-yellow-500"></div> Nyheder & Analyser
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">Indsigt & Udsyn.</h1>
            </header>
            <div className="space-y-6">
              {articles.map(art => (
                <div key={art.id} className="group cursor-pointer grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-slate-100 hover:border-slate-300 hover:shadow-sm bg-white transition-all rounded-xl">
                  <div className="md:col-span-1">
                    <p className="text-xs text-slate-500 font-medium mb-3">{art.date}</p>
                    <span className="inline-flex px-2.5 py-1 bg-slate-100 text-[10px] font-semibold text-slate-600 uppercase rounded-md">{art.category}</span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">{art.title}</h3>
                    <p className="text-slate-600 text-sm">{art.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* --- AKADEMI (KURSER) --- */}
        {activePage === 'courses' && (
          <section className="max-w-5xl mx-auto px-6 py-40 animate-in fade-in duration-500">
            <header className="mb-20 text-center">
              <span className="inline-block px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold rounded-full mb-6 uppercase tracking-widest">Kodeks Akademi</span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Uddannelse til <br />den digitale elite.</h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map(c => (
                <div key={c.id} className="group bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-yellow-500 transition-all rounded-2xl shadow-sm hover:shadow-md">
                  <div>
                    <span className="inline-block px-2.5 py-1 bg-yellow-50 text-yellow-600 text-[10px] font-bold uppercase rounded-md mb-6">{c.type}</span>
                    <h3 className="text-xl font-bold mb-10 text-slate-900 leading-snug">{c.title}</h3>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-100 pt-6">
                    <span className="text-base font-bold text-slate-900">{c.price}</span>
                    <button className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-yellow-500 transition-colors">
                      →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-slate-200 py-16 px-6 bg-slate-50 mt-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-xl font-bold tracking-tight text-slate-900">KODEKS.TECH</span>
          <div className="text-xs font-semibold text-slate-400">© 2026 KODEKS.TECH</div>
        </div>
      </footer>
    </div>
  );
}
