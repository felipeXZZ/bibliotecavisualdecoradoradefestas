/* =====================================================================
 *  CONTEÚDO DA LANDING PAGE — "Biblioteca Visual da Decoradora de Festas"
 *  Básico R$ 10,00 (75 projetos de festa infantil)
 *  Completo R$ 29,90 (300 projetos, todas as ocasiões, 4 ferramentas + 5 bônus)
 *  Popup: 19,00
 *
 *  Mesma ordem de seções da página de +150 Festas Infantis; duas seções
 *  novas: Ocasiões (`occasions`) e Ferramentas (`tools`).
 * =====================================================================
 *  Este é o ÚNICO arquivo que você precisa editar para trocar textos,
 *  imagens, preços, temas e perguntas. Nenhum componente tem copy fixa.
 *
 *  COMO TROCAR UMA IMAGEM: cada item visual tem um campo `src` opcional.
 *  Enquanto ele estiver vazio/ausente, a página desenha uma ilustração
 *  vetorial da festa (paleta do próprio projeto). Preencha o `src` com o
 *  caminho de um arquivo em /public (ex.: "/festas/safari-boho.webp") e a
 *  foto real entra no lugar, sem mexer no layout.
 * ===================================================================== */

/* ------------------------------------------------------------------ */
/*  CHECKOUT                                                           */
/*  Se um preço mudar aqui, mude também o texto do preço na seção de   */
/*  planos, no popup, no CTA final e o valor do InitiateCheckout       */
/*  (Tracking.tsx).                                                    */
/* ------------------------------------------------------------------ */

/**
 * Checkout do PLANO COMPLETO (R$ 29,90 — 300 projetos + ferramentas + 5 bônus).
 *
 * ⚠️ O preço precisa estar em R$ 29,90 no painel da GG (é o valor com que
 * este link foi criado).
 */
export const CHECKOUT_URL =
  "https://ggcheckout.app/checkout/v5/wsKX5ZPYh6Vs8u5DaFos";

/**
 * Checkout do BÁSICO (R$ 10,00 — só os 75 projetos de festa infantil).
 *
 * ⚠️ O preço precisa estar em R$ 10,00 no painel da GG (é o valor com que
 * este link foi criado). Confira também o que ele entrega.
 */
export const BASIC_CHECKOUT_URL =
  "https://ggcheckout.app/checkout/v5/2t43sY2SvOtEE6VNDaql";

/**
 * Checkout do UPSELL (R$ 19,00 — Plano Completo com os 5 bônus). É o destino
 * do "sim" no popup, nos dois caminhos: o clique no plano Básico e o
 * automático. Fechar o popup encerra o funil e devolve a pessoa à página.
 *
 * ⚠️ O preço precisa estar em R$ 19,00 no painel da GG (é o valor com que
 * este link foi criado).
 */
export const UPSELL_CHECKOUT_URL =
  "https://ggcheckout.app/checkout/v5/6zQ6vVQylpzwOWCX2zc1";

/**
 * Back-redirect: página para onde o visitante é levado ao apertar "voltar".
 * ⚠️ Enquanto for o placeholder abaixo, o redirect fica DESLIGADO (para não
 * mandar ninguém a um domínio inexistente). Troque pela URL real para ativar.
 */
export const BACK_REDIRECT_URL = "https://meubackredirect.com.br"; // REVISAR

/** Domínio público da página (metadados, sitemap e robots). */
export const SITE_URL = "https://150festasinfantis.vercel.app"; // REVISAR

/* ------------------------------------------------------------------ */
/*  Marca / rodapé                                                     */
/* ------------------------------------------------------------------ */
/** É a mesma marca da outra página (Decoração Sem Complicação). */
export const BRAND_NAME = "Decoração Sem Complicação";
export const BRAND_YEAR = 2026;

/**
 * RODAPÉ — curto de propósito, igual ao da outra página: só a linha de
 * direitos e o aviso de não-afiliação. Sem menu de links, para o último
 * elemento da página não competir com o botão de compra logo acima.
 */
export const footer = {
  rights: "Todos os direitos reservados.",
  disclaimer:
    "Este site não é afiliado ao Facebook ou Meta. Resultados podem variar de pessoa para pessoa.",
};

/**
 * Aviso curto reaproveitado nas seções que citam custo/quantidade.
 * Some da página inteira se você apagar o texto.
 */
export const ESTIMATE_NOTE =
  "Custos, quantidades e medidas são referências aproximadas e podem variar conforme projeto, fornecedor e região.";

/* ------------------------------------------------------------------ */
/*  1. Barra de urgência (topo)                                        */
/* ------------------------------------------------------------------ */
export const urgencyBar = {
  emoji: "🔥",
  text: "Promoção acaba hoje,",
  /**
   * true → anexa ao texto a DATA DO DIA em que a pessoa abre o site (lida no
   * navegador dela, no fuso dela). É a urgência "evergreen": a data sempre
   * bate com o dia da visita.
   *
   * ⚠️ Só faça sentido se a promoção realmente for renovada todo dia. Se o
   * preço não muda nunca, "acaba hoje" é uma afirmação que não se cumpre —
   * nesse caso deixe `false` e use um texto neutro (ex.: "Oferta especial
   * disponível hoje") ou um prazo real via `deadline`.
   */
  showTodayDate: true,
  /**
   * Contador REAL, opcional e independente do de cima. Com `null` não aparece
   * contador nenhum. Para ligar, use uma data ISO real de fim da promoção,
   * ex.: "2026-08-31T23:59:59-03:00". Quando o prazo passa, o contador some —
   * nunca reinicia sozinho.
   */
  deadline: null as string | null,
  countdownLabel: "Termina em",
};

