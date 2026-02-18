# 📋 ESTRUTURA COMENTADA DA LANDING PAGE - PRINCE ADS

## 📌 ÍNDICE GERAL
1. **Imports e Configurações Iniciais** (Linhas 1-15)
2. **Estados (State Management)** (Linhas 17-34)
3. **Funções de Controle** (Linhas 36-120)
4. **JSX - Estrutura Visual** (Linhas 142+)

---

## 🔧 SEÇÃO 1: IMPORTS E CONFIGURAÇÕES

### O que é?
Importações de componentes, ícones e utilitários necessários para a página funcionar.

### Componentes Importados:
- **Button**: Componente de botão reutilizável
- **Card**: Componente de card/caixa para organizar conteúdo
- **Ícones (lucide-react)**: Símbolos visuais como Check, ArrowRight, AlertCircle, etc.
- **useState, useEffect, useRef**: Hooks do React para gerenciar estado e efeitos

---

## 💾 SEÇÃO 2: ESTADOS (STATE MANAGEMENT)

### formData
```javascript
const [formData, setFormData] = useState({
  name: "",           // Nome do usuário
  company: "",        // Empresa
  domain: "",         // Domínio do site
  email: "",          // Email
  phone: "",          // WhatsApp
  mediaInvestment: "", // Investimento mensal em mídia
  revenue: ""         // Faturamento mensal
});
```
**O que faz?** Armazena os dados que o usuário preenche no formulário.

### submitted
```javascript
const [submitted, setSubmitted] = useState(false);
```
**O que faz?** Controla se o formulário foi enviado (mostra mensagem de sucesso).

### isSubmitting
```javascript
const [isSubmitting, setIsSubmitting] = useState(false);
```
**O que faz?** Controla se o formulário está sendo enviado (mostra loading).

### scrollProgress
```javascript
const [scrollProgress, setScrollProgress] = useState(0);
```
**O que faz?** Rastreia o progresso de scroll da página (barra no topo).

### expandedFaq
```javascript
const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
```
**O que faz?** Controla qual pergunta do FAQ está expandida (não usado mais, pois removemos FAQ).

### visibleBlobs
```javascript
const [visibleBlobs, setVisibleBlobs] = useState(true);
```
**O que faz?** Controla se os blobs animados de fundo aparecem (respeita preferências de movimento).

### activeProblemCard
```javascript
const [activeProblemCard, setActiveProblemCard] = useState(0);
```
**O que faz?** Controla qual card de problema está ativo no carrossel mobile.

### activeCaseCard
```javascript
const [activeCaseCard, setActiveCaseCard] = useState(0);
```
**O que faz?** Controla qual card de "Para Quem É" está ativo no carrossel mobile.

---

## ⚙️ SEÇÃO 3: FUNÇÕES DE CONTROLE

### handleScroll
**O que faz?** Rastreia o scroll do usuário e atualiza a barra de progresso no topo.

### handleFormChange
**O que faz?** Atualiza o estado do formulário quando o usuário digita em um campo.

### handleFormSubmit
**O que faz?** 
1. Valida se todos os campos foram preenchidos
2. Envia os dados para o backend (se disponível)
3. Abre o WhatsApp com a mensagem formatada
4. Mostra mensagem de sucesso
5. Limpa o formulário

### handleCTAClick
**O que faz?** Abre o WhatsApp com uma mensagem pré-definida quando o usuário clica em botões CTA.

---

## 🎨 SEÇÃO 4: ESTRUTURA VISUAL (JSX)

### 📍 BARRA DE PROGRESSO (Linha ~144)
```jsx
<div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50" 
     style={{ width: `${scrollProgress}%` }}>
</div>
```
**O que é?** Barra verde no topo que mostra o progresso de scroll.

---

### 📍 BLOBS ANIMADOS (Linha ~147-153)
```jsx
{visibleBlobs && (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-0 -left-40 w-96 h-96 bg-accent rounded-full..."></div>
    <div className="absolute top-0 -right-40 w-96 h-96 bg-accent rounded-full..."></div>
    <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-accent rounded-full..."></div>
  </div>
)}
```
**O que é?** Formas redondas animadas no fundo (efeito visual).

---

