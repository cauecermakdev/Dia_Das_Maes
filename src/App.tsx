/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Heart, 
  MapPin, 
  Stethoscope, 
  Plane, 
  Home, 
  Baby, 
  ChevronDown, 
  Sparkles,
  Camera,
  Sun,
  ShieldCheck
} from "lucide-react";
import React, { useRef, type ReactNode } from "react";

// --- Components ---

const Navbar = ({ sections }: { sections: { id: string; label: string }[] }) => (
  <nav className="fixed top-5 left-5 right-5 z-[60] bg-white/90 backdrop-blur-md border border-editorial-ink/10 shadow-sm p-4 md:px-12 flex flex-col items-center">
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
      <h1 className="text-2xl font-serif italic text-editorial-ink">Feliz Dia das Mães</h1>
      
      <div className="flex flex-wrap justify-center gap-6 text-[10px] tracking-[0.2em] font-bold uppercase text-stone-500">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="hover:text-editorial-accent transition-colors">
            {s.label}
          </a>
        ))}
      </div>
    </div>
    <div className="w-full h-px bg-editorial-ink/10 my-3" />
    <p className="text-[11px] md:text-sm italic text-stone-400 text-center font-serif">
      "se estamos aqui agora, eu escrevendo e você lendo, é porque tudo deu certo"
    </p>
  </nav>
);

const Section = ({ 
  children, 
  className = "", 
  id 
}: { 
  children: ReactNode; 
  className?: string; 
  id?: string 
}) => (
  <section id={id} className={`min-h-screen flex flex-col items-center justify-center px-6 py-32 relative overflow-hidden ${className}`}>
    {children}
  </section>
);

const FloatingHeart = ({ delay = 0, x = "0%", y = "0%" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1.2, 0.5], y: ["0%", "-100%"] }}
    transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
    className="absolute text-rose-300 pointer-events-none"
    style={{ left: x, top: y }}
  >
    <Heart size={24} fill="currentColor" />
  </motion.div>
);

// --- Data ---

const PHOTO_URLS = [
  "foto1.jpeg",
  "foto2.jpeg",
  "foto3.jpeg",
  "foto4.jpeg",
  "foto5.jpeg",
  "foto6.jpeg",
  "foto7.jpeg",
  "foto8.jpeg",
  "foto9.jpeg",
  "foto10.jpeg",
  "foto11.jpeg",
  "foto12.jpeg",
];

const VICTORIES = [
  { icon: Sun, text: "O Murilo trazendo a luz no fim do túnel" },
  { icon: Plane, text: "Conseguimos um jato (que loucura!), viemos pro lugar certo (perfeito pra ela)" },
  { icon: Stethoscope, text: "As Dras Karina e Gabi, anjos na nossa vida" },
  { icon: ShieldCheck, text: "Dra Roseli, perfeita, que pegou pra ela essa luta como se fosse dela" },
  { icon: Baby, text: "A vitória da Lizoquinha viva mesmo que entubada" },
  { icon: Sparkles, text: "As tentativas de extubar, a segunda tentativa e a vitória" },
  { icon: ShieldCheck, text: "A Liz não precisaria fazer traqueostomia!" },
  { icon: Home, text: "A vitória da enfermaria, sem grandes riscos, e a tão esperada alta" },
  { icon: MapPin, text: "A conquista de ir pro flat, lembra como ficamos felizes e aliviados?" },
  { icon: MapPin, text: "Mesmo que pequeno, mesmo não sendo na praia, mas nós juntos novamente" },
  { icon: Home, text: "A casa maravilhosa que alugamos, perfeita em uma localização perfeita" },
  { icon: Home, text: "Os móveis que sempre quisemos" },
  { icon: Baby, text: "Os primeiros passos da pequena depois de tanto tempo deitada" },
  { icon: Sparkles, text: "Ela cambaleava mas tentava, ela começando a engordar" },
  { icon: Stethoscope, text: "A cirurgia da vesícula e a alta" },
  { icon: ShieldCheck, text: "Internada com pancreatite e o suporte da Dra Roseli quando as coisas pareciam piorar" },
  { icon: Home, text: "De volta pra casa juntos novamente" },
  { icon: Baby, text: "Ela começando a agachar sozinha" },
  { icon: Sparkles, text: "Os primeiros pulinhos, mesmo que 5 cm do chão!" },
];