/* ------------------------------------------------------------------ */
/*  2. Hero / primeira dobra                                           */
/* ------------------------------------------------------------------ */
export const hero = {
  /**
   * EYECATCHER acima do título — pílula branca com estrelas.
   * `{{trecho}}` sai colorido (ver <Highlight/>).
   *
   * ⚠️ REVISAR: o selo afirma número de compradoras E nota de avaliação.
   * O 1.847 veio da oferta de festas infantis — troque pelo número REAL de
   * decoradoras desta oferta assim que tiver. Dado inventado aqui é
   * publicidade enganosa (CDC, art. 37).
   *
   * O selo do HeroSection é dimensionado para ~37 caracteres.
   */
  badge: "Aprovado por {{1.847+ decoradoras}}",
  /** Estrelas amarelas do selo. 0 = escondidas (entra um ícone dourado). */
  badgeStars: 5,
  /** Rótulo pequeno logo acima do título. Texto vazio ("") tira a linha. */
  eyebrow: "",
  // [[ ]] = número em destaque 1,5x; {{ }} = destaque colorido. Ver <Highlight/>.
  headline: "Biblioteca Visual da\n{{Decoradora de Festas}}",
  subheadline:
    "Escolha a ocasião, abra a ficha e monte sem improviso. 300 projetos com materiais, quantidades, custo da montagem e preço sugerido de venda.",
  /**
   * Parágrafos de contexto — cada item vira um parágrafo. No celular entram
   * depois do mockup; no desktop, na coluna de texto. Array vazio tira o bloco.
   */
  // Desligado a pedido (poluía a hero). Ex. do texto que estava aqui:
  // "Você já sabe montar. O que atrasa é lembrar quantos balões o arco de
  // 3 metros leva..." / "A Biblioteca resolve isso com ficha..."
  context: [] as string[],
  cta: "Quero garantir agora",
  /**
   * ENTREGA — única linha abaixo do CTA, com os ícones do WhatsApp e do
   * Gmail. `[whatsapp]` e `[email]` são substituídos pelo ícone colorido da
   * marca seguido do nome em NEGRITO (mapa em HeroSection.tsx). Texto vazio
   * ("") tira a linha.
   */
  delivery:
    "Você recebe tudo na hora, direto no seu [whatsapp] e no seu [email]",
  /**
   * ⛔ DESLIGADO — preço como segunda linha DENTRO do botão da hero. Para
   * ligar, escreva o texto aqui (`{{trecho}}` sai em negrito).
   */
  priceHint: "",
  /**
   * LISTA DE REFORÇO — uma linha por item, com ícone à esquerda.
   *
   * `icon` aceita: check | cart | wallet | steps | bolt (mapa em
   * HeroSection.tsx) — ou um EMOJI direto. Mantenha cada linha CURTA: se a
   * frase quebrar em duas linhas, a coluna de ícones perde o alinhamento.
   * Array vazio faz o bloco sumir.
   */
  // Desligado a pedido (poluía a hero). Itens que estavam aqui: 300 projetos
  // por ocasião, materiais com quantidade, custo e preço sugerido, paletas,
  // consulta pelo celular, acesso imediato.
  perks: [] as { icon: string; text: string }[],
  /**
   * Mockup do produto na primeira dobra. É o elemento de LCP da página.
   *
   * ⚠️ REVISAR: a arte ainda é a da oferta de festas infantis. A nova é o
   * material aberto no CELULAR, apoiado ao lado de uma montagem em andamento
   * — no meio do trabalho, não numa mesa vazia. Troque `src`, `width` e
   * `height` quando ela existir.
   */
  /* TESTE: imagem nova (imgur kNgJYzj). Pra voltar à anterior:
     src "/FESTAMOCKUPHERO.webp", width 1254, height 1254. */
  mockup: {
    src: "/hero-teste.jpeg",
    width: 1448,
    height: 1086,
    alt: "Biblioteca Visual da Decoradora de Festas aberta no celular: fichas de projetos com materiais, quantidades, custo e preço sugerido",
  },
};

/* ------------------------------------------------------------------ */
/*  2.3 Ocasiões — "não é só festa infantil"  [NOVA]                   */
/* ------------------------------------------------------------------ */

/**
 * OCASIÕES — vem ANTES da vitrine de propósito: sem ela, a pessoa lê "300
 * projetos" e entende "mais do mesmo". Se a grade de projetos vier primeiro,
 * ela já formou a ideia de que é tudo festa infantil.
 *
 * Cada card tem foto e contador, ambos OPCIONAIS:
 *  - `src`: foto da ocasião em /public (quadrada). Vazio = ícone (emoji).
 *  - `count`: quantos projetos daquela ocasião existem no material. Vazio =
 *    o contador não aparece.
 *
 * ⚠️ REVISAR: preencha `count` com o número REAL de fichas de cada ocasião
 * (a soma precisa bater com os 300) e as fotos. Contador inventado é
 * afirmação falsa sobre o produto.
 */
export const occasions = {
  eyebrow: "Não é só festa infantil",
  title: "Todas as ocasiões que você atende — {{e as que você ainda recusa}}",
  subtitle:
    "Projetos prontos pra cada tipo de festa, com a composição, os materiais e as quantidades de cada uma.",
  /** Sufixo do contador: "24 projetos". */
  countLabel: "projetos",
  items: [
    { name: "Festa infantil", emoji: "🎈", src: "", count: 0 },
    { name: "Aniversário adulto", emoji: "🥂", src: "", count: 0 },
    { name: "15 anos", emoji: "👑", src: "", count: 0 },
    { name: "Chá de bebê", emoji: "🍼", src: "", count: 0 },
    { name: "Casamento", emoji: "💍", src: "", count: 0 },
    { name: "Chá revelação", emoji: "🎀", src: "", count: 0 },
    { name: "Noivado", emoji: "💐", src: "", count: 0 },
    { name: "Batizado", emoji: "🕊️", src: "", count: 0 },
    { name: "Bodas", emoji: "🥂", src: "", count: 0 },
    { name: "Formatura", emoji: "🎓", src: "", count: 0 },
    { name: "Datas comemorativas", emoji: "🎄", src: "", count: 0 },
    { name: "Corporativo", emoji: "💼", src: "", count: 0 },
  ],
  closing:
    "Toda vez que chega um pedido de 15 anos ou de casamento e você responde que só faz infantil, não é um cliente que passa — é o tipo de festa que paga mais.",
  cta: "Ver todas as ocasiões",
};

/* ------------------------------------------------------------------ */
/*  2.5 Vitrine — carrossel duplo logo abaixo da hero                  */
/* ------------------------------------------------------------------ */

/**
 * VITRINE ("O que você vai receber") — as pranchas reais do produto passando
 * em duas faixas, uma para cada lado, logo depois da hero.
 *
 * É a prova do produto no momento em que a promessa ainda está quente: a
 * pessoa acabou de ler "150 festas prontas para copiar" e vê, sem rolar nem
 * clicar, as páginas de verdade — antes/depois, lista de materiais, custo e
 * ordem de montagem.
 *
 * COMO TROCAR/ADICIONAR UMA PRANCHA: coloque a imagem grande em
 * `_originais-carrosel/` com o nome que quer na URL (ex.: `projeto-133-circo.png`),
 * rode `npm run carrosel` (gera as duas larguras em /public/carrosel) e
 * acrescente o item abaixo com esse mesmo nome no `slug`.
 *
 * A vitrine divide a lista sozinha entre as duas faixas: os itens de índice
 * PAR vão para a faixa de cima, os ÍMPARES para a de baixo. Por isso a ordem
 * abaixo alterna temas de menino/menina e econômico/completo — assim as duas
 * faixas ficam variadas, e não uma "faixa rosa" e uma "faixa verde".
 */
