
import { NavItem, ProgramModule } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'O Conceito', href: '#conceito' },
  { label: 'Para Quem', href: '#perfil' },
  { label: 'O Programa', href: '#programa' },
  { label: 'Mentor', href: '#mentor' },
];

export const MODULES: ProgramModule[] = [
  { id: 1, title: 'Onboarding & Mentalidade', description: 'Alinhamento de valores e visão do novo Trader do Agro.' },
  { id: 2, title: 'Formação do Preço I & II', description: 'Chicago, câmbio, basis e a realidade do físico no campo.' },
  { id: 3, title: 'Macroeconomia', description: 'Fatores globais que movem os preços das commodities.' },
  { id: 4, title: 'Hedge vs Especulação', description: 'Mercado futuro, long & short e proteção de margem.' },
  { id: 5, title: 'Derivativos Aplicados', description: 'Do nível 1 ao avançado: estruturação técnica de proteção.' },
  { id: 6, title: 'Política de Risco', description: 'Criação de comitês e tomada de decisão fundamentada em dados.' },
  { id: 7, title: 'Execução no SDT Position', description: 'Prática direta com a ferramenta de controle de margem.' },
  { id: 8, title: 'Carreira & Comercial', description: 'Posicionamento, quebra de objeções e construção de carteira.' },
];
