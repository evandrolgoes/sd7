
import React from 'react';
import { NAV_ITEMS, MODULES } from './constants';
import { Title, Subtitle, Label } from './components/Typography';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-[#2D5A27] selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-6 flex justify-between items-center glass-nav border-b border-white/5">
        <div className="text-2xl font-semibold tracking-tighter serif italic text-white">
          Traders<span className="not-italic font-light ml-1 opacity-40 text-sm">do Agro</span>
        </div>
        <div className="hidden md:flex space-x-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50 hover:text-[#4ade80] transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a 
          href="#inscricao" 
          className="text-[10px] uppercase tracking-[0.2em] font-bold bg-[#2D5A27] text-white px-8 py-3 hover:bg-[#3a6d33] transition-all duration-300 shadow-lg"
        >
          Candidatar-se
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594488311306-69678e7f1082?auto=format&fit=crop&q=80&w=2000" 
            alt="Fundo Agro" 
            className="w-full h-full object-cover opacity-20 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/10 via-brand-bg to-brand-bg"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 animate-reveal">
          <div className="max-w-4xl">
            <Label className="mb-6 block">A elite estratégica do agronegócio</Label>
            <h1 className="text-5xl md:text-8xl serif font-medium leading-[1.05] mb-8 text-white">
              Sua margem é <br />
              nossa <span className="italic text-[#4ade80]">estratégia</span>.
            </h1>
            <Subtitle className="max-w-2xl mb-12">
              Mentoria exclusiva para profissionais que buscam dominar o mercado físico, 
              o gerenciamento de risco e a estruturação de hedge.
            </Subtitle>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <a href="#inscricao" className="bg-[#2D5A27] text-white px-12 py-6 font-bold text-xs uppercase tracking-widest text-center transition-all hover:bg-[#3a6d33] shadow-2xl active:scale-95">
                Iniciar Candidatura
              </a>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-white/20"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Vagas Limitadas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Concept */}
      <section id="conceito" className="py-32 px-6 md:px-12 border-y border-white/5">
         <div className="container mx-auto flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 space-y-10 animate-reveal" style={{animationDelay: '0.2s'}}>
              <Label>O Conceito</Label>
              <Title>Não venda commodities. <br/>Venda estratégia.</Title>
              <p className="text-white/60 leading-relaxed text-xl font-light">
                O profissional que sobrevive ao mercado hoje é aquele que entende a dinâmica financeira por trás do campo. 
                Nós entregamos a formação técnica para você se tornar o braço direito do produtor.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-4">
                <div>
                  <h4 className="text-3xl font-light text-white mb-2 italic serif">Hedge</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Proteção Real</p>
                </div>
                <div>
                  <h4 className="text-3xl font-light text-white mb-2 italic serif">Network</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Grupo Secreto</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative animate-reveal" style={{animationDelay: '0.4s'}}>
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200" 
                alt="Agro Strategy" 
                className="rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-white/10"
              />
            </div>
         </div>
      </section>

      {/* Program Grid */}
      <section id="programa" className="py-32 bg-black/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <Label className="mb-4 block">Formação 360º</Label>
            <Title>O Caminho do Trader</Title>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {MODULES.map((module, index) => (
              <div 
                key={module.id} 
                className="p-10 bg-brand-bg hover:bg-[#2D5A27]/10 transition-all duration-500 group animate-reveal"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-[10px] font-bold text-[#4ade80] mb-8">
                  MÓDULO 0{module.id}
                </div>
                <h4 className="text-xl font-medium mb-5 text-white">{module.title}</h4>
                <p className="text-sm text-white/40 font-light leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section id="mentor" className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-reveal">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Mentor" 
                className="w-full grayscale brightness-75 rounded shadow-2xl border border-white/10"
              />
            </div>
            <div className="space-y-10 animate-reveal" style={{animationDelay: '0.3s'}}>
              <Label>Mentor Principal</Label>
              <Title>Evandro Góes</Title>
              <Subtitle className="text-white italic serif">
                "O mercado não espera. A técnica te protege."
              </Subtitle>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Com anos de experiência em grandes tradings e mesas de operação, Evandro Góes traz a realidade do campo para dentro da estratégia financeira. Sua mentoria é 100% prática e focada em resultados.
              </p>
              <div className="pt-10 border-t border-white/10 flex gap-12">
                <div>
                  <span className="block text-2xl font-bold text-[#4ade80]">+10 anos</span>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Experiência</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#4ade80]">+1k Alunos</span>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Formados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="inscricao" className="py-40 bg-white text-brand-bg text-center relative">
        <div className="container mx-auto px-6 relative z-10 animate-reveal">
          <Label className="mb-8 block text-[#2D5A27]">Candidatura Aberta</Label>
          <h2 className="text-4xl md:text-7xl serif font-medium mb-12 max-w-5xl mx-auto leading-tight">
            Pronto para se tornar <br/>um <span className="italic text-[#2D5A27]">estrategista</span>?
          </h2>
          <p className="max-w-xl mx-auto text-brand-bg/70 mb-16 text-lg font-light">
            Seja aceito em um grupo seleto de profissionais que estão mudando a forma como o Agro faz negócios.
          </p>
          <button className="bg-[#2D5A27] text-white px-20 py-7 font-bold text-xs uppercase tracking-[0.4em] hover:bg-[#3a6d33] transition-all shadow-xl hover:scale-105 active:scale-95">
            Quero me Candidatar
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="text-2xl serif italic text-white/30 mb-8">Traders do Agro</div>
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
          &copy; {new Date().getFullYear()} — Excelência em Mentoria Agro.
        </p>
      </footer>
    </div>
  );
};

export default App;
