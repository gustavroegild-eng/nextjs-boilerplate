'use client';

import React, { useState, useEffect } from 'react';

export default function KodeksPage() {
  const [currentLang, setCurrentLang] = useState('da');
  const [activePage, setActivePage] = useState('home');
  const [mounted, setMounted] = useState(false);

  // Fixer "Hydration" fejl ved at vente på at komponenten er klar
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const translations: any = {
    da: { 
      navMedie: "Medie", navAkademi: "Akademi", navOm: "Om os", navKontakt: "Kontakt",
      heroTitle: "Klarhed i et komplekst marked.",
      heroSub: "Kodeks.tech leverer præcis indsigt i tech-jura gennem uafhængig journalistik og kurser."
    },
    en: { 
      navMedie: "Media", navAkademi: "Academy", navOm: "About", navKontakt: "Contact",
      heroTitle: "Clarity in a complex market.",
      heroSub: "Kodeks.tech delivers precise insight into tech law through independent journalism and courses."
    }
  };

  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
          <button onClick={() => setActivePage('home')} className="text-xl font-bold tracking-tighter">
            KODEKS<span className="text-yellow-500">.</span>TECH
          </button>
          
          <div className="flex items-center space-x-6 md:space-x-10">
            <button onClick={() => setActivePage('articles')} className="text-xs font-semibold text-slate-500 hover:text-slate-900 uppercase tracking-wider">{t.navMedie}</button>
            <button onClick={() => setActivePage('courses')} className="text-xs font-semibold text-slate-500 hover:text-slate-900 uppercase tracking-wider">{t.navAkademi}</button>
            <button 
              onClick={() => setCurrentLang(currentLang === 'da' ? 'en' : 'da')}
              className="px-3 py-1 bg-slate-100 rounded text-xs font-bold"
            >
              {currentLang.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-40 px-6 max-w-5xl mx-auto">
        {activePage === 'home' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              {t.heroTitle.split(' ').map((word: string, i: number) => 
                word === 'komplekst' || word === 'complex' ? 
                <span key={i} className="text-yellow-500 italic"> {word} </span> : word + ' '
              )}
            </h1>
            <p className="text-xl text-slate-500 max-w-xl mb-10">{t.heroSub}</p>
            <div className="flex gap-4">
              <button onClick={() => setActivePage('courses')} className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all">
                Akademi →
              </button>
            </div>
          </div>
        )}

        {activePage === 'articles' && (
          <div className="py-10">
            <h2 className="text-4xl font-bold mb-10">Seneste Indsigt</h2>
            <div className="p-10 border border-slate-100 rounded-2xl bg-slate-50 text-slate-400">
              Artikler indlæses her...
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
