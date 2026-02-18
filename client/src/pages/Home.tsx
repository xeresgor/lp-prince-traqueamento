/*
 ╔═══════════════════════════════════════════════════════════════════════════════╗
 ║                    LANDING PAGE - PRINCE ADS                                  ║
 ║                   Raio-X de Rastreamento para E-commerce                      ║
 ╚═══════════════════════════════════════════════════════════════════════════════╝
 *
 * DESIGN PHILOSOPHY: Organic Modernism with Bauhaus Contemporary influence
 * - Fluid shapes contained in rigorous grid
 * - Generous breathing space (24px multiples)
 * - Emerald green (#047857) for trust and growth
 * - Subtle gradients and backdrop blur for depth
 * - Optimized animations and performance
 *
 * ESTRUTURA DO ARQUIVO:
 * 1. IMPORTS (linhas 11-15): Componentes, ícones e hooks
 * 2. ESTADOS (linhas 17-34): Variáveis de estado React
 * 3. FUNÇÕES (linhas 36-120): Lógica de formulário e interações
 * 4. JSX/RENDER (linhas 142+): Estrutura visual da página
 *
 * SEÇÕES DA PÁGINA:
 * - Header com navegação
 * - Seção 1: Hero (Apresentação)
 * - Seção 2: O Problema
 * - Seção 3: O Que É Esse Raio-X
 * - Seção 4: Por Que Isso Importa
 * - Seção 5: Para Quem É
 * - Seção 6: Como Funciona
 * - Seção 7: Formulário de Captura
 * - Seção 8: Posicionamento
 * - Seção 9: Marcas Atendidas
 * - Botão Flutuante WhatsApp
 *
 * ARQUIVO AUXILIAR: Veja ESTRUTURA_COMENTADA.md para documentação completa
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, AlertCircle, Shield, ArrowRight, ChevronDown, Check, Loader2, DollarSign, User, Phone, Zap, MessageCircle, XCircle, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

// ═════════════════════════════════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL: Home
// ═════════════════════════════════════════════════════════════════════════════════
// Este é o componente principal da Landing Page. Contém toda a lógica e estrutura visual.

export default function Home() {
  // ─────────────────────────────────────────────────────────────────────────────────
  // ESTADO 1: Dados do Formulário
  // ─────────────────────────────────────────────────────────────────────────────────
  // Armazena os valores dos 7 campos do formulário de captura
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    domain: "",
    email: "",
    phone: "",
    mediaInvestment: "",
    revenue: ""
  });
  // ESTADO 2: Controla se o formulário foi enviado com sucesso
  const [submitted, setSubmitted] = useState(false);
  
  // ESTADO 3: Controla se o formulário está sendo enviado (mostra loading)
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // ESTADO 4: Rastreia o progresso de scroll da página (barra no topo)
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // ESTADO 5: Controla qual pergunta do FAQ está expandida (não usado mais)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // ESTADO 6: Controla se os blobs animados aparecem (respeita preferências de movimento)
  const [visibleBlobs, setVisibleBlobs] = useState(true);
  
  // ESTADO 7: Controla qual card de problema está ativo no carrossel mobile
  const [activeProblemCard, setActiveProblemCard] = useState(0);
  
  // ESTADO 8: Controla qual card de "Para Quem É" está ativo no carrossel mobile
  const [activeCaseCard, setActiveCaseCard] = useState(0);
  
  // REF: Referência para o formulário (usado para scroll automático)
  const formRef = useRef<HTMLDivElement>(null);

  // ─────────────────────────────────────────────────────────────────────────────────
  // EFEITO 1: Rastrear Scroll da Página
  // ─────────────────────────────────────────────────────────────────────────────────
  // Atualiza a barra de progresso no topo conforme o usuário faz scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─────────────────────────────────────────────────────────────────────────────────
  // EFEITO 2: Respeitar Preferências de Movimento Reduzido
  // ─────────────────────────────────────────────────────────────────────────────────
  // Verifica se o usuário prefere menos animações e desativa os blobs se necessário
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setVisibleBlobs(!prefersReducedMotion);
  }, []);

  // ─────────────────────────────────────────────────────────────────────────────────
  // FUNÇÃO 1: Atualizar Dados do Formulário
  // ─────────────────────────────────────────────────────────────────────────────────
  // Chamada sempre que o usuário digita em um campo do formulário
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ─────────────────────────────────────────────────────────────────────────────────
  // FUNÇÃO 2: Enviar Formulário
  // ─────────────────────────────────────────────────────────────────────────────────
  // Valida, envia dados para backend e abre WhatsApp com mensagem formatada
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.company || !formData.domain || !formData.email || !formData.phone || !formData.mediaInvestment || !formData.revenue) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar dados para webhook/backend
      const payload = {
        name: formData.name,
        company: formData.company,
        domain: formData.domain,
        email: formData.email,
        phone: formData.phone,
        mediaInvestment: formData.mediaInvestment,
        revenue: formData.revenue,
        timestamp: new Date().toISOString(),
        source: "landing-page"
      };

      // Tentar enviar para backend (se disponível)
      try {
        await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        // Fallback silencioso se backend não disponível
        console.log("Backend não disponível, continuando com WhatsApp");
      }

      // Enviar para Webhook (N8N)
      await sendToWebhook(formData);

      // Após sucesso/fallback, abrir WhatsApp
      setTimeout(() => {
        const message = encodeURIComponent(
          `Ola! Gostaria de solicitar meu Raio-X de Rastreamento.\n\nNome: ${formData.name}\nEmpresa: ${formData.company}\nDominio: ${formData.domain}\nEmail: ${formData.email}\nWhatsApp: ${formData.phone}\nInvestimento mensal em midia: ${formData.mediaInvestment}\nFaturamento mensal: ${formData.revenue}`
        );
        window.open(`https://wa.me/5535984341260?text=${message}`, "_blank");
        
        setSubmitted(true);
        setIsSubmitting(false);
        
        setTimeout(() => {
          setFormData({ name: "", company: "", domain: "", email: "", phone: "", mediaInvestment: "", revenue: "" });
          setSubmitted(false);
        }, 2000);
      }, 500);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setIsSubmitting(false);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────────
  // FUNÇÃO 3: Rolar até o Formulário (Scroll Suave)
  // ─────────────────────────────────────────────────────────────────────────────────
  // Faz a página rolar suavemente até a seção do formulário quando um botão CTA é clicado
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────────
  // FUNÇÃO 4: Enviar para Webhook (N8N)
  // ─────────────────────────────────────────────────────────────────────────────────
  // Envia os dados do formulário para o Webhook do N8N configurado
  const sendToWebhook = async (leadData: typeof formData) => {
    try {
      const WEBHOOK_URL = "https://n8n-prince.soureicdn.com/webhook/aa4e2be9-3b45-4daa-a56c-43c1bd66e7e8";
      
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadData,
          source: "Landing Page Prince Ads",
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        console.error("Erro ao enviar para Webhook:", response.statusText);
        return false;
      }

      console.log("✅ Lead enviado com sucesso para o N8N!");
      return true;
    } catch (error) {
      console.error("❌ Erro na integração com Webhook:", error);
      return false;
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────────
  // FUNÇÃO 5: Abrir WhatsApp (Botões CTA)
  // ─────────────────────────────────────────────────────────────────────────────────
  // Abre o WhatsApp com uma mensagem pré-definida quando o usuário clica em CTA
  const handleCTAClick = () => {
    scrollToForm(); // Rolar até o formulário
  };

  const faqItems = [
    {
      question: "É difícil de instalar?",
      answer: "Não! Nossa equipe faz toda a instalação em 48 horas. Você não precisa mexer em código. Basta fornecer acesso ao seu painel de anúncios."
    },
    {
      question: "Funciona com Shopify/WooCommerce/Bagy?",
      answer: "Sim! Somos compatíveis com todas as plataformas de e-commerce: Shopify, WooCommerce, Bagy, Tray, Vtex e mais. Se você vende online, nós cobrimos."
    },
    {
      question: "Quanto custa?",
      answer: "Oferecemos planos flexíveis baseados no seu faturamento. Primeiros 10 clientes recebem 30 dias de suporte grátis + instalação sem custo adicional."
    },
    {
      question: "Preciso de conhecimento técnico?",
      answer: "Não. Você não precisa saber programar. Nós cuidamos de toda a parte técnica. Você só precisa responder algumas perguntas sobre sua conta de anúncios."
    },
    {
      question: "E se eu cancelar?",
      answer: "Sem multa de cancelamento. Você pode cancelar a qualquer momento. Mas com 14 dias de garantia, você verá os resultados antes de se comprometer."
    },
    {
      question: "Quanto tempo demora para ver resultado?",
      answer: "Você começa a ver dados mais precisos em 48-72 horas. Em 30 dias, você terá clareza total de quanto estava perdendo e quanto está recuperando."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50" style={{ width: `${scrollProgress}%` }}></div>

      {/* Animated blob backgrounds - with reduced opacity and will-change optimization */}
      {visibleBlobs && (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" style={{ willChange: "transform" }}></div>
          <div className="absolute top-0 -right-40 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" style={{ willChange: "transform" }}></div>
          <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" style={{ willChange: "transform" }}></div>
        </div>
      )}

      {/* HEADER COM NAVEGAÇÃO */}
      <header className="sticky top-1 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663334312014/zRzOaCoTsSkIAQNJ.png" 
            alt="Prince Ads" 
            className="h-12 md:h-14 lg:h-16 w-auto"
            loading="lazy"
          />
          <nav className="flex items-center gap-8">
            <a href="#como-funciona" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#beneficios" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#faq" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a 
              href="https://wa.me/5535984341260" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* SEÇÃO 1: HERO */}
      <section className="container py-12 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold">
                Raio-X de Rastreamento para E-commerce
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Você pode estar pagando pelo tráfego… e o algoritmo não está aprendendo tudo sobre quem realmente compra.
              </p>

              <p className="text-base text-foreground leading-relaxed max-w-2xl font-medium">
                Receba um diagnóstico técnico da infraestrutura de dados do seu e-commerce e descubra:
              </p>
              
              <ul className="text-base text-foreground leading-relaxed max-w-2xl space-y-2">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Onde eventos podem estar sendo perdidos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Se seu pixel está realmente capturando todas as conversões</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Como isso impacta o ROAS e o CPA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Quanto de eficiência pode estar ficando na mesa</span>
                </li>
              </ul>
              
              <p className="text-base text-foreground leading-relaxed max-w-2xl font-semibold pt-4">
                Solicite agora seu diagnóstico gratuito com um especialista da Prince.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={handleCTAClick}
              >
                Quero meu Raio-X de Rastreamento
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-6 text-base font-semibold rounded-2xl"
                onClick={() => {
                  document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver Como Funciona (2 min)
              </Button>
            </div>
          </div>

          {/* Right Visual - Comparison Chart */}
          <div className="lg:col-span-5">
            <div className="relative bg-card rounded-2xl p-8 shadow-xl border border-border">
              <h3 className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Comparação de Rastreamento</h3>
              
              <div className="space-y-6">
                {/* Pixel Browser */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">Pixel (Navegador)</span>
                    <span className="text-sm font-bold text-red-600">65%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-red-600 h-full rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                </div>

                {/* API Server-Side */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">API (Server-Side)</span>
                    <span className="text-sm font-bold text-primary">100%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-primary h-full rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Diferença: 35%</span> de dados perdidos com rastreamento tradicional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador visual */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* SEÇÃO 2: O PROBLEMA */}
      <section className="container py-16 lg:py-24" id="beneficios">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              O Problema Que Quase Ninguém Vê
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A maioria dos e-commerces acredita que o problema está na campanha. Mas, muitas vezes, o problema está na infraestrutura de dados por trás da campanha.
            </p>
          </div>

          {/* Problem Cards Data */}
          {(() => {
            const problemCards = [
              {
                icon: AlertCircle,
                title: "Quando o rastreamento depende apenas do navegador:",
                description: "Eventos deixam de ser registrados. Parte das conversões não chega às plataformas. O algoritmo otimiza com dados incompletos. O custo por aquisição sobe ao longo do tempo."
              },
              {
                icon: Shield,
                title: "E o pior: isso não aparece como erro.",
                description: "Aparece como ROAS instável, Escala travada, CPA aumentando, Campanhas que 'param de funcionar'."
              },
              {
                icon: TrendingUp,
                title: "A infraestrutura de dados é a base",
                description: "Sem dados precisos, nenhuma estratégia de marketing funciona. É como dirigir de olhos fechados."
              }
            ];

            const nextProblemCard = () => {
              setActiveProblemCard((prev) => (prev + 1) % problemCards.length);
            };

            const prevProblemCard = () => {
              setActiveProblemCard((prev) => (prev - 1 + problemCards.length) % problemCards.length);
            };

            return (
              <>
                {/* GRID - Desktop/Tablet (≥768px) */}
                <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
                  {problemCards.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Card 
                        key={index} 
                        className="p-6 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                      >
                        <Icon className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </Card>
                    );
                  })}
                </div>

                {/* CARROSSEL - Mobile (<768px) */}
                <div className="block md:hidden">
                  <div className="relative max-w-lg mx-auto px-10 sm:px-12">
                    {/* Container do Card Ativo */}
                    <div className="overflow-hidden rounded-3xl">
                      <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeProblemCard * 100}%)` }}
                      >
                        {problemCards.map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <div key={index} className="w-full flex-shrink-0 px-2">
                              <Card className="p-6 bg-card border-border/40 shadow-xl">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                  <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-foreground text-center leading-tight">
                                  {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                                  {item.description}
                                </p>
                              </Card>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Setas de Navegação - Mobile */}
                    <button
                      onClick={prevProblemCard}
                      disabled={activeProblemCard === 0}
                      className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2",
                        "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-white",
                        "flex items-center justify-center shadow-lg",
                        "hover:scale-110 transition-all duration-300",
                        "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                      )}
                      aria-label="Card anterior"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    <button
                      onClick={nextProblemCard}
                      disabled={activeProblemCard === problemCards.length - 1}
                      className={cn(
                        "absolute right-0 top-1/2 -translate-y-1/2",
                        "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-white",
                        "flex items-center justify-center shadow-lg",
                        "hover:scale-110 transition-all duration-300",
                        "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                      )}
                      aria-label="Próximo card"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    {/* Indicadores (Dots) - Mobile */}
                    <div className="flex justify-center gap-2 mt-6">
                      {problemCards.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveProblemCard(index)}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            activeProblemCard === index 
                              ? "bg-primary w-8" 
                              : "bg-muted-foreground/30"
                          )}
                          aria-label={`Ir para card ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* Separador visual */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* SEÇÃO 3: A SOLUÇÃO */}
      <section className="container py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12 border border-primary/20">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              DIAGNÓSTICO TÉCNICO
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              O Que É Esse Raio-X?
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O Raio-X de Rastreamento da Prince é um diagnóstico técnico onde analisamos sua infraestrutura de dados e identificamos gargalos.
            </p>

            {/* Checklist com micro-provas */}
            <div className="space-y-4">
              {[
                { title: "Estrutura atual de captura de eventos", desc: "" },
                { title: "Dependência exclusiva de pixel padrão", desc: "" },
                { title: "Possível perda de dados por navegador ou sistema operacional", desc: "" },
                { title: "Ordem de disparo das tags", desc: "" },
                { title: "Impacto disso na performance do tráfego pago", desc: "" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base font-semibold text-foreground">{item.title}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-primary/20">
              <h3 className="text-2xl font-bold mb-6">Em 30 minutos, você entende:</h3>
              <div className="space-y-3">
                {[
                  "Se sua estrutura está sólida",
                  "Onde pode estar perdendo dados",
                  "Se faz sentido ajustar agora"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-primary/20 space-y-2">
                <p className="text-sm font-semibold text-foreground">Sem apresentação comercial.</p>
                <p className="text-sm font-semibold text-foreground">Sem proposta forçada.</p>
                <p className="text-sm font-semibold text-foreground">Só clareza técnica.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador visual */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* SEÇÃO 4: COMO FUNCIONA */}
      <section className="container py-16 lg:py-24" id="como-funciona">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            Por Que Isso Importa?
          </h2>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Você já paga pelo tráfego. Se parte dos dados não está sendo corretamente capturada:
            </p>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <ul className="space-y-4">
                {[
                  "O algoritmo aprende menos",
                  "As campanhas perdem eficiência",
                  "Você paga mais caro para escalar"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <p className="text-lg font-semibold text-foreground mb-4">
                Já vimos e-commerces aumentarem em mais de 70% a eficiência do tráfego pago, ajustando apenas a infraestrutura de dados — sem aumentar investimento.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Não é sobre comprar mais tráfego.
              </p>
              <p className="text-base font-semibold text-primary">
                É sobre aproveitar melhor o que você já compra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separador visual */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* SEÇÃO 5: DEPOIMENTOS */}
      <section className="container py-12 md:py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Para Quem É
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Esse diagnóstico é para e-commerces que:
          </p>
        </div>

        {/* Cases Cards Data */}
        {(() => {
          const caseCards = [
            {
              title: "Investem consistentemente em mídia paga",
              isPositive: true
            },
            {
              title: "Dependem de Meta e/ou Google para gerar vendas",
              isPositive: true
            },
            {
              title: "Sentem dificuldade para escalar campanhas",
              isPositive: true
            },
            {
              title: "Querem previsibilidade de performance",
              isPositive: true
            },
            {
              title: "Não investem em tráfego ou estão validando produto",
              isPositive: false
            }
          ];

          const nextCaseCard = () => {
            setActiveCaseCard((prev) => (prev + 1) % caseCards.length);
          };

          const prevCaseCard = () => {
            setActiveCaseCard((prev) => (prev - 1 + caseCards.length) % caseCards.length);
          };

          return (
            <>
              {/* GRID - Desktop/Tablet (≥768px) */}
              <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {caseCards.map((testimonial, index) => (
                  <Card key={index} className={`p-6 hover:shadow-lg transition-all duration-300 ${
                    testimonial.isPositive 
                      ? 'bg-primary/10 border-primary/20' 
                      : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-start gap-3">
                      {testimonial.isPositive ? (
                        <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      )}
                      <p className={`font-semibold text-base ${
                        testimonial.isPositive 
                          ? 'text-foreground' 
                          : 'text-red-900'
                      }`}>{testimonial.title}</p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* CARROSSEL - Mobile (<768px) */}
              <div className="block md:hidden">
                <div className="relative max-w-lg mx-auto px-10 sm:px-12">
                  {/* Container do Card Ativo */}
                  <div className="overflow-hidden rounded-3xl">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${activeCaseCard * 100}%)` }}
                    >
                      {caseCards.map((testimonial, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-2">
                          <Card className={`p-6 shadow-xl ${
                            testimonial.isPositive 
                              ? 'bg-primary/10 border-primary/20' 
                              : 'bg-red-50 border-red-200'
                          }`}>
                            <div className="flex items-start gap-3">
                              {testimonial.isPositive ? (
                                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                              ) : (
                                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                              )}
                              <p className={`font-semibold text-base ${
                                testimonial.isPositive 
                                  ? 'text-foreground' 
                                  : 'text-red-900'
                              }`}>{testimonial.title}</p>
                            </div>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Setas de Navegação - Mobile */}
                  <button
                    onClick={prevCaseCard}
                    disabled={activeCaseCard === 0}
                    className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2",
                      "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-white",
                      "flex items-center justify-center shadow-lg",
                      "hover:scale-110 transition-all duration-300",
                      "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                    )}
                    aria-label="Case anterior"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <button
                    onClick={nextCaseCard}
                    disabled={activeCaseCard === caseCards.length - 1}
                    className={cn(
                      "absolute right-0 top-1/2 -translate-y-1/2",
                      "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-white",
                      "flex items-center justify-center shadow-lg",
                      "hover:scale-110 transition-all duration-300",
                      "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                    )}
                    aria-label="Próximo case"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Indicadores (Dots) - Mobile */}
                  <div className="flex justify-center gap-2 mt-6">
                    {caseCards.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCaseCard(index)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300",
                          activeCaseCard === index 
                            ? "bg-primary w-8" 
                            : "bg-muted-foreground/30"
                        )}
                        aria-label={`Ir para case ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          );
        })()}
      </section>

      {/* Separador visual */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* SEÇÃO 6: COMO FUNCIONA */}
      <section className="container py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            Como Funciona
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                step: "1",
                title: "Você preenche o formulário",
                description: ""
              },
              {
                step: "2",
                title: "Nosso time analisa previamente seu domínio",
                description: ""
              },
              {
                step: "3",
                title: "Agendamos um diagnóstico online",
                description: ""
              },
              {
                step: "4",
                title: "Você recebe um raio-x técnico da sua infraestrutura de dados",
                description: ""
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-border">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <p className="text-lg text-foreground font-semibold mb-4">
                Se fizer sentido avançar, conversamos sobre os próximos passos.
              </p>
              <p className="text-base text-muted-foreground">
                Se não fizer, você sai com clareza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separador visual */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* SEÇÃO 7: CTA FINAL COM FORMULÁRIO */}
      <section className="container py-16 lg:py-24" ref={formRef}>
        <div className="max-w-3xl mx-auto">
          {/* Badge de Bônus com Glow Animado */}
          <div className="relative inline-block mb-8 w-full flex justify-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full blur-sm opacity-75 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-amber-50 to-amber-100 text-amber-900 px-6 py-3 rounded-full text-sm font-black uppercase tracking-wider border-2 border-amber-300 shadow-xl flex items-center gap-2">
              <span className="text-lg">🔥</span>
              <span>BÔNUS: Primeiros 10 Clientes</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Instalação + 30 Dias GRÁTIS</span>
            </div>
          </div>

          {/* Título e Subtítulo */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight text-center">
            Formulário
          </h2>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-12 text-center">
            Solicite seu Raio-X de Rastreamento
          </p>

          {/* Card do Formulário com Gradiente e Decoração */}
          <Card className="p-10 lg:p-14 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-sm border-2 border-primary/20 shadow-2xl rounded-[2.5rem] relative overflow-hidden">
            {/* Detalhes decorativos */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -ml-16 -mb-16"></div>

            {/* Conteúdo do formulário */}
            <div className="relative z-10">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Campo 1: Nome */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-foreground ml-1">Nome</label>
                  <div className="relative group">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10 group-hover:text-primary transition-colors" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      placeholder="Seu nome completo"
                      className="w-full pl-14 pr-12 py-4 rounded-2xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all hover:border-primary/50 placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                {/* Campo 2: Empresa */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-foreground ml-1">Empresa</label>
                  <div className="relative group">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      required
                      placeholder="Nome da sua empresa"
                      className="w-full pl-5 pr-4 py-4 rounded-2xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all hover:border-primary/50 placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                {/* Campo 3: Domínio */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-foreground ml-1">Domínio</label>
                  <div className="relative group">
                    <input
                      type="url"
                      name="domain"
                      value={formData.domain}
                      onChange={handleFormChange}
                      required
                      placeholder="exemplo.com.br"
                      className="w-full pl-5 pr-4 py-4 rounded-2xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all hover:border-primary/50 placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                {/* Campo 4: Email */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-foreground ml-1">Email</label>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full pl-5 pr-4 py-4 rounded-2xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all hover:border-primary/50 placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                {/* Campo 5: WhatsApp */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-foreground ml-1">WhatsApp</label>
                  <div className="relative group">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10 group-hover:text-primary transition-colors" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      placeholder="(35) 98765-4321"
                      className="w-full pl-14 pr-12 py-4 rounded-2xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all hover:border-primary/50 placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                {/* Campo 6: Investimento mensal em mídia */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-foreground ml-1">Investimento mensal em mídia</label>
                  <div className="relative group">
                    <DollarSign className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10 group-hover:text-primary transition-colors" />
                    <select
                      name="mediaInvestment"
                      value={formData.mediaInvestment}
                      onChange={handleFormChange}
                      required
                      className="w-full pl-14 pr-12 py-4 rounded-2xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer hover:border-primary/50"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="1-5K">R$ 1-5K/mês</option>
                      <option value="5-10K">R$ 5-10K/mês</option>
                      <option value="10-50K">R$ 10-50K/mês</option>
                      <option value="50K+">R$ 50K+/mês</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none group-hover:text-primary transition-colors" />
                  </div>
                </div>

                {/* Campo 7: Faturamento mensal */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-foreground ml-1">Faturamento mensal</label>
                  <div className="relative group">
                    <DollarSign className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10 group-hover:text-primary transition-colors" />
                    <select
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleFormChange}
                      required
                      className="w-full pl-14 pr-12 py-4 rounded-2xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer hover:border-primary/50"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="10-50K">R$ 10-50K/mês</option>
                      <option value="50-120K">R$ 50-120K/mês</option>
                      <option value="120-240K">R$ 120-240K/mês</option>
                      <option value="240K+">R$ 240K+/mês</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none group-hover:text-primary transition-colors" />
                  </div>
                </div>

                {/* Botão CTA com Shine Effect */}
                <Button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-lg md:text-xl font-bold rounded-[1.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] w-full relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {/* Shine effect ao hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>Preparando sua análise...</span>
                      </>
                    ) : submitted ? (
                      <>
                        <Check className="w-6 h-6" />
                        <span>Recebemos seus dados!</span>
                      </>
                    ) : (
                      <>
                        <span>Quero analisar meu tracking</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </form>

              {/* Grid de Benefícios com Ícones */}
              <div className="space-y-4 pt-8">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Zap, text: "Instalação em 48h", color: "text-blue-600", bg: "bg-blue-50" },
                    { icon: MessageCircle, text: "Suporte em português", color: "text-emerald-600", bg: "bg-emerald-50" },
                    { icon: Shield, text: "14 dias de garantia", color: "text-amber-600", bg: "bg-amber-50" },
                    { icon: XCircle, text: "Sem multa", color: "text-purple-600", bg: "bg-purple-50" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-foreground">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${item.bg}`}>
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <span className="text-xs font-semibold leading-tight">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Texto de Privacidade */}
                <div className="flex items-start gap-2 p-3 bg-muted/30 rounded-xl border border-border/30">
                  <Lock className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Seus dados são 100% seguros. Não enviamos spam. Apenas análise personalizada via WhatsApp.
                  </p>
                </div>
              </div>

              {/* Loading State */}
              {isSubmitting && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-[2rem] flex items-center justify-center z-20">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="w-20 h-20 border-4 border-primary/20 rounded-full"></div>
                      <div className="w-20 h-20 border-4 border-t-primary rounded-full animate-spin absolute inset-0"></div>
                      <Loader2 className="w-8 h-8 text-primary absolute inset-0 m-auto" />
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-foreground mb-1">
                        Preparando sua análise...
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Isso leva apenas alguns segundos
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Success State */}
              {submitted && (
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100/50 backdrop-blur-md rounded-[2rem] flex items-center justify-center z-20">
                  <div className="flex flex-col items-center gap-4 px-6 text-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                        <Check className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-emerald-700 mb-2">
                        Análise Recebida!
                      </p>
                      <p className="text-sm text-emerald-600 font-medium mb-1">
                        Redirecionando para o WhatsApp...
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Você receberá uma análise personalizada em instantes
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Separador visual */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* SEÇÃO 8: POSICIONAMENTO */}
      <section className="container py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12 border border-primary/20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
              Posicionamento
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Prince não é uma agência de tráfego.
              </p>
              
              <p className="text-lg text-foreground font-semibold leading-relaxed">
                Somos uma empresa de tecnologia especializada em infraestrutura de dados para e-commerce.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabalhamos na camada abaixo da mídia — onde a maioria não olha — mas onde a eficiência realmente começa.
              </p>
              
              <p className="text-lg text-foreground font-semibold leading-relaxed">
                Se existe dinheiro ficando na mesa por falha de dados, nós vamos mostrar.
              </p>
            </div>
            
            <div className="mt-10 flex justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={handleCTAClick}
              >
                Solicitar Diagnóstico
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Separador visual */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* SEÇÃO 9: MARCAS ATENDIDAS */}
      <section className="container py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            Marcas que já passaram por esse mesmo Raio-X
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
            {[
              {
                // MARCA 1: We Pink
                // INSTRUÇÃO: Substitua a URL abaixo pela URL da logo da We Pink
                // Exemplo: "https://seu-dominio.com/logos/we-pink-logo.png"
                logoUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663334312014/zRzOaCoTsSkIAQNJ.png",
                altText: "We Pink"
              },
              {
                // MARCA 2
                // INSTRUÇÃO: Substitua a URL abaixo pela URL da logo da sua segunda marca
                logoUrl: "",
                altText: "Marca 2"
              },
              {
                // MARCA 3
                // INSTRUÇÃO: Substitua a URL abaixo pela URL da logo da sua terceira marca
                logoUrl: "",
                altText: "Marca 3"
              },
              {
                // MARCA 4
                // INSTRUÇÃO: Substitua a URL abaixo pela URL da logo da sua quarta marca
                logoUrl: "",
                altText: "Marca 4"
              }
              // Para adicionar mais marcas, copie o bloco acima e adicione uma nova entrada com logoUrl e altText
            ].map((brand, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                {brand.logoUrl ? (
                  <img
                    src={brand.logoUrl}
                    alt={brand.altText}
                    className="h-16 max-w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-xs text-muted-foreground font-semibold">Logo aqui</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button - Responsivo e com z-index maior */}
      <a
        href="https://wa.me/5535984341260?text=Olá! Gostaria de saber mais sobre o trackeamento server-side."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Fale pelo WhatsApp"
        onClick={() => {
          // Track event aqui (Meta Pixel, GA4, etc)
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Contact');
          }
        }}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.258-1.688 1.694-2.76 3.957-2.76 6.514 0 1.869.384 3.647 1.235 5.282L2.89 23.585l3.02-.798c1.946.67 3.957.995 5.922.995 5.386 0 9.783-4.401 9.783-9.787 0-2.615-.997-5.071-2.809-6.881-1.812-1.812-4.266-2.809-6.881-2.809z"/>
        </svg>
      </a>
    </div>
  );
}