export const showcase = {
  eyebrow: "Veja por dentro do material",
  title: "O que você vai {{receber}}",
  paragraph:
    "Veja alguns dos 300 projetos prontos: o que comprar, quanto comprar, quanto custa e quanto cobrar.",
  cta: "Ver os 300 projetos",
  /** Completa o texto alternativo de cada prancha, depois do nome. */
  itemCaption: "composição, lista de materiais, custo e preço sugerido",
  /**
   * ⚠️ REVISAR: as pranchas abaixo ainda são todas de festa INFANTIL (as que
   * já existem em /public/carrosel). A copy pede os exemplos variando a
   * ocasião — assim que as fichas existirem, gere as imagens com
   * `npm run carrosel` e troque/acrescente, por exemplo:
   *   Projeto 112 — Casamento Verde Oliva   (projeto-112-casamento-verde-oliva)
   *   Projeto 168 — 15 Anos Dourado         (projeto-168-15-anos-dourado)
   *   Projeto 204 — Chá Revelação Neutro    (projeto-204-cha-revelacao-neutro)
   *   Projeto 231 — Bodas de Prata          (projeto-231-bodas-de-prata)
   *   Projeto 260 — Formatura Clássica      (projeto-260-formatura-classica)
   * Pares vão para a faixa de cima e ímpares para a de baixo: alterne as
   * ocasiões para as duas faixas ficarem variadas.
   */
  items: [
    { code: "Projeto 009", name: "Safari Colorido", slug: "projeto-009-safari-colorido" },
    { code: "Projeto 074", name: "Bailarina Premium", slug: "projeto-074-bailarina-premium" },
    { code: "Projeto 019", name: "Dino Jurassic", slug: "projeto-019-dino-jurassic" },
    { code: "Projeto 045", name: "Castelo Encantado", slug: "projeto-045-castelo-encantado" },
    { code: "Projeto 084", name: "Oceano Azul", slug: "projeto-084-oceano-azul" },
    { code: "Projeto 063", name: "Arco-íris Rosa", slug: "projeto-063-arco-iris-rosa" },
    { code: "Projeto 100", name: "Corrida", slug: "projeto-100-corrida" },
    { code: "Projeto 051", name: "Borboletas Rosa", slug: "projeto-051-borboletas-rosa" },
    { code: "Projeto 098", name: "Astronauta Premium", slug: "projeto-098-astronauta-premium" },
    { code: "Projeto 077", name: "Ursinho Rosa", slug: "projeto-077-ursinho-rosa" },
    { code: "Projeto 029", name: "Celeiro", slug: "projeto-029-celeiro" },
    { code: "Projeto 027", name: "Fazendinha Colorida", slug: "projeto-027-fazendinha-colorida" },
    { code: "Projeto 012", name: "Dino Verde", slug: "projeto-012-dino-verde" },
    { code: "Projeto 082", name: "Ursinho Premium", slug: "projeto-082-ursinho-premium" },
    { code: "Projeto 090", name: "Fundo do Mar Premium", slug: "projeto-090-fundo-do-mar-premium" },
    { code: "Projeto 030", name: "Fazendinha Premium", slug: "projeto-030-fazendinha-premium" },
  ],
};

/* ------------------------------------------------------------------ */
/*  TEMAS — paleta de cada tema (usada na ilustração dos cards)         */
/*  cores: [principal, secundária, apoio, fundo claro]                  */
/* ------------------------------------------------------------------ */
export type Theme = {
  id: string;
  name: string;
  colors: [string, string, string, string];
};

export const themes: Theme[] = [
  { id: "safari", name: "Safari", colors: ["#8A7248", "#C4AE86", "#6E8560", "#EFE6D6"] },
  { id: "safari-boho", name: "Safari Boho", colors: ["#A98E6B", "#D8C3A5", "#7C8F6E", "#F3EADD"] },
  { id: "princesa", name: "Princesa", colors: ["#D98BA8", "#F0C3D2", "#C9A227", "#FBECF1"] },
  { id: "dinossauros", name: "Dinossauros", colors: ["#4F7F52", "#86A85C", "#B8862F", "#E9EFDF"] },
  { id: "espaco", name: "Espaço", colors: ["#3F4C74", "#7C8CB5", "#E7B44C", "#E4E7F0"] },
  { id: "fazendinha", name: "Fazendinha", colors: ["#C4564C", "#E0B84C", "#7E9668", "#F5E9D8"] },
  { id: "jardim-encantado", name: "Jardim Encantado", colors: ["#D98BA8", "#EFC9B4", "#7E9668", "#FAEDE6"] },
  // O terceiro tom não pode ser quase preto: na ilustração ele vira balão, e
  // balão preto lê como "buraco" no arco em vez de decoração.
  { id: "futebol", name: "Futebol", colors: ["#3C8259", "#E8E4DC", "#5F6B76", "#E6EFE7"] },
  { id: "carrinhos", name: "Carrinhos", colors: ["#C4564C", "#4E7CA8", "#E0B84C", "#EDE7DE"] },
  { id: "construcao", name: "Construção", colors: ["#D79A28", "#6E6A63", "#C4564C", "#F1EADC"] },
  { id: "bailarina", name: "Bailarina", colors: ["#DE9CAE", "#F2D3D8", "#C9A227", "#FBEFF1"] },
  { id: "circo", name: "Circo", colors: ["#C4564C", "#E0B84C", "#4E7CA8", "#F4E9DC"] },
  { id: "bosque", name: "Bosque", colors: ["#6E8560", "#A9927A", "#C9A227", "#EBEDE1"] },
  { id: "fundo-do-mar", name: "Fundo do Mar", colors: ["#4A90A4", "#8FC4CE", "#E0B84C", "#E2EEF0"] },
  { id: "arco-iris", name: "Arco-íris", colors: ["#E07A63", "#E0B84C", "#7E9668", "#F7ECE2"] },
  { id: "ursinho", name: "Ursinho", colors: ["#A9866B", "#D9C0A8", "#8FA0B8", "#F2E9DF"] },
  { id: "borboletas", name: "Borboletas", colors: ["#D98BA8", "#C5A3C9", "#E0B84C", "#F8ECF2"] },
  { id: "astronauta", name: "Astronauta", colors: ["#48587F", "#8E9CBE", "#E0B84C", "#E5E8F1"] },
  { id: "cowboy", name: "Cowboy", colors: ["#A9724A", "#D8B98C", "#6E8560", "#F1E6D6"] },
  { id: "tropical", name: "Tropical", colors: ["#3F8F7A", "#E0B84C", "#E07A63", "#E4F0EA"] },
  { id: "dinossauro-baby", name: "Dinossauro Baby", colors: ["#8FBF9A", "#CFE3CC", "#E0B84C", "#EEF6EE"] },
  { id: "minimalista", name: "Festa Minimalista", colors: ["#B7A99A", "#E3DAD0", "#C9A227", "#F5F1EC"] },
  { id: "primeiro-ano", name: "Festa de 1 Ano", colors: ["#E3A9A0", "#F0D6C6", "#C9A227", "#FBF0EA"] },
];

/** Busca a paleta de um tema pelo id (fallback neutro se não existir). */
export function getTheme(id: string): Theme {
  return (
    themes.find((t) => t.id === id) ?? {
      id,
      name: id,
      colors: ["#B7A99A", "#E3DAD0", "#C9A227", "#F5F1EC"],
    }
  );
}