### 📍 HEADER COM NAVEGAÇÃO (Linha ~155-184)
```jsx
<header className="sticky top-1 z-40 bg-background/80 backdrop-blur-md border-b border-border">
  <div className="container py-4 flex items-center justify-between">
    {/* Logo */}
    <img src="..." alt="Prince Ads" className="h-12 md:h-14 lg:h-16 w-auto" />
    
    {/* Menu de Navegação */}
    <nav className="flex items-center gap-8">
      <a href="#como-funciona">Como Funciona</a>
      <a href="#beneficios">Benefícios</a>
      <a href="#faq">FAQ</a>
      <a href="https://wa.me/...">Contato</a>
    </nav>
  </div>
</header>
```
**O que é?** Header fixo no topo com logo e menu de navegação.

---

### 📍 SEÇÃO 1: HERO (Linha ~187-294)
```jsx
<section className="container py-12 md:py-16 lg:py-24">
  <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
    {/* Lado Esquerdo: Título e Descrição */}
    <div className="lg:col-span-7 space-y-8">
      <h1>Raio-X de Rastreamento para E-commerce</h1>
      <p>Você pode estar pagando pelo tráfego...</p>
      
      {/* Lista de Benefícios */}
      <ul>
        <li>Onde eventos podem estar sendo perdidos</li>
        <li>Se seu pixel está realmente capturando todas as conversões</li>
        <li>Como isso impacta o ROAS e o CPA</li>
        <li>Quanto de eficiência pode estar ficando na mesa</li>
      </ul>
      
      {/* Botões CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={handleCTAClick}>Quero meu Raio-X de Rastreamento</Button>
        <Button variant="outline">Ver Como Funciona (2 min)</Button>
      </div>
    </div>
    
    {/* Lado Direito: Comparação Visual */}
    <div className="lg:col-span-5">
      {/* Card com gráfico de comparação */}
    </div>
  </div>
</section>
```
**O que é?** Primeira seção com título principal, descrição e chamada para ação.

---

### 📍 SEÇÃO 2: O PROBLEMA (Linha ~299-441)
```jsx
<section className="container py-16 lg:py-24" id="beneficios">
  <h2>O Problema Que Quase Ninguém Vê</h2>
  <p>A maioria dos e-commerces acredita que o problema está na campanha...</p>
  
  {/* 3 Cards em Desktop / Carrossel em Mobile */}
  <div className="hidden md:grid md:grid-cols-3 gap-6">
    {/* Card 1: Quando o rastreamento depende apenas do navegador */}
    {/* Card 2: E o pior: isso não aparece como erro */}
    {/* Card 3: A infraestrutura de dados é a base */}
  </div>
  
  {/* Carrossel Mobile */}
  <div className="block md:hidden">
    {/* Navegação com setas e dots */}
  </div>
</section>
```
**O que é?** Seção que explica os problemas com rastreamento inadequado.

---

### 📍 SEÇÃO 3: O QUE É ESSE RAIO-X (Linha ~446-501)
```jsx
<section className="container py-12 md:py-16 lg:py-24">
  <h2>O Que É Esse Raio-X?</h2>
  <p>O Raio-X de Rastreamento da Prince é um diagnóstico técnico...</p>
  
  {/* Lista de 5 itens analisados */}
  <ul>
    <li>Estrutura atual de captura de eventos</li>
    <li>Dependência exclusiva de pixel padrão</li>
    <li>Possível perda de dados por navegador ou SO</li>
    <li>Ordem de disparo das tags</li>
    <li>Impacto disso na performance do tráfego pago</li>
  </ul>
  
  {/* Seção "Em 30 minutos, você entende:" */}
  <div className="mt-12 pt-8 border-t">
    <h3>Em 30 minutos, você entende:</h3>
    <ul>
      <li>Se sua estrutura está sólida</li>
      <li>Onde pode estar perdendo dados</li>
      <li>Se faz sentido ajustar agora</li>
    </ul>
    <p>Sem apresentação comercial.</p>
    <p>Sem proposta forçada.</p>
    <p>Só clareza técnica.</p>
  </div>
</section>
```
**O que é?** Explica em detalhes o que é o diagnóstico oferecido.

---

### 📍 SEÇÃO 4: POR QUE ISSO IMPORTA (Linha ~506-546)
```jsx
<section className="container py-16 lg:py-24" id="como-funciona">
  <h2>Por Que Isso Importa?</h2>
  <p>Você já paga pelo tráfego. Se parte dos dados não está sendo corretamente capturada:</p>
  
  {/* Lista de consequências */}
  <ul>
    <li>O algoritmo aprende menos</li>
    <li>As campanhas perdem eficiência</li>
    <li>Você paga mais caro para escalar</li>
  </ul>
  
  {/* Destaque de resultado */}
  <p>Já vimos e-commerces aumentarem em mais de 70% a eficiência...</p>
  <p>Não é sobre comprar mais tráfego.</p>
  <p>É sobre aproveitar melhor o que você já compra.</p>
</section>
```
**O que é?** Mostra o impacto e valor da solução.