const NAV_SECTIONS = [
  { id: "jornada", label: "A Jornada" },
  { id: "forca", label: "A Força" },
  { id: "passado", label: "O Passado" },
  { id: "vitorias", label: "Vitórias" },
  { id: "registros", label: "Fotos" },
  { id: "gratidao", label: "Gratidão" },
  { id: "evoluçao", label: "Evolução" },
  { id: "perfeito", label: "A Vida" },
  { id: "familia", label: "Família" },
  { id: "final", label: "Te Amo" },
];

// --- Main App ---

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="bg-editorial-bg text-editorial-ink font-sans selection:bg-rose-100 min-h-screen pt-24">
      {/* Decorative Editorial Border/Frame */}
      <div className="fixed inset-0 border-[20px] border-editorial-bg pointer-events-none z-50 mix-blend-multiply" />

      <Navbar sections={NAV_SECTIONS} />

      {/* Content Layer */}
      <div className="relative z-10 flex">
        {/* Persistent Rail on Desktop */}
        <div className="hidden md:flex w-20 border-r border-editorial-ink/10 flex-col justify-between py-12 items-center sticky top-0 h-screen shrink-0">
          <span className="uppercase tracking-[0.4em] text-[10px] font-bold rotate-180 [writing-mode:vertical-rl] text-stone-400">RESILIÊNCIA</span>
          <span className="uppercase tracking-[0.4em] text-[10px] font-bold rotate-180 [writing-mode:vertical-rl] text-stone-400">AMOR INCONDICIONAL</span>
        </div>

        <div className="flex-1">
          {/* Intro Section */}
          <Section id="jornada" className="bg-white border-b border-editorial-ink/10">
            <div className="max-w-3xl mx-auto space-y-12 text-lg md:text-xl leading-relaxed text-stone-800 text-justify">
              <header className="mb-12">
                <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-editorial-accent mb-4 italic text-center">A Jornada</h2>
                <div className="h-0.5 w-full bg-editorial-ink" />
              </header>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="first-letter:text-7xl first-letter:font-serif first-letter:mr-4 first-letter:float-left first-letter:mt-2 first-letter:text-editorial-ink"
              >
                Esses meses que passamos não foi fácil né meu amor?! Quanta emoção, quanta dor, quanto medo, quanta incerteza. Mas se hoje o dia chegou é porque deu tudo certo.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Muitas vezes falamos de conquistas materiais como se elas fossem a fonte da nossa felicidade e esquecemos de olhar pra aquilo que já temos ao nosso lado que vale imensamente mais do que qualquer “grande coisa mundana”.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-stone-50 p-8 border border-stone-100 italic text-stone-600"
              >
                Sei que não foi fácil pra você até aqui, segurou uma barra gigantesca. Lá atrás lembro de ter falado coisas fortes pra você que precisava melhorar e saiba, você melhorou Muitas delas. Hoje você não é mais uma adolescente perdida e sim uma mulher, mãe e esposa maravilhosa.
              </motion.div>
            </div>
          </Section>

          {/* Motherhood & Dedication Section */}
          <Section id="forca" className="bg-white border-b border-editorial-ink/10">
            <div className="max-w-3xl mx-auto space-y-12 text-lg md:text-xl leading-relaxed text-stone-800 text-justify">
              <header className="mb-12">
                <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-editorial-accent mb-4 italic text-center">A Dedicação</h2>
                <div className="h-0.5 w-full bg-editorial-ink/10" />
              </header>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Olhando hoje vejo uma mãe incrível, parceira, que nunca saiu do lado da Liz em momento algum. Muitas vezes precisando de descanso, o cansaço puxando, você ia pra casa, chorava horrores, dormia e voltava mais forte no hospital, como se nada tivesse acontecido.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Esse ano tiveram momentos que sei que você quis desabar, entrar num buraco e chorar até não ter mais água no corpo e lembro de em momentos como esse pedir pra você segurar a onda, que naquele momento a Liz precisava de você, você conseguia segurar esse tsunami dentro de você e se colocar ali do lado dela, parabéns por isso.
              </motion.p>
            </div>
          </Section>

          {/* The Hard Sights */}
          <Section id="passado" className="bg-[#1A1A1A] text-stone-300">
            <div className="max-w-4xl mx-auto relative z-10 space-y-16">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-serif text-white italic mb-8">Momentos que Eu Gostaria de Apagar</h2>
                <div className="h-px w-32 bg-rose-500 mx-auto" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 text-lg italic leading-relaxed">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <p>Viveu momentos que eu gostaria de apagar da sua cabeça ou que eu gostaria de ter vivido eles por você, nenhuma mãe deveria poder ver sua filha beirando a morte e pedindo ajuda.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <p>Nenhuma mãe deveria poder ver sua filha viva graças à máquinas que a deixem viva, entubada, dezenas de medicamentos pendurados, quase como se a natureza não quisesse mais ela viva.</p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center pt-20 border-t border-white/10"
              >
                <p className="text-2xl md:text-3xl font-serif text-white italic">
                  "Mas se estamos aqui agora, eu escrevendo e você lendo, no dia de hoje, é por que tudo deu certo."
                </p>
              </motion.div>
            </div>
          </Section>

          {/* Victories Timeline Section */}
          <Section id="vitorias" className="bg-editorial-bg border-b border-editorial-ink/10">
            <div className="max-w-5xl mx-auto w-full">
              <header className="mb-12">
                <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-editorial-accent mb-4">A VITÓRIA</h2>
                <p className="text-xl md:text-2xl text-stone-600 mb-12">
                  O que realmente espero é que você veja como foi forte até aqui, como foi absurdamente difícil mas estamos aqui, mais fortes do que nunca. Como somos felizes mesmo em meio ao caos e como é bom poder viver e relembrar cada pequena vitória:
                </p>
                <div className="h-px w-full bg-editorial-ink/20" />
              </header>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-editorial-ink/10">
                {VICTORIES.map((victory, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-8 border-r border-b border-editorial-ink/10 flex flex-col gap-4 hover:bg-white transition-colors group"
                  >
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 border border-editorial-ink/10 rounded-full group-hover:bg-editorial-bg transition-colors">
                      <victory.icon className="text-editorial-accent" size={16} />
                    </div>
                    <p className="text-[#4A4A4A] leading-relaxed text-sm">{victory.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* Photo Gallery Layer */}
          <Section id="registros" className="bg-[#F2EFE9]">
            <div className="max-w-6xl mx-auto w-full">
              <header className="mb-20 text-center">
                <h2 className="text-4xl font-serif italic text-editorial-ink">Nossos Registros</h2>
                <div className="h-0.5 w-24 bg-editorial-accent mx-auto mt-6" />
              </header>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {PHOTO_URLS.map((url, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    style={{ rotate: i % 2 === 0 ? "2deg" : "-3deg" }}
                    className="bg-white p-4 shadow-xl border border-stone-200"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                      <img 
                        src={url} 
                        alt="Momento especial"
                        className="w-full h-full object-cover grayscale sepia-[0.2] hover:grayscale-0 transition-all duration-1000"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* Storytelling & Gratitude Section */}
          <Section id="gratidao" className="bg-white border-b border-editorial-ink/10">
            <div className="max-w-3xl mx-auto space-y-12 text-lg md:text-xl leading-relaxed text-stone-800 text-justify">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Muitas vezes não deixei pensamentos ruins se alocarem na sua cabeça, sempre trazendo o outro lado, saiba que eu sei que foi difícil e eu sei que é difícil, mas no fim a nossa história quem conta principalmente para nós mesmos, somos nós, então por que vamos contar uma história que nos faça sofrer ? Se vamos ter que ouvir sempre, que seja uma história de vitórias, que fortaleçam a gente, que mostre como somos capazes de passar pelo pesado de forma leve.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="py-12 border-l-4 border-editorial-accent pl-12 my-12 italic text-2xl font-serif text-editorial-accent leading-relaxed"
              >
                "Te agradeço muito por continuar sendo leve, engraçada. Por entrar junto comigo, nessa bolha de não desespero e sim alegria."
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                A gente é muito forte e tenha certeza que assim como hoje olhamos pra trás e sabemos que fomos foda, vamos olhar na frente pra trás com a certeza de que a vida pode mandar o que vier, que juntos resolveremos. Se a gente tá resolvendo essa barra assim, o que a gente não conseguirá resolver juntos ?!
              </motion.p>
            </div>
          </Section>

          {/* Evolution & Fears */}
          <Section id="evoluçao" className="bg-[#FAF9F6]">
            <div className="max-w-3xl mx-auto space-y-12 text-lg md:text-xl leading-relaxed text-stone-800 text-justify">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Você é uma mãe incrível, uma mulher incrível, uma profissional incrível. Tem coisas a melhorar como todos nós humanos na terra rs Mas veja de onde saiu e onde está.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Se olhar pra trás antes de te conhecer estava perdida sem saber pra onde ir, mas agora você está conquistando tudo que uma pessoa, com sabedoria, gostaria de conquistar, está usando essa vida pra dar saltos, pra ter qualidades incríveis, pra ser a mulher incrível que você é. Parabéns!
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Sempre tive medo de ter filhos, família, mas ao seu lado esses medos, apesar de parecerem bastantes, acredite, eles ficam muito menores!
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-serif italic text-editorial-ink mt-8 text-center"
              >
                Que bom que a Liz tem você, que bom que eu tenho você.
              </motion.p>
            </div>
          </Section>

          {/* Perfect Life Definition */}
          <Section id="perfeito" className="bg-white border-b border-editorial-ink/10">
            <div className="max-w-3xl mx-auto space-y-12 text-lg md:text-xl leading-relaxed text-stone-800 text-justify">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                A vida perfeita que o mundo nos vende é de conquistas materiais, de formatos, de fotos tiradas em lugares que parecem incríveis, de roupas e bens materiais que poucos podem comprar. A vida perfeita é essa, imperfeita quando olhada de perto, com desafios do dia a dia, com cansaços, com vontades de fazer nada, mas quando a gente olha um pouquinho mais de cima a gente vê com ela é linda.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-stone-500 italic"
              >
                Não é atoa que as médicas sempre nos falam, "que presente poder ver uma família como a de vocês”. É isso que somos, forte, unidos, um pelo outro e é só isso que importa. Todo resto é só detalhe!
              </motion.p>
            </div>
          </Section>

          {/* New Family Section */}
          <Section id="familia" className="bg-[#FAF9F6]">
            <div className="max-w-5xl mx-auto w-full px-4">
              <header className="mb-12 text-center">
                <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-editorial-accent mb-4 italic">FAMÍLIA</h2>
                <h3 className="text-4xl md:text-6xl font-serif italic text-editorial-ink">Unidos Sempre</h3>
              </header>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-video md:aspect-[21/9] bg-white p-4 shadow-2xl border border-stone-200 overflow-hidden relative group"
              >
                <img 
                  src="familia.jpeg" 
                  alt="Nossa Família" 
                  className="w-full h-full object-cover transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white text-xl font-serif italic">"Juntos resolveremos qualquer coisa que a vida mande."</p>
                </div>
              </motion.div>
            </div>
          </Section>

          {/* Final Message */}
          <Section id="final" className="bg-editorial-ink text-editorial-bg min-h-screen">
            <div className="max-w-3xl mx-auto text-center border border-white/10 p-12 md:p-24 relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/30" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/30" />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Heart className="mx-auto text-editorial-accent mb-12 opacity-50" size={48} />
                <h2 className="text-4xl md:text-6xl font-serif mb-12 italic leading-tight">
                  Amo você, amo você como mãe, como esposa, como mulher!
                </h2>
                
                <div className="space-y-8 text-stone-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
                  <p>Parabéns por ser quem você é e eu tenho certeza que você só vai ser melhor a cada dia.</p>
                  <p>Estarei aqui sempre que precisar, o mundo não está só nas suas costas, juntos podemos compartilhar as dificuldades e caminhar juntos.</p>
                  <p className="text-white italic">
                    "Lembre-se sempre do grande presente que recebeu esse ano e do presente que se deu sendo forte, isso ninguém nunca vai tirar de você."
                  </p>
                </div>
                
                <div className="mt-24 pt-12 border-t border-white/10">
                  <p className="text-4xl font-serif text-editorial-accent italic mb-4">Te amo, conte comigo pra sempre!</p>
                  <p className="text-lg font-serif italic mb-8">Feliz dia das mães.</p>
                  <p className="text-[10px] tracking-[0.5em] uppercase opacity-40 font-bold">CAUÊ & LIZ — 2026</p>
                </div>
              </motion.div>
            </div>
          </Section>

          {/* Site Footer */}
          <footer className="py-20 text-center bg-white border-t border-editorial-ink/10">
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-stone-400">ESTA É A NOSSA HISTÓRIA</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
