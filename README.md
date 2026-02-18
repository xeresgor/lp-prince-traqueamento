# 🎯 Prince Ads - Raio-X de Rastreamento para E-commerce

Landing Page profissional para apresentar o serviço de diagnóstico técnico de infraestrutura de dados para e-commerce.

## 📋 Sobre o Projeto

A **Prince Ads** é uma empresa de tecnologia especializada em infraestrutura de dados para e-commerce. Esta Landing Page apresenta o serviço de **Raio-X de Rastreamento**, um diagnóstico técnico que analisa a estrutura de captura de eventos e identifica gargalos que podem estar prejudicando a performance do tráfego pago.

### 🎨 Design
- **Filosofia**: Organic Modernism com influência Bauhaus Contemporary
- **Cores Principais**: Verde Prince (#47ad84) e Verde Petróleo (#0e1d23)
- **Framework**: React + Vite + Tailwind CSS
- **Componentes**: Shadcn UI

---

## 🚀 Seções da Landing Page

| # | Seção | Descrição |
|---|-------|-----------|
| 1 | **Hero** | Apresentação do Raio-X com lista de benefícios |
| 2 | **O Problema** | Explica os problemas com rastreamento inadequado |
| 3 | **O Que É Esse Raio-X** | Detalha o diagnóstico técnico oferecido |
| 4 | **Por Que Isso Importa** | Mostra o valor e impacto da solução |
| 5 | **Para Quem É** | Define o público-alvo ideal |
| 6 | **Como Funciona** | Explica o processo em 4 passos |
| 7 | **Formulário** | Captura de leads com 7 campos |
| 8 | **Posicionamento** | Diferenciação da marca |
| 9 | **Marcas Atendidas** | Social proof com clientes |

---

## 🛠️ Tecnologias Utilizadas

```json
{
  "Frontend": [
    "React 19.2.1",
    "TypeScript 5.6.3",
    "Vite 7.1.9",
    "Tailwind CSS 4.1.14",
    "Shadcn UI",
    "Lucide React (Ícones)",
    "Framer Motion (Animações)"
  ],
  "Build": [
    "Vite",
    "PostCSS",
    "Autoprefixer"
  ],
  "Gerenciamento": [
    "pnpm 10.18.1",
    "Git"
  ]
}
```

---

## 📦 Instalação e Setup Local

### Pré-requisitos
- Node.js 18+ ou superior
- pnpm (recomendado) ou npm

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/xeresgor/lp-prince-traqueamento.git
cd lp-prince-traqueamento
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
pnpm dev
# ou
npm run dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

---

## 🏗️ Build para Produção

```bash
# Build da aplicação
pnpm build
# ou
npm run build

# Visualizar build localmente
pnpm preview
# ou
npm run preview
```

A pasta `dist` contém os arquivos prontos para deploy.

---

## 📝 Estrutura do Projeto

```
lp-prince-traqueamento/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   └── ui/         # Componentes Shadcn UI
│   │   ├── pages/
│   │   │   └── Home.tsx    # 🔴 PÁGINA PRINCIPAL (Landing Page)
│   │   ├── contexts/        # Context API
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilitários
│   │   ├── index.css       # Estilos globais
│   │   └── main.tsx        # Entrada da aplicação
│   ├── index.html          # HTML principal
│   └── vite.config.ts      # Configuração Vite
├── server/                  # Backend (Express)
├── shared/                  # Código compartilhado
├── ESTRUTURA_COMENTADA.md  # 📖 Documentação detalhada
├── README.md               # Este arquivo
├── package.json            # Dependências
└── tsconfig.json           # Configuração TypeScript
```

---

## 🔧 Modificações Comuns

### 1. Mudar o Número de WhatsApp
Procure por `5535984341260` no arquivo `client/src/pages/Home.tsx` e substitua pelo seu número.

**Exemplo:**
```javascript
// Antes
window.open(`https://wa.me/5535984341260?text=${message}`, "_blank");

// Depois
window.open(`https://wa.me/SEU_NUMERO_AQUI?text=${message}`, "_blank");
```

### 2. Adicionar Logos das Marcas Atendidas
No arquivo `client/src/pages/Home.tsx`, procure pela **Seção 9: MARCAS ATENDIDAS** (linha ~1097).

Substitua as URLs vazias pelas URLs das suas logos:
```javascript
{
  // MARCA 2
  // INSTRUÇÃO: Substitua a URL abaixo pela URL da logo
  logoUrl: "https://seu-dominio.com/logos/marca-2-logo.png",
  altText: "Marca 2"
}
```

### 3. Modificar Textos/Copys
Todos os textos estão no arquivo `client/src/pages/Home.tsx`. Procure pelo texto que deseja mudar e substitua mantendo as tags HTML.

### 4. Adicionar Novos Campos ao Formulário
1. Adicione o campo no estado `formData` (linha ~52)
2. Adicione na validação (linha ~126)
3. Adicione no payload (linha ~72)
4. Adicione o HTML do campo (linha ~843+)

---

## 📖 Documentação Detalhada

Para entender a estrutura completa do código, consulte o arquivo **ESTRUTURA_COMENTADA.md** que contém:
- Explicação de cada seção
- Explicação de cada função
- Como modificar elementos
- Exemplos práticos

---

## 🚀 Deploy no GitHub Pages

### Opção 1: Deploy Automático (Recomendado)

1. **Crie um repositório no GitHub**
   - Nome: `lp-prince-traqueamento`
   - Visibilidade: Public

2. **Configure o repositório remoto**
```bash
git remote add origin https://github.com/xeresgor/lp-prince-traqueamento.git
git branch -M main
git push -u origin main
```

3. **Configure GitHub Pages**
   - Vá para **Settings** → **Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` / `/(root)`
   - Clique em **Save**

4. **Seu site estará em:**
```
https://xeresgor.github.io/lp-prince-traqueamento/
```

### Opção 2: Deploy Manual

1. **Faça o build**
```bash
pnpm build
```

2. **Copie a pasta `dist` para o repositório**
```bash
cp -r dist/* .
```

3. **Commit e push**
```bash
git add .
git commit -m "Deploy: Landing Page"
git push origin main
```

---

## 📱 Responsividade

A Landing Page é totalmente responsiva e foi testada em:
- ✅ Desktop (1920px, 1440px, 1024px)
- ✅ Tablet (768px)
- ✅ Mobile (375px, 414px)

---

## ⚡ Performance

- **Lazy Loading**: Imagens carregam sob demanda
- **Code Splitting**: Vite otimiza automaticamente
- **CSS Purging**: Tailwind remove CSS não utilizado
- **Minificação**: Automática no build

---

## 🎯 Funcionalidades

- ✅ Barra de progresso de scroll
- ✅ Animações suaves (Framer Motion)
- ✅ Carrossel responsivo em mobile
- ✅ Formulário com validação
- ✅ Integração com WhatsApp
- ✅ Dark mode ready (Tailwind)
- ✅ Acessibilidade (ARIA labels, semantic HTML)

---

## 📞 Contato e Suporte

**WhatsApp**: [5535984341260](https://wa.me/5535984341260)

---

## 📄 Licença

Este projeto é propriedade da Prince Ads. Todos os direitos reservados.

---

## 🤝 Contribuições

Para sugestões ou melhorias, entre em contato via WhatsApp.

---

## 📅 Histórico de Atualizações

### v1.0.0 - 12 de Fevereiro de 2026
- ✅ Primeira versão da Landing Page
- ✅ 9 seções completas
- ✅ Formulário de captura
- ✅ Integração WhatsApp
- ✅ Documentação completa
- ✅ Código comentado

---

## 🔗 Links Úteis

- [Documentação Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)
- [React Documentation](https://react.dev)

---

**Desenvolvido com ❤️ para Prince Ads**