---

### 📍 SEÇÃO 5: PARA QUEM É (Linha ~551-707)
```jsx
<section className="container py-12 md:py-16 lg:py-24">
  <h2>Para Quem É</h2>
  <p>Esse diagnóstico é para e-commerces que:</p>
  
  {/* Cards com Check (verde) e X (vermelho) */}
  <div className="grid md:grid-cols-3 gap-8">
    {/* ✅ Investem consistentemente em mídia paga */}
    {/* ✅ Dependem de Meta e/ou Google */}
    {/* ✅ Sentem dificuldade para escalar */}
    {/* ✅ Querem previsibilidade */}
    {/* ❌ Não investem em tráfego */}
  </div>
</section>
```
**O que é?** Define o público-alvo ideal para o serviço.

---

### 📍 SEÇÃO 6: COMO FUNCIONA (Linha ~712-766)
```jsx
<section className="container py-16 lg:py-24">
  <h2>Como Funciona</h2>
  
  {/* 4 Passos Numerados */}
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <div className="w-12 h-12 rounded-full bg-primary text-white">1</div>
      <h3>Você preenche o formulário</h3>
    </div>
    <div>
      <div className="w-12 h-12 rounded-full bg-primary text-white">2</div>
      <h3>Nosso time analisa previamente seu domínio</h3>
    </div>
    <div>
      <div className="w-12 h-12 rounded-full bg-primary text-white">3</div>
      <h3>Agendamos um diagnóstico online</h3>
    </div>
    <div>
      <div className="w-12 h-12 rounded-full bg-primary text-white">4</div>
      <h3>Você recebe um raio-x técnico da sua infraestrutura</h3>
    </div>
  </div>
  
  {/* Mensagem Final */}
  <p>Se fizer sentido avançar, conversamos sobre os próximos passos.</p>
  <p>Se não fizer, você sai com clareza.</p>
</section>
```
**O que é?** Mostra o processo passo a passo.

---

### 📍 SEÇÃO 7: FORMULÁRIO (Linha ~779-1041)
```jsx
<section className="container py-16 lg:py-24" ref={formRef}>
  <h2>Formulário</h2>
  <p>Solicite seu Raio-X de Rastreamento</p>
  
  <Card className="p-10 lg:p-14">
    <form onSubmit={handleFormSubmit} className="space-y-6">
      
      {/* Campo 1: Nome */}
      <div>
        <label>Nome</label>
        <input type="text" name="name" value={formData.name} onChange={handleFormChange} />
      </div>
      
      {/* Campo 2: Empresa */}
      <div>
        <label>Empresa</label>
        <input type="text" name="company" value={formData.company} onChange={handleFormChange} />
      </div>
      
      {/* Campo 3: Domínio */}
      <div>
        <label>Domínio</label>
        <input type="url" name="domain" value={formData.domain} onChange={handleFormChange} />
      </div>
      
      {/* Campo 4: Email */}
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleFormChange} />
      </div>
      
      {/* Campo 5: WhatsApp */}
      <div>
        <label>WhatsApp</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} />
      </div>
      
      {/* Campo 6: Investimento mensal em mídia */}
      <div>
        <label>Investimento mensal em mídia</label>
        <select name="mediaInvestment" value={formData.mediaInvestment} onChange={handleFormChange}>
          <option value="1-5K">R$ 1-5K/mês</option>
          <option value="5-10K">R$ 5-10K/mês</option>
          <option value="10-50K">R$ 10-50K/mês</option>
          <option value="50K+">R$ 50K+/mês</option>
        </select>
      </div>
      
      {/* Campo 7: Faturamento mensal */}
      <div>
        <label>Faturamento mensal</label>
        <select name="revenue" value={formData.revenue} onChange={handleFormChange}>
          <option value="10-50K">R$ 10-50K/mês</option>
          <option value="50-120K">R$ 50-120K/mês</option>
          <option value="120-240K">R$ 120-240K/mês</option>
          <option value="240K+">R$ 240K+/mês</option>
        </select>
      </div>
      
      {/* Botão Enviar */}
      <Button type="submit" disabled={isSubmitting || submitted}>
        {isSubmitting ? "Preparando sua análise..." : "Quero analisar meu tracking"}
      </Button>
    </form>
    
    {/* Loading State */}
    {isSubmitting && <div>Preparando sua análise...</div>}
    
    {/* Success State */}
    {submitted && <div>Análise Recebida! Redirecionando para o WhatsApp...</div>}
  </Card>
</section>
```
**O que é?** Formulário principal para capturar leads.