/* ------------------------------------------------------------------ */
/*  3. Galeria — "veja alguns dos projetos"                            */
/* ------------------------------------------------------------------ */

/** Faixa de custo do projeto — sempre tratada como ESTIMATIVA. */
export type Tier = "economica" | "intermediaria" | "completa";

export const tierLabels: Record<Tier, { label: string; budget: string }> = {
  economica: { label: "Econômica", budget: "Custo aprox.: até R$300" },
  intermediaria: { label: "Intermediária", budget: "Custo aprox.: até R$500" },
  completa: { label: "Completa", budget: "Montagem mais completa" },
};

export const gallery = {
  eyebrow: "Veja alguns dos projetos",
  title: "150 festas para diferentes {{temas, espaços e orçamentos}}",
  paragraph:
    "Encontre uma festa que combine com seu filho, seu espaço e o quanto você quer gastar.",
  // `src` opcional: preencha com a foto real da festa (vertical ou quadrada).
  items: [
    { code: "Projeto 012", theme: "safari-boho", tier: "intermediaria" as Tier, src: "" },
    { code: "Projeto 027", theme: "jardim-encantado", tier: "economica" as Tier, src: "" },
    { code: "Projeto 041", theme: "dinossauros", tier: "intermediaria" as Tier, src: "" },
    { code: "Projeto 058", theme: "fazendinha", tier: "economica" as Tier, src: "" },
    { code: "Projeto 073", theme: "fundo-do-mar", tier: "completa" as Tier, src: "" },
    { code: "Projeto 089", theme: "futebol", tier: "economica" as Tier, src: "" },
    { code: "Projeto 101", theme: "borboletas", tier: "intermediaria" as Tier, src: "" },
    { code: "Projeto 117", theme: "astronauta", tier: "completa" as Tier, src: "" },
    { code: "Projeto 132", theme: "circo", tier: "intermediaria" as Tier, src: "" },
    { code: "Projeto 149", theme: "arco-iris", tier: "economica" as Tier, src: "" },
  ],
  // Faixa de temas que passa em loop abaixo da galeria.
  stripLabel: "E ainda: princesa, espaço, bosque, cowboy, tropical, ursinho, bailarina…",
  strip: [
    "princesa",
    "espaco",
    "bosque",
    "cowboy",
    "tropical",
    "ursinho",
    "bailarina",
    "carrinhos",
    "construcao",
    "safari",
    "dinossauro-baby",
    "minimalista",
    "primeiro-ano",
  ],
  cta: "Ver os 150 projetos",
  note: ESTIMATE_NOTE,
};

/* ------------------------------------------------------------------ */
/*  4. Vídeo                                                           */
/* ------------------------------------------------------------------ */
export const video = {
  eyebrow: "Veja por dentro",
  title: "Dá uma olhada em como os projetos funcionam",
  subtitle:
    "Em menos de um minuto você entende como escolher sua festa, descobrir o que comprar e seguir a montagem.",
  /**
   * Vídeo demonstrativo. Deixe `mediaId: ""` para exibir o espaço reservado
   * (placeholder). Preencha com o ID da mídia no Wistia para publicar o vídeo.
   */
  mediaId: "", // REVISAR: gravar e subir o vídeo da nova oferta
  aspect: 0.5625, // 9/16 (vertical)
  placeholder: "[INSERIR VÍDEO DEMONSTRATIVO REAL]",
  cta: "Quero começar minha festa",
};

/* ------------------------------------------------------------------ */
/*  5. Simples assim — 3 passos                                        */
/* ------------------------------------------------------------------ */
export const steps = {
  eyebrow: "Simples assim",
  title: "Do pedido do cliente à festa montada em {{3 passos}}",
  subtitle:
    "Você não precisa criar do zero nem resolver de cabeça a cada pedido. Abre a ficha e segue.",
  items: [
    {
      n: "1",
      icon: "search" as const,
      title: "Escolha o projeto",
      desc: "Filtre por ocasião, tema, idade, faixa de custo, tamanho do espaço e paleta. Mostre pro cliente e deixe ele escolher o tema.",
    },
    {
      n: "2",
      icon: "list" as const,
      title: "Veja o que comprar e quanto cobrar",
      desc: "Materiais com quantidade exata, custo estimado e preço sugerido de venda. Você fecha o orçamento antes de gastar o primeiro real.",
    },
    {
      n: "3",
      icon: "sparkles" as const,
      title: "Monte com a ficha aberta",
      desc: "Ordem de montagem no celular, do painel à mesa. Sem parar no meio pra procurar referência.",
    },
  ],
  cta: "Quero escolher meu projeto",
};

/* ------------------------------------------------------------------ */
/*  5.5 Ferramentas de trabalho  [NOVA]                                */
/* ------------------------------------------------------------------ */

/**
 * FERRAMENTAS — vem DEPOIS dos 3 passos de propósito: primeiro a pessoa
 * entende que escolher o tema é fácil, depois descobre que o resto do
 * trabalho (precificar, orçar, formalizar, responder) também está resolvido.
 * Sem esta seção a página vende catálogo — e catálogo tem concorrente de
 * R$ 9,90 no Instagram.
 *
 * Cada ferramenta: `emoji` (no selo), `label` (nome curto), `title`, `text`
 * (uma frase) e `list` (itens `[emoji, texto]`). Mantenha tudo curto: o card
 * é lido em diagonal, não linha a linha.
 *
 * ⚠️ ENTREGA: tudo listado aqui precisa EXISTIR no dia em que o anúncio
 * subir. O GERADOR DE ORÇAMENTO EM PDF não está no MVP do aplicativo — ou ele
 * fica pronto antes do lançamento, ou sai daqui E do card do Completo
 * (`plans.premium.featureGroups`), do FAQ e do popup. Vender o que ainda não
 * existe é o caminho mais curto para reembolso e MED.
 */
