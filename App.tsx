
import React from 'react';
import { NAV_ITEMS, MODULES } from './constants';
import { Title, Subtitle, Label } from './components/Typography';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-forest selection:bg-slate-700 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-8 flex justify-between items-center bg-forest/80 backdrop-blur-md border-b border-white/5">
        <div className="text-xl font-semibold tracking-tighter serif italic">
          Traders<span className="not-italic font-light ml-1 opacity-60 text-sm">do Agro</span>
        </div>
        <div className="hidden md:flex space-x-12">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-[11px] uppercase tracking-[0.3em] font-medium text-slate-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a 
          href="#inscricao" 
          className="text-[11px] uppercase tracking-[0.2em] font-semibold border border-white/20 px-6 py-2.5 hover:bg-white hover:text-black transition-all"
        >
          Candidatar-se
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with precise overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594488311306-69678e7f1082?auto=format&fit=crop&q=80&w=2000" 
            alt="Agro Field and Finance" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 gradient-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <Label className="mb-6 block animate-pulse">A nova elite estratégica do agronegócio</Label>
            <h1 className="text-5xl md:text-7xl serif font-medium leading-[1.1] mb-8">
              Deixe de ser vendedor. <br />
              Seja o <span className="italic">estrategista</span> da margem.
            </h1>
            <Subtitle className="max-w-2xl mb-12">
              Mentoria Traders do Agro: A formação prática para quem deseja dominar a gestão de risco, 
              o mercado de derivativos e a proteção financeira do produtor rural.
            </Subtitle>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <a href="#inscricao" className="bg-white text-black px-10 py-5 font-semibold text-sm uppercase tracking-widest text-center transition-transform active:scale-95">
                Verificar Disponibilidade
              </a>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-slate-700"></div>
                <span className="text-xs uppercase tracking-widest text-slate-500">Acesso Restrito</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Image Divider - Landscape + Data */}
      <section className="py-24 px-6 md:px-12 bg-white/5 border-y border-white/5">
         <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <Label>O Conceito</Label>
              <Title>Não é curso de análise. É formação de profissão.</Title>
              <p className="text-slate-400 leading-relaxed text-lg font-light">
                O futuro do Agro não está apenas no campo, mas na inteligência financeira aplicada à terra. 
                O Trader do Agro é o profissional mais valorizado hoje: aquele que protege a margem, 
                estrutura o hedge e toma decisões ao lado do produtor.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">5% a 6%</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Melhora média anual na margem do produtor</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">14 Encontros</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Acompanhamento prático e ao vivo</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200" 
                alt="Agro Strategy" 
                className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
              />
              <div className="absolute -bottom-6 -right-6 bg-forest p-6 border border-white/10 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1611974717483-36367466886e?auto=format&fit=crop&q=80&w=400" 
                  alt="Market Charts" 
                  className="w-48 opacity-60 mb-4"
                />
                <p className="text-[10px] uppercase tracking-widest text-slate-500">Dados reais. Execução prática.</p>
              </div>
            </div>
         </div>
      </section>

      {/* Profile Section */}
      <section id="perfil" className="py-32 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Label className="mb-4 block">Filtro de Perfil</Label>
          <Title className="mb-6">Para quem busca o próximo nível de autoridade</Title>
        </div>

        <div className="grid md:grid-cols-2 gap-1 px-1 bg-white/5 border border-white/5">
          <div className="p-12 md:p-16 bg-forest">
            <h3 className="text-xl serif italic mb-8 border-b border-white/10 pb-4">Esta mentoria é para:</h3>
            <ul className="space-y-6">
              {[
                'Bancários e profissionais do mercado financeiro ligados ao Agro',
                'Agrônomos e consultores que buscam sair da lógica de revenda',
                'Produtores e sucessores que querem elevar a gestão do negócio',
                'Profissionais em transição que buscam liberdade e valor técnico'
              ].map(item => (
                <li key={item} className="flex items-start space-x-4 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 transition-colors group-hover:bg-white"></span>
                  <span className="text-slate-400 font-light group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-12 md:p-16 bg-forest">
            <h3 className="text-xl serif italic mb-8 border-b border-white/10 pb-4">O que não entregamos:</h3>
            <ul className="space-y-6">
              {[
                'Previsões de mercado ou "calls" de compra e venda',
                'Day trade ou qualquer forma de especulação vazia',
                'Venda de insumos, consórcios ou produtos financeiros',
                'Promessas de lucro rápido sem gestão de risco'
              ].map(item => (
                <li key={item} className="flex items-start space-x-4 opacity-50 group">
                  <span className="w-1.5 h-[1px] bg-red-900/50 mt-3"></span>
                  <span className="text-slate-500 font-light line-through">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section id="programa" className="py-32 bg-[#0d0f0e] border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <Label className="mb-4 block">A Jornada</Label>
              <Title>14 Encontros. Formação Completa.</Title>
            </div>
            <div className="text-slate-500 text-sm tracking-widest uppercase">
              Método: Execução & Decisão
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {MODULES.map((module) => (
              <div key={module.id} className="p-8 bg-forest hover:bg-slate-900/30 transition-colors group">
                <div className="text-xs font-mono text-slate-700 mb-6 group-hover:text-slate-400 transition-colors">
                  0{module.id} —
                </div>
                <h4 className="text-lg font-medium mb-4">{module.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section id="mentor" className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Evandro Góes" 
                className="w-full grayscale opacity-90 brightness-75 hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
            </div>
            <div className="space-y-8">
              <Label>A Autoridade</Label>
              <Title>Evandro Góes</Title>
              <Subtitle>
                Trader do Agro e Especialista em Estratégias de Hedge. Mais de uma década atuando entre bancos, tradings e a porteira do produtor.
              </Subtitle>
              <p className="text-slate-400 font-light leading-relaxed">
                Criador do método que já ajudou centenas de profissionais a se posicionarem como o braço direito financeiro do campo. 
                Evandro não ensina teoria acadêmica; ele ensina o que executa diariamente para melhorar a margem financeira de produtores em todo o país.
              </p>
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                <div>
                  <h5 className="text-white text-lg serif italic">Hedge Real</h5>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Foco no produto físico</p>
                </div>
                <div>
                  <h5 className="text-white text-lg serif italic">Experiência</h5>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Bancos e Tradings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="inscricao" className="py-32 bg-white text-black text-center relative overflow-hidden">
        {/* Subtle subtle chart pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 80 L20 70 L40 75 L60 50 L80 55 L100 20" stroke="black" fill="transparent" strokeWidth="0.1" />
           </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Label className="mb-6 block text-black/60">Acesso por Seleção</Label>
          <Title className="text-4xl md:text-6xl mb-10 max-w-4xl mx-auto leading-tight">
            Esteja à frente da maior transformação financeira do campo.
          </Title>
          <p className="max-w-xl mx-auto text-black/70 mb-12 font-light text-lg">
            O mercado de profissionais estratégicos no Agro é escasso. O conhecimento está concentrado em poucos. 
            Esta é a sua oportunidade de assumir o topo da cadeia.
          </p>
          <button className="bg-black text-white px-16 py-6 font-bold text-sm uppercase tracking-[0.3em] hover:bg-black/90 transition-all active:scale-95">
            Iniciar Candidatura
          </button>
          <div className="mt-8 text-[10px] uppercase tracking-widest text-black/40">
            Próxima turma com vagas limitadas.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-xs font-light tracking-widest uppercase">
        <div className="mb-4 serif italic text-slate-400 text-lg">Traders do Agro</div>
        &copy; {new Date().getFullYear()} — Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default App;