---

### 📍 SEÇÃO 8: POSICIONAMENTO (Linha ~1046-1084)
```jsx
<section className="container py-16 lg:py-24">
  <h2>Posicionamento</h2>
  
  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
    <p>A Prince não é uma agência de tráfego.</p>
    <p>Somos uma empresa de tecnologia especializada em infraestrutura de dados para e-commerce.</p>
    <p>Trabalhamos na camada abaixo da mídia — onde a maioria não olha — mas onde a eficiência realmente começa.</p>
    <p>Se existe dinheiro ficando na mesa por falha de dados, nós vamos mostrar.</p>
    
    <Button onClick={handleCTAClick}>Solicitar Diagnóstico</Button>
  </div>
</section>
```
**O que é?** Posiciona a marca e oferece último CTA.

---

### 📍 SEÇÃO 9: MARCAS ATENDIDAS (Linha ~1089-1142)
```jsx
<section className="container py-16 lg:py-24">
  <h2>Marcas que já passaram por esse mesmo Raio-X</h2>
  
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      {
        // MARCA 1: We Pink
        // INSTRUÇÃO: Substitua a URL abaixo pela URL da logo da We Pink
        logoUrl: "https://...",
        altText: "We Pink"
      },
      {
        // MARCA 2
        // INSTRUÇÃO: Substitua a URL abaixo pela URL da logo
        logoUrl: "",
        altText: "Marca 2"
      },
      // ... mais marcas
    ].map((brand, index) => (
      <div key={index}>
        {brand.logoUrl ? (
          <img src={brand.logoUrl} alt={brand.altText} className="h-16 max-w-full object-contain" />
        ) : (
          <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
            <span>Logo aqui</span>
          </div>
        )}
      </div>
    ))}
  </div>
</section>
```
**O que é?** Mostra as marcas que já usaram o serviço.

---

### 📍 BOTÃO FLUTUANTE WHATSAPP (Linha ~1144+)
```jsx
<a href="https://wa.me/5535984341260" target="_blank" className="fixed bottom-6 right-6 bg-[#25D366]">
  {/* Ícone WhatsApp */}
</a>
```
**O que é?** Botão flutuante no canto inferior direito para contato via WhatsApp.

---

## 🎯 RESUMO DAS SEÇÕES

| Seção | Nome | Objetivo |
|-------|------|----------|
| 1 | Hero | Apresentar o produto e fazer primeiro CTA |
| 2 | O Problema | Explicar os problemas com rastreamento |
| 3 | O Que É | Detalhar o diagnóstico |
| 4 | Por Que Importa | Mostrar valor e impacto |
| 5 | Para Quem É | Definir público-alvo |
| 6 | Como Funciona | Explicar processo em 4 passos |
| 7 | Formulário | Capturar leads |
| 8 | Posicionamento | Diferenciar a marca |
| 9 | Marcas | Social proof com clientes |

---

## 🔗 COMO MODIFICAR

### Para mudar uma copy/texto:
1. Localize a seção desejada
2. Encontre o `<h2>`, `<p>`, `<span>` ou `<li>` com o texto
3. Substitua o texto mantendo as tags HTML

### Para adicionar um novo campo no formulário:
1. Adicione no `formData` (linha ~18)
2. Adicione a validação em `handleFormSubmit` (linha ~63)
3. Adicione no payload (linha ~72)
4. Adicione o campo HTML (linha ~843+)

### Para adicionar mais marcas:
1. Copie um bloco de marca (linhas ~1098-1103)
2. Cole após o último bloco
3. Substitua `logoUrl` pela URL da nova logo
4. Substitua `altText` pelo nome da marca

---

## 📞 CONTATO WHATSAPP
O número usado em toda a página é: **5535984341260**

Para mudar, procure por `wa.me/5535984341260` e substitua pelo seu número.

---

**Última atualização:** 12 de Fevereiro de 2026