export const tools = {
  eyebrow: "Não é só um catálogo",
  title: "As ferramentas que transformam o projeto em {{dinheiro fechado}}",
  subtitle:
    "Escolher o tema é só o começo. A Biblioteca também resolve preço, orçamento, contrato e conversa com o cliente.",
  items: [
    {
      emoji: "🧮",
      label: "Calculadora de preço",
      title: "Pare de chutar preço",
      text: "Preencha material, horas e deslocamento. Ela devolve o preço certo.",
      list: [
        ["💰", "Preço final e lucro em reais"],
        ["🎈", "Material rateado entre as festas"],
        ["💳", "Taxa da maquininha já descontada"],
        ["💾", "Cálculo salvo pra duplicar depois"],
      ] as [string, string][],
    },
    {
      emoji: "📄",
      label: "Orçamento em PDF",
      title: "Orçamento pronto em 2 minutos",
      text: "Escolha o projeto, confirme o preço e sai o PDF com seu nome e sua logo.",
      list: [
        ["📋", "Itens inclusos e valor"],
        ["⏳", "Prazo de validade"],
        ["🤝", "Pagamento e sinal de 50%"],
        ["📲", "Pronto pra mandar no WhatsApp"],
      ] as [string, string][],
    },
    {
      emoji: "📝",
      label: "Documentos prontos",
      title: "Formalize sem advogado",
      text: "Proteção pra quando o cliente some ou o painel volta rasgado.",
      list: [
        ["✍️", "Contrato de prestação de serviço"],
        ["🛡️", "Termo de responsabilidade por danos"],
        ["🧾", "Recibo de sinal"],
        ["✅", "Checklist de montagem e retirada"],
      ] as [string, string][],
    },
    {
      emoji: "💬",
      label: "Scripts de WhatsApp",
      title: "Respostas pras conversas que travam",
      text: "É só copiar, trocar o nome e enviar.",
      list: [
        ["👋", "Primeira resposta ao orçamento"],
        ["😬", "\"Tá caro\" sem baixar o preço"],
        ["💸", "Cobrar o sinal sem constrangimento"],
        ["🔁", "Follow-up de quem sumiu"],
        ["⭐", "Pedido de indicação pós-festa"],
      ] as [string, string][],
    },
  ],
  cta: "Quero as ferramentas",
};

/* ------------------------------------------------------------------ */
/*  6. Como é um projeto por dentro                                     */
/* ------------------------------------------------------------------ */
export const projectInside = {
  eyebrow: "Não é só uma foto bonita",
  title: "Cada projeto mostra {{como chegar ao resultado}}",
  subtitle:
    "Veja um exemplo do que você encontra ao abrir qualquer uma das 150 festas.",
  // Exemplo de página interna.
  demo: {
    code: "Projeto 037",
    name: "Safari Econômico",
    theme: "safari",
    src: "", // preencha com a foto real desta festa
    specs: [
      { label: "Espaço sugerido", value: "parede de aproximadamente 2,5 m" },
      { label: "Dificuldade", value: "fácil" },
      { label: "Orçamento", value: "econômico" },
      { label: "Montagem", value: "aproximadamente 2 horas" },
    ],
    paletteTitle: "Paleta",
    palette: [
      { name: "Verde oliva", hex: "#6E7A4A" },
      { name: "Bege", hex: "#D8C7A8" },
      { name: "Marrom", hex: "#8A6A4B" },
      { name: "Dourado", hex: "#C9A227" },
    ],
    elementsTitle: "Elementos principais",
    elements: [
      "painel",
      "cilindros",
      "balões",
      "bandejas",
      "bolo",
      "displays",
      "folhagens",
      "suportes",
    ],
  },
  includesTitle: "Você também encontra:",
  includes: [
    "referência visual",
    "lista de materiais",
    "sugestões de quantidades",
    "composição",
    "alternativas econômicas",
    "sequência de montagem",
  ],
  note: ESTIMATE_NOTE,
};

