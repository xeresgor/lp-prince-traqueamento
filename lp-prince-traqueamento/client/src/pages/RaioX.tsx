import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import {
  CheckCircle2, TrendingUp, AlertCircle, Shield, ArrowRight,
  ChevronDown, Check, Loader2, X, XCircle,
  AlertTriangle, Settings, TrendingDown, Target, DollarSign, Brain,
  User, Building, Globe, Mail, Phone,
  FileText, Search, Calendar, FileCheck
} from "lucide-react";

export default function RaioX() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    domain: "",
    email: "",
    phone: "",
    adSpend: "",
    revenue: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const leadData = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'raio-x-landing-page'
      };
      
      console.log("Lead capturado:", leadData);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const message = encodeURIComponent(
        `Olá! Acabei de solicitar o Raio-X de Traqueamento.\n\nEmpresa: ${formData.company}\nDomínio: ${formData.domain}\nInvestimento em mídia: ${formData.adSpend}`
      );
      window.open(`https://wa.me/5535984341260?text=${message}`, "_blank");
      
      setFormData({ name: "", company: "", domain: "", email: "", phone: "", adSpend: "", revenue: "" });
      
    } catch (error) {
      console.error("Erro ao enviar formulário", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Sticky */}
      <header className="sticky top-0 z-50 bg-white border-b border-border/50 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663334312014/zRzOaCoTsSkIAQNJ.png"
            alt="Prince" 
            className="h-10 w-auto"
            loading="eager"
          />
          <nav className="hidden md:flex gap-8">
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors font-medium">Como Funciona</a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors font-medium">Benefícios</a>
            <a href="#formulario" className="text-foreground hover:text-primary transition-colors font-medium">Contato</a>
          </nav>
        </div>
      </header>

      {/* SEÇÃO 1: HERO */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              🔍 Diagnóstico Gratuito de Infraestrutura
            </div>
            
            <div className="flex justify-center mb-8">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663334312014/zRzOaCoTsSkIAQNJ.png"
                alt="Prince" 
                className="h-20 md:h-24 w-auto"
                loading="eager"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-center max-w-4xl mx-auto">
              Raio-X de Traqueamento para E-commerce
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto leading-relaxed">
              Você pode estar pagando pelo tráfego… e o algoritmo não está aprendendo tudo sobre quem realmente compra.
            </p>

            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-lg text-foreground mb-6 text-center leading-relaxed">
                Receba um diagnóstico técnico da infraestrutura de dados do seu e-commerce e descubra:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  "Onde eventos podem estar sendo perdidos",
                  "Se seu pixel está realmente capturando todas as conversões",
                  "Como isso impacta o ROAS e o CPA",
                  "Quanto de eficiência pode estar ficando na mesa"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Quero meu Raio-X de Traqueamento
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                ✓ 100% Gratuito · ✓ Sem compromisso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: O PROBLEMA */}
      <section className="py-16 lg:py-24 bg-secondary text-white">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              O Problema Que Quase Ninguém Vê
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A maioria dos e-commerces acredita que o problema está na campanha. Mas, muitas vezes, o problema está na infraestrutura de dados por trás da campanha.
            </p>
          </div>

          <Card className="p-8 lg:p-12 mb-10 border-2 border-primary bg-white">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Quando o rastreamento depende apenas do navegador:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: AlertCircle, text: "Eventos deixam de ser registrados" },
                { icon: TrendingDown, text: "Parte das conversões não chega às plataformas" },
                { icon: Target, text: "O algoritmo otimiza com dados incompletos" },
                { icon: DollarSign, text: "O custo por aquisição sobe ao longo do tempo" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-amber-200/50">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="font-semibold text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center mb-10">
            <p className="text-xl font-bold text-red-400 mb-6">
              E o pior: isso não aparece como erro.
            </p>
            <p className="text-lg text-white/70 mb-8">
              Aparece como:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { emoji: "📉", text: "ROAS instável" },
              { emoji: "🚫", text: "Escala travada" },
              { emoji: "💸", text: "CPA aumentando" },
              { emoji: "⏸️", text: "Campanhas que 'param de funcionar'" }
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-all bg-white/10 border-white/20">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <p className="font-bold text-white">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: O QUE É ESSE RAIO-X */}
      <section className="py-16 lg:py-24 bg-background" id="beneficios">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              O Que É Esse Raio-X?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O Raio-X de Traqueamento da Prince é um diagnóstico técnico onde analisamos:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: CheckCircle2, title: "Estrutura atual de captura de eventos", desc: "Verificamos como seus dados estão sendo coletados" },
              { icon: AlertTriangle, title: "Dependência exclusiva de pixel padrão", desc: "Identificamos vulnerabilidades do tracking via navegador" },
              { icon: Shield, title: "Possível perda de dados por navegador/OS", desc: "Analisamos impacto do iOS, AdBlockers e cookies" },
              { icon: Settings, title: "Ordem de disparo das tags", desc: "Verificamos sequência e prioridade dos eventos" },
              { icon: TrendingUp, title: "Impacto na performance do tráfego", desc: "Correlacionamos dados perdidos com métricas de campanha" }
            ].map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-xl transition-all border-border/50 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 lg:p-10 bg-gradient-to-br from-primary/5 to-emerald-50 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Em 30 minutos, você entende:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Se sua estrutura está sólida",
                "Onde pode estar perdendo dados",
                "Se faz sentido ajustar agora"
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-bold text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-primary/20 text-center space-y-2">
              <p className="text-lg font-bold text-foreground">Sem apresentação comercial.</p>
              <p className="text-lg font-bold text-foreground">Sem proposta forçada.</p>
              <p className="text-xl font-black text-primary">Só clareza técnica.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* SEÇÃO 4: POR QUE ISSO IMPORTA */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Por Que Isso Importa?
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-2xl font-bold text-primary">
              Você já paga pelo tráfego.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Se parte dos dados não está sendo corretamente capturada:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-10">
              {[
                { icon: Brain, text: "O algoritmo aprende menos" },
                { icon: TrendingDown, text: "As campanhas perdem eficiência" },
                { icon: DollarSign, text: "Você paga mais caro para escalar" }
              ].map((item, i) => (
                <Card key={i} className="p-6 border-2 border-destructive/20 bg-destructive/5">
                  <item.icon className="w-10 h-10 text-destructive mx-auto mb-4" />
                  <p className="font-bold text-foreground">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 lg:p-10 bg-gradient-to-br from-emerald-50 to-primary/5 border-2 border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
              <h3 className="text-2xl font-black text-emerald-700">
                +70% de Eficiência
              </h3>
            </div>
            
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Já vimos e-commerces aumentarem em mais de <strong className="text-primary">70% a eficiência do tráfego pago</strong>, ajustando apenas a infraestrutura de dados — sem aumentar investimento.
            </p>
            
            <div className="pt-6 border-t border-primary/20 space-y-2">
              <p className="text-xl font-bold text-foreground">Não é sobre comprar mais tráfego.</p>
              <p className="text-xl font-black text-primary">É sobre aproveitar melhor o que você já compra.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* SEÇÃO 5: PARA QUEM É */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Para Quem É
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Este diagnóstico é para você se:</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Investe consistentemente em mídia paga",
                  "Depende de Meta e/ou Google para gerar vendas",
                  "Sente dificuldade para escalar campanhas",
                  "Quer previsibilidade de performance"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-2 border-muted bg-muted/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-muted-foreground rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-muted-foreground">Não é indicado se:</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Ainda não investe em tráfego pago",
                  "Está validando produto/mercado",
                  "Investe menos de R$ 3k/mês em ads"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: COMO FUNCIONA */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background" id="como-funciona">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Como Funciona
          </h2>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>

            <div className="space-y-8">
              {[
                { 
                  step: "1", 
                  title: "Você preenche o formulário", 
                  desc: "Compartilha informações básicas sobre seu e-commerce e investimento em mídia",
                  icon: FileText
                },
                { 
                  step: "2", 
                  title: "Nosso time analisa previamente seu domínio", 
                  desc: "Fazemos uma análise técnica inicial da sua infraestrutura de tracking",
                  icon: Search
                },
                { 
                  step: "3", 
                  title: "Agendamos um diagnóstico online", 
                  desc: "30 minutos de análise técnica via call, sem apresentação comercial",
                  icon: Calendar
                },
                { 
                  step: "4", 
                  title: "Você recebe um raio-x técnico", 
                  desc: "Diagnóstico completo da sua infraestrutura de dados e oportunidades",
                  icon: FileCheck
                }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <Card className="p-6 lg:p-8 hover:shadow-xl transition-all lg:w-[calc(50%-2rem)] lg:odd:ml-0 lg:even:ml-auto">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                      <item.icon className="w-8 h-8 text-primary/30" />
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center p-8 bg-card rounded-2xl border border-border/50">
              <p className="text-lg mb-2">
                <strong className="text-primary">Se fizer sentido avançar</strong>, conversamos sobre os próximos passos.
              </p>
              <p className="text-lg text-muted-foreground">
                Se não fizer, você sai com clareza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: FORMULÁRIO */}
      <section id="formulario" className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 to-emerald-50">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Solicite seu Raio-X de Traqueamento
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha os dados abaixo e nosso time entrará em contato em até 24h
            </p>
          </div>

          <Card className="p-8 lg:p-12 bg-white shadow-2xl border-2 border-primary/10">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Nome */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-foreground">
                  Nome completo *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Seu nome"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Empresa */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-foreground">
                  Empresa *
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    required
                    placeholder="Nome da empresa"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Domínio */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-foreground">
                  Domínio do e-commerce *
                </label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <input
                    type="url"
                    name="domain"
                    value={formData.domain}
                    onChange={handleFormChange}
                    required
                    placeholder="www.seusite.com.br"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-foreground">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-foreground">
                    WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      placeholder="(00) 00000-0000"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Investimento em Mídia */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-foreground">
                    Investimento mensal em mídia *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <select
                      name="adSpend"
                      value={formData.adSpend}
                      onChange={handleFormChange}
                      required
                      className="w-full pl-12 pr-10 py-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Selecione</option>
                      <option value="3-10k">R$ 3k - 10k/mês</option>
                      <option value="10-30k">R$ 10k - 30k/mês</option>
                      <option value="30-50k">R$ 30k - 50k/mês</option>
                      <option value="50k+">R$ 50k+/mês</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* Faturamento Mensal */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-foreground">
                    Faturamento mensal *
                  </label>
                  <div className="relative">
                    <TrendingUp className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <select
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleFormChange}
                      required
                      className="w-full pl-12 pr-10 py-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Selecione</option>
                      <option value="50-150k">R$ 50k - 150k/mês</option>
                      <option value="150-300k">R$ 150k - 300k/mês</option>
                      <option value="300-500k">R$ 300k - 500k/mês</option>
                      <option value="500k+">R$ 500k+/mês</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Botão Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white px-12 py-7 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 mt-8"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Quero Analisar Meu Tracking
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </>
                )}
              </Button>

              {/* Texto de privacidade */}
              <p className="text-xs text-muted-foreground text-center mt-4">
                Seus dados são 100% seguros e não serão compartilhados. Respeitamos sua privacidade.
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* SEÇÃO 8: POSICIONAMENTO */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container max-w-4xl mx-auto text-center">
          <Card className="p-10 lg:p-14 border-2 border-primary/20">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-sm font-bold text-primary mb-6">
              Quem Somos
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              A Prince não é uma agência de tráfego.
            </h2>
            
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                Somos uma <strong className="text-primary">empresa de tecnologia especializada em infraestrutura de dados</strong> para e-commerce.
              </p>
              
              <p>
                Trabalhamos na <strong className="text-primary">camada abaixo da mídia</strong> — onde a maioria não olha — mas onde a eficiência realmente começa.
              </p>
              
              <div className="pt-8 mt-8 border-t border-border">
                <p className="text-2xl font-black text-primary">
                  Se existe dinheiro ficando na mesa por falha de dados, nós vamos mostrar.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* SEÇÃO 9: MARCAS */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-foreground">
            Marcas que já passaram por esse mesmo Raio-X
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center p-6 bg-muted/30 rounded-xl border border-border/30 h-24">
                <p className="text-muted-foreground font-bold">Logo {i}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-8 italic">
            * Logos serão adicionados conforme autorização dos clientes
          </p>
        </div>
      </section>

      {/* SEÇÃO 10: CTA FINAL */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-emerald-600 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Não deixe dinheiro na mesa por falha de dados
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Solicite seu diagnóstico gratuito agora e descubra quanto de eficiência você pode estar perdendo.
          </p>

          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-12 py-7 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
            onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Diagnóstico Agora
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>

          <p className="text-sm mt-6 opacity-75">
            ✓ 100% Gratuito · ✓ Análise em 30 minutos · ✓ Sem compromisso
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container text-center">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663334312014/zRzOaCoTsSkIAQNJ.png" 
            alt="Prince Ads" 
            className="h-12 w-auto mx-auto mb-4"
          />
          <p className="text-sm text-muted-foreground">
            © 2025 Prince Ads. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