/* ------------------------------------------------------------------ */
/*  7. Diferenciação — Pinterest x projeto pronto                       */
/* ------------------------------------------------------------------ */
export const comparison = {
  title: "Pinterest mostra a festa.\n{{Nós mostramos como fazer.}}",
  subtitle:
    "Pare de juntar dezenas de referências soltas e comece com um projeto pronto.",
  cta: "Quero os projetos prontos",
  before: {
    title: "Procurar inspiração",
    items: [
      "dezenas de fotos salvas",
      "não sabe o que comprar",
      "não sabe quantidade",
      "não sabe quanto vai gastar",
      "mistura referências diferentes",
    ],
  },
  after: {
    title: "Escolher um projeto pronto",
    items: [
      "referência definida",
      "lista do que precisa",
      "paleta pronta",
      "composição pronta",
      "muito mais fácil de executar",
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  8. Bônus (5)                                                       */
/* ------------------------------------------------------------------ */
export const bonuses = {
  eyebrow: "Presentes exclusivos",
  title: "Leve também {{5 bônus}} para facilitar seu trabalho",
  subtitle:
    "Materiais complementares que resolvem a parte chata: ordem de montagem, compras, balões, prazos e lembrancinhas.",
  items: [
    {
      tag: "Bônus #1",
      title: "Manual de Montagem Passo a Passo",
      icon: "hammer" as const,
      colors: ["#D6417A", "#FCE4EC"] as [string, string],
      description:
        "Em qual ordem montar painel, cilindros, arco de balões, mesa, bolo, doces e detalhes para não perder tempo refazendo no dia da festa.",
      price: "R$ 47,00",
      src: "/bonus-1-manual-montagem-v2.webp",
    },
    {
      tag: "Bônus #2",
      title: "Checklist de Compras da Festa",
      icon: "clipboard" as const,
      colors: ["#C92E62", "#FADCE6"] as [string, string],
      description:
        "A lista para conferir antes de sair de casa e não precisar voltar na loja duas vezes no mesmo dia.",
      price: "R$ 37,00",
      src: "/bonus-2-checklist-compras-v2.webp",
    },
    {
      tag: "Bônus #3",
      title: "Guia Prático de Balões",
      icon: "balloon" as const,
      colors: ["#E0578A", "#FDE8EF"] as [string, string],
      description:
        "Combinações de cor e tamanho e as quantidades aproximadas por metro de arco, para orçar balão sem sobra e sem falta.",
      price: "R$ 40,00",
      src: "/bonus-3-guia-baloes-v2.webp",
    },
    {
      tag: "Bônus #4",
      title: "Cronograma da Festa Sem Correria",
      icon: "calendar" as const,
      colors: ["#4A1530", "#F3DDE6"] as [string, string],
      description:
        "O que resolver 30, 15, 7 e 1 dia antes de cada montagem, e o que confirmar com o cliente em cada etapa.",
      price: "R$ 34,00",
      src: "/bonus-4-cronograma-v2.webp",
    },
    {
      tag: "Bônus #5",
      title: "50 Ideias de Lembrancinhas Econômicas",
      icon: "gift" as const,
      colors: ["#0EA5E9", "#DEF1FD"] as [string, string],
      description:
        "Cinquenta opções simples para oferecer como item extra no orçamento, sem inflacionar o custo da festa.",
      price: "R$ 38,00",
      src: "/bonus-5-lembrancinhas-v2.webp",
    },
  ],
  totalLabel: "Valor total dos 5 bônus:",
  totalValue: "R$ 196,00",
  freeLabel: "Hoje: grátis",
  warning:
    "Atenção: os 5 bônus só entram junto para quem garantir o acesso agora.",
  cta: "Quero os 300 projetos + 5 bônus",
};

/* ------------------------------------------------------------------ */
/*  9. Prova social                                                    */
/* ------------------------------------------------------------------ */
/**
 * ⚠️ REVISAR: os prints e depoimentos abaixo são de MÃES da oferta de festas
 * infantis (alguns citam "+150 Festas Infantis" no texto). Troque por prints
 * de decoradoras assim que tiver os primeiros.
 *
 * ⚠️ NADA AQUI PODE SER INVENTADO.
 * Os itens abaixo são ESPAÇOS RESERVADOS. Substitua o texto do placeholder
 * e preencha `src` com o print/foto real. Enquanto `real` for false, o card
 * aparece marcado como espaço reservado — nunca como depoimento verdadeiro.
 */
export const testimonials = {
  eyebrow: "O que estão dizendo",
  title: "Veja o resultado de quem {{parou de montar no improviso}}",
  subtitle:
    "Quem trocou o \"acho que dá\" pela ficha pronta ao lado do painel.",
  /**
   * Prints de conversa (WhatsApp/Instagram) exibidos no carrossel da seção.
   *
   * `width`/`height` são os do arquivo e servem para reservar o espaço do card
   * (evita salto de layout) — os prints NÃO têm todos a mesma proporção, então
   * ao trocar uma imagem confira as medidas novas.
   */
  prints: [
    {
      src: "/prints-avaliacoes/6.webp",
      label:
        "Print de conversa no WhatsApp: cliente montou a festa da Minnie com os moldes do material e agradeceu — foto dela com a filha na frente da decoração",
      width: 1024,
      height: 1536,
    },
    {
      src: "/prints-avaliacoes/1.webp",
      label:
        "Print de cliente: comprou o guia e montou a festa da filha — foto da mesa decorada",
      width: 1122,
      height: 1402,
    },
    {
      src: "/prints-avaliacoes/2.webp",
      label:
        "Print de cliente: escolheu um tema pronto e montou a festa — foto da decoração",
      width: 1086,
      height: 1448,
    },
    {
      src: "/prints-avaliacoes/3.webp",
      label:
        "Print de cliente: o guia ajudou na organização da festa — foto do resultado final",
      width: 1122,
      height: 1402,
    },
    {
      src: "/prints-avaliacoes/4.webp",
      label:
        "Print de cliente: copiou o tema do material com facilidade — foto da decoração",
      width: 1086,
      height: 1448,
    },
  ],
  /**
   * ⚠️ Depoimentos de demonstração, escritos para o layout. Antes de publicar,
   * troque texto, nome, cidade e foto pelos de clientes reais — o selo "Compra
   * verificada" afirma um fato e só pode ficar no ar se for verdade.
   *
   * `{{trecho}}` sai em negrito dentro da aspa (ver TestimonialCard).
   */
  items: [
    {
      quote:
        "Eu já tinha orçado a decoração e só a mesa do bolo vinha {{R$ 1.200}}. Achei o guia, escolhi um tema pronto e montei tudo em casa no sábado. {{Gastei menos de R$ 300}} e ninguém acreditou que fui eu que montei.",
      name: "Marcela F.",
      role: "Belo Horizonte/MG",
      avatar: "/avaliacoes/marcela-2.webp",
      stars: 5,
    },
    {
      quote:
        "O que me salvou foi o {{manual de montagem}}. Eu ficava horas no Pinterest e não saía do lugar, porque nada explicava por onde começar. Aqui já vem {{a ordem certa: painel, balões, mesa e doces}} — montei sozinha em uma tarde.",
      name: "Juliana R.",
      role: "Curitiba/PR",
      avatar: "/avaliacoes/juliana-2.webp",
      stars: 5,
    },
    {
      quote:
        "Comprei achando que eram só fotos bonitas, mas {{cada projeto traz as cores e a lista do que usar}}. Fiz o tema safári igualzinho, {{com material de papelaria e balões}}. O aniversariante amou e ficou lindo nas fotos.",
      name: "Ana Paula S.",
      role: "Salvador/BA",
      avatar: "/avaliacoes/ana-paula-2.webp",
      stars: 5,
    },
  ],
  verifiedLabel: "Compra verificada",
  cta: "Quero montar assim também",
};

/* ------------------------------------------------------------------ */
/*  9.5 Avisos de compra (balãozinho no canto inferior esquerdo)        */
/* ------------------------------------------------------------------ */
/**
 * ⚠️ ESTES AVISOS AFIRMAM QUE ALGUÉM ACABOU DE COMPRAR.
 * Vale a mesma regra do selo do hero e dos depoimentos: se o nome e a cidade
 * não vierem de uma venda real, é publicidade enganosa (CDC, art. 37). O jeito
 * honesto de manter o componente é alimentá-lo com vendas de verdade (webhook
 * do checkout) ou desligá-lo — basta tirar <PurchaseNotifications /> do
 * page.tsx; nada mais depende dele.
 *
 * Nome só com a inicial do sobrenome e cidade sem bairro: um aviso público não
 * pode identificar a compradora.
 */
export const purchaseNotifications = {
  /** Segundos até o PRIMEIRO aviso aparecer, contados ao abrir a página. */
  firstDelaySeconds: 5,
  /** Quanto tempo cada aviso fica na tela (segundos). */
  visibleSeconds: 5,
  /**
   * Intervalo entre um aviso sair e o próximo entrar (segundos, sorteado na
   * faixa). O sorteio existe para o ritmo não virar um relógio — cadência
   * exata é o que denuncia que o aviso é automático.
   *
   * Não baixe muito daqui sem alongar a lista de `people`: cada ciclo é
   * `visibleSeconds` + este intervalo, e quando a lista dá a volta a mesma
   * pessoa reaparece — aviso repetido entrega o revezamento. Como está: ~11s
   * por aviso, ~3 minutos para passar pelas 18 pessoas.
   */
  gapSecondsMin: 4,
  gapSecondsMax: 8,
  /** Linha de baixo, depois da cidade. */
  timeLabel: "agora mesmo",
  /** Complemento do nome, na linha de cima. */
  actionLabel: "acabou de comprar",
  /** Rótulo lido por leitor de tela em volta da região dos avisos. */
  ariaLabel: "Avisos de compras recentes",
  /**
   * Quase todas mulheres, e de propósito: quem compra é a mãe que está
   * organizando a festa, e ela se reconhece na lista. Os dois nomes de homem
   * ficam porque uma lista 100% feminina soa montada — pai também compra.
   *
   * Nenhum NOME repete os depoimentos da seção 9 — a mesma pessoa aparecendo
   * como depoimento e como compra de agora entrega o revezamento. Cidade
   * repetida não é problema: cidade grande tem mais de uma compradora.
   *
   * A lista é longa (18) porque o intervalo é curto — com poucos nomes, a
   * primeira volta a aparecer rápido demais e a repetição fica visível.
   */
  people: [
    { name: "Camila R.", city: "Fortaleza, CE" },
    { name: "Fernanda S.", city: "Campinas, SP" },
    { name: "Patrícia L.", city: "Belo Horizonte, MG" },
    { name: "Vanessa O.", city: "São Paulo, SP" },
    { name: "Aline T.", city: "Salvador, BA" },
    { name: "Larissa D.", city: "Manaus, AM" },
    { name: "Rodrigo A.", city: "Curitiba, PR" },
    { name: "Débora F.", city: "Florianópolis, SC" },
    { name: "Simone A.", city: "Goiânia, GO" },
    { name: "Tatiane M.", city: "Porto Alegre, RS" },
    { name: "Renata B.", city: "Recife, PE" },
    { name: "Cristiane V.", city: "Brasília, DF" },
    { name: "Bianca G.", city: "Ribeirão Preto, SP" },
    { name: "Bruno C.", city: "Natal, RN" },
    { name: "Priscila M.", city: "Uberlândia, MG" },
    { name: "Sabrina L.", city: "Belém, PA" },
    { name: "Michele S.", city: "São Luís, MA" },
    { name: "Carolina N.", city: "Niterói, RJ" },
  ],
};

/* ------------------------------------------------------------------ */
/*  10. Planos                                                         */
/* ------------------------------------------------------------------ */
export const plans = {
  eyebrow: "Escolha seu acesso",
  title: "Escolha a opção {{ideal para você}}",
  basic: {
    name: "Pacote Básico",
    tagline: "Para quem quer começar pelas festas infantis.",
    /** (não é renderizada hoje — o card do Básico não mostra imagem) */
    image: {
      src: "/FESTAMOCKUPHERO.webp",
      width: 1254,
      height: 1254,
      alt: "Biblioteca com 75 projetos de festa infantil",
    },
    priceFrom: "De R$67",
    price: "R$10,00",
    cta: "Quero o Básico",
    /**
     * `included: false` vira um X vermelho: dizer o que NÃO vem é o que faz o
     * Básico funcionar como âncora em vez de concorrer com o Completo.
     */
    features: [
      { text: "75 projetos de festa infantil prontos para copiar", included: true },
      { text: "Filtro por tema, idade, faixa de custo e tamanho do espaço", included: true },
      { text: "Materiais com quantidade e custo estimado da montagem", included: true },
      { text: "Acesso pelo celular, no navegador", included: true },
      { text: "Sem as outras ocasiões", included: false },
      { text: "Sem o preço sugerido de venda", included: false },
      { text: "Sem a calculadora, o gerador de orçamento, os documentos e os scripts", included: false },
      { text: "Sem os 5 bônus", included: false },
    ],
    /**
     * Caixa no fim do card do Básico, apontando para o Completo.
     *
     * ⚠️ REVISAR: "92% escolhem o Completo" é uma afirmação de dado de venda
     * — a mesma regra do selo da hero (CDC, art. 37). Oferta nova ainda não
     * tem esse número. Até ter, use a versão sem percentual:
     *   "Espera: o Completo tem 300 projetos, todas as ocasiões, as 4
     *    ferramentas e os 5 bônus"
     */
    nudge:
      "92% escolhem o Completo — 300 projetos, todas as ocasiões, as 4 ferramentas e os 5 bônus",
  },
  premium: {
    badge: "Mais escolhido",
    /**
     * Faixa vermelha logo abaixo do selo. A DATA do dia da visita é anexada
     * automaticamente pelo componente (mesma mecânica da barra do topo).
     *
     * ⚠️ Mesma ressalva do `urgencyBar`: só se sustenta enquanto o desconto
     * for realmente renovado todo dia.
     */
    todayBadge: "Combo com desconto disponível apenas hoje",
    name: "Pacote Completo",
    tagline: "Os 300 projetos, todas as ocasiões e as ferramentas que fecham a venda.",
    image: {
      src: "/plano-completo.png",
      width: 1448,
      height: 1086,
      // Antes: "/planopremium150festas.webp" (1254x1254).
      alt: "Biblioteca Visual da Decoradora de Festas com as ferramentas e os 5 bônus do Completo",
    },
    priceFrom: "De R$196",
    /** Mesma escrita do popup: "De R$X" riscado → "POR APENAS" → preço. */
    priceConnector: "Por apenas",
    price: "R$29,90",
    cta: "Quero o Completo",
    /** Linha pequena com relógio no FIM do card. Texto vazio tira a linha. */
    ctaNote: "",
    /**
     * A lista do Completo em grupos, na ordem: acervo → ferramentas → bônus.
     * Itens CURTOS de propósito (uma linha no celular): o detalhe de cada
     * coisa já está nas seções de cima; aqui é só a conferência.
     * Os bônus não entram aqui: saem de `bonuses.items`, com o título
     * `bonusTitle`, para não existirem duas listas que podem divergir.
     */
    featureGroups: [
      {
        title: "O acervo",
        items: [
          "+300 projetos prontos para copiar",
          "Todas as ocasiões, do infantil ao casamento",
          "Filtro por tema, idade, custo e espaço",
          "Materiais com quantidade e custo",
          "Preço sugerido de venda",
          "Paletas de cores prontas",
        ],
      },
      {
        title: "As ferramentas",
        items: [
          "Calculadora de precificação",
          "Orçamento em PDF com a sua logo",
          "Contrato, termo, recibo e checklist",
          "Scripts de WhatsApp prontos",
        ],
      },
    ],
    bonusTitle: "Os 5 bônus",
    /** Linha que fecha a lista, depois dos bônus. Texto vazio tira a linha. */
    closingFeature: "Atualizações futuras grátis",
  },
  /**
   * Faixa abaixo dos DOIS cards: o que vale para qualquer plano.
   * `icon`: "infinity" | "shield" | "zap" (ver PricingSection).
   */
  assurances: [
    { icon: "infinity" as const, text: "Acesso vitalício" },
    { icon: "shield" as const, text: "Garantia de 7 dias" }, // REVISAR: bater com o checkout
    { icon: "zap" as const, text: "Acesso imediato após a compra" },
  ],
};

/* ------------------------------------------------------------------ */
/*  10b. Popup de upsell (R$ 19,00)                                    */
/* ------------------------------------------------------------------ */
/**
 * O popup: o Plano Completo (com os 5 bônus) por R$ 19,00. Aparece
 * por DOIS caminhos — no clique do plano Básico e sozinho (tempo no site /
 * intenção de saída, ver `upsellAuto`).
 *  - aceitar  → UPSELL_CHECKOUT_URL (R$ 19,00)
 *  - recusar  → BASIC_CHECKOUT_URL (R$ 10,00, só os 75 projetos infantis)
 *  - FECHAR   → encerra o popup e devolve a pessoa à página
 *
 * É uma tela SÓ: faixa azul no topo, a lista vermelha do que o Básico NÃO
 * inclui, a caixa verde com a diferença de preço e os dois botões. A 2ª tela (desconto de saída de R$ 12,90) saiu
 * quando o Básico subiu para R$ 17,90 (ficaria mais barata que ele) e não voltou.
 *
 * ⚠️ Mexeu no preço? Mexa junto: `UPSELL_CHECKOUT_URL`, o `cta`, o
 * `upgradeLine` (diferença para o Básico: 19,00 − 10,00) e o valor de
 * `upsell-accept` no Tracking.tsx.
 */
export const upsell = {
  /** Faixa azul do topo, abaixo do ícone de presente. */
  eyebrow: "ESPERE! Vai deixar essas ferramentas e bônus?",
  /** Título da lista vermelha: `missingLead` normal + `missingEmphasis` em vermelho. */
  missingLead: "O Pacote Básico",
  missingEmphasis: "não inclui:",
  /**
   * O que o Básico deixa de fora (caixa vermelha). Curto: uma linha cada.
   * ⚠️ Se o gerador de orçamento em PDF sair da oferta, tire daqui também.
   */
  missing: [
    "+225 projetos (total de 300)",
    "15 anos, casamento, chá de bebê e mais",
    "Preço sugerido de venda",
    "Calculadora de precificação",
    "Orçamento em PDF, contratos e scripts",
    "Os 5 bônus",
  ],
  /** Caixa verde. ⚠️ O valor é a diferença para o Básico: 19,00 − 10,00. */
  upgradeLine: "Por apenas + R$ 9,00, destrave o",
  upgradeName: "Pacote Completo",
  /** O valor dos bônus é anexado a esta frase, vindo de `bonuses.totalValue`. */
  upgradeNote: "300 projetos + 4 ferramentas + 5 bônus (valem",
  cta: "SIM! Quero o Pacote Completo por R$ 19,00",
  /** Recusa — vale para os dois caminhos (clique no Básico e automático). */
  decline: "Continuar apenas com o pacote básico",
  closeLabel: "Fechar",
  /*
   * SEM cronômetro de propósito — não existe `expiraMs` aqui. Um prazo empurra
   * o preço para baixo da dobra no celular e, ao zerar, fecha o popup na cara
   * de quem ainda estava decidindo. Se um dia voltar, o cronômetro tem de ser
   * REAL: contador que reinicia a cada visita é urgência fabricada.
   */
};

/* ------------------------------------------------------------------ */
/*  10c. Gatilho automático — tempo no site e intenção de saída        */
/* ------------------------------------------------------------------ */
/**
 * NÃO é uma oferta: são os tempos e os textos de quando o popup abre SOZINHO
 * (a visitante passou muito tempo sem decidir ou fez o gesto de sair). A
 * oferta que aparece é a MESMA de `upsell` (R$ 19,00) — aqui só se define
 * quando ela aparece.
 *
 * Abre UMA vez por sessão, e nunca por cima do popup do plano Básico.
 */
export const upsellAuto = {
  /**
   * "Demorou muito no site": tempo contado desde que a página abriu.
   * 45s (era 25s) — a pessoa precisa ter lido a página antes de levar um
   * popup na cara; a 25s boa parte ainda estava na primeira dobra.
   */
  delayMs: 45000,
  /**
   * Carência antes de vigiar a saída pelo topo. Quem chega do anúncio ainda
   * está com o ponteiro lá em cima — sem esta espera o popup abriria no
   * primeiro segundo, antes de a pessoa ter visto a oferta.
   */
  exitArmMs: 5000,
};

/* ------------------------------------------------------------------ */
/*  11. Garantia                                                       */
/* ------------------------------------------------------------------ */
export const guarantee = {
  /** Rótulo acima do título. Texto vazio ("") tira a linha. */
  eyebrow: "",
  title: "Você pode conhecer o material sem medo",
  text: "Você entra, abre as fichas e vê se o material serve para o seu trabalho. Se não fizer sentido, é só solicitar o reembolso dentro do prazo, conforme os termos da garantia.",
  /**
   * ⚠️ Precisa bater com a política real do checkout. 7 dias (e não os 30
   * da página de festas infantis): decoradora profissional consulta tudo na
   * primeira semana; 30 dias é material inteiro na mão e reembolso no dia 29.
   */
  badge: "Garantia de 7 dias", // REVISAR
  /**
   * Selo em imagem. VAZIO de propósito: o único arquivo que existe diz
   * "GARANTIA 30 DIAS", e o selo NÃO pode informar prazo diferente do
   * checkout. Sem `sealSrc` entra o ícone de escudo. Quando houver um selo
   * de 7 dias, coloque em /public e aponte aqui.
   */
  sealSrc: "",
  sealAlt: "Selo de garantia de 7 dias",
};

/* ------------------------------------------------------------------ */
/*  12. FAQ                                                            */
/* ------------------------------------------------------------------ */
export const faq = {
  eyebrow: "Tire suas dúvidas",
  title: "Perguntas Frequentes",
  cta: "Quero garantir meu acesso",
  items: [
    {
      q: "Serve para quem já é decoradora?",
      a: "Serve principalmente. O material não ensina a decorar — ele te dá a ficha pronta de cada festa, com composição, materiais, quantidades, custo e preço, para você parar de resolver isso de cabeça a cada pedido.",
    },
    {
      q: "É material físico? Como recebo?",
      a: "É digital. Depois da compra você recebe o acesso no WhatsApp e no e-mail, na hora, e abre direto no celular. Dá para instalar na tela inicial e usar como aplicativo.",
    },
    {
      q: "Posso usar os projetos com os meus clientes?",
      a: "Pode. É o seu instrumento de trabalho: você usa as fichas para planejar, orçar e montar as festas que vende.",
    },
    {
      q: "Preciso comprar exatamente os mesmos materiais?",
      a: "Não. Cada ficha mostra a composição e as quantidades de referência. Você adapta ao que encontra na sua cidade e ao orçamento do cliente.",
    },
    {
      q: "Qual a diferença entre o Básico e o Completo?",
      a: "O Básico tem 75 projetos de festa infantil com materiais e custo estimado. O Completo tem 300 projetos de todas as ocasiões, o preço sugerido de venda em cada um, a calculadora de precificação, o gerador de orçamento em PDF, os documentos (contrato, termo de responsabilidade, recibo de sinal e checklist), os scripts de WhatsApp e os 5 bônus.",
    },
    {
      q: "Tem mensalidade?",
      a: "Não. É pagamento único, com acesso vitalício.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  13. CTA final                                                      */
/* ------------------------------------------------------------------ */
export const finalCta = {
  title: "A próxima festa pode sair {{sem improviso e sem sobra de material}}",
  subtitle:
    "Escolha entre 300 projetos, monte com a ficha aberta e feche o preço antes de gastar o primeiro real.",
  highlight: "300 projetos + 5 bônus no Completo",
  price: "R$29,90",
  priceNote: "Pagamento único",
  cta: "Quero garantir meu acesso",
  badges: ["Acesso imediato", "Pagamento único", "Garantia", "Sem mensalidade"],
};

/* ------------------------------------------------------------------ */
/*  Barra fixa no mobile                                               */
/* ------------------------------------------------------------------ */
export const stickyBar = {
  label: "A partir de",
  price: "R$10,00",
  cta: "Ver os 300 projetos",
};
