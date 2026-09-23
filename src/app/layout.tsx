import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Tracking } from "@/components/Tracking";
import { SITE_URL, BRAND_NAME } from "@/content";
import "./globals.css";

// Fonte única do site — Poppins (corpo + títulos). A lista de pesos é enxuta
// de propósito: cada peso vira um woff2 com preload no <head>, disputando
// banda com a primeira dobra num tráfego de anúncio em conexão lenta.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  variable: "--font-body",
});

const TITLE = "Biblioteca Visual da Decoradora de Festas";
const DESCRIPTION =
  "300 projetos de festa prontos para copiar, de todas as ocasiões, com materiais, quantidades, custo da montagem e preço sugerido de venda. Mais calculadora de precificação, orçamento em PDF, contratos e scripts de WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${TITLE} — 300 projetos com materiais, custo e preço`,
  description: DESCRIPTION,
  applicationName: TITLE,
  keywords: [
    "decoradora de festas",
    "projetos de decoração de festa",
    "precificação de decoração de festa",
    "orçamento de decoração de festa",
    "contrato de decoração de festa",
    "decoração de 15 anos",
    "decoração de chá de bebê",
    "arco de balões",
  ],
  alternates: { canonical: "/" },
  // Evita que o iOS transforme os preços em links de telefone.
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: BRAND_NAME,
    // ⚠️ REVISAR: falta a imagem de compartilhamento (1200x630) da nova
    // oferta. Coloque o arquivo em /public e declare `images` aqui — sem ela
    // o link compartilhado no WhatsApp/Instagram aparece sem miniatura.
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#C92E62",
  width: "device-width",
  initialScale: 1,
  // maximumScale NÃO é limitado de propósito: o usuário precisa poder dar
  // zoom (requisito de acessibilidade).
};

/**
 * Dados estruturados (Product) — rich results no Google.
 * Sem `aggregateRating`: não existe avaliação real coletada, e declarar uma
 * nota inventada aqui seria dado falso publicado em markup estruturado.
 */
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: TITLE,
  description: DESCRIPTION,
  brand: { "@type": "Brand", name: BRAND_NAME },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "BRL",
    lowPrice: "10.00",
    highPrice: "29.90",
    offerCount: 2,
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Resource hints das CDNs de terceiros.

            TODOS são `dns-prefetch`, nenhum é `preconnect`: depois que os
            scripts passaram para `lazyOnload` (ver o fim do <body>), nenhuma
            dessas origens é pedida antes do `load`. Um `preconnect` abre
            TCP+TLS na hora — no 4G lento seria handshake competindo com a
            imagem de LCP para uma origem que só vai ser usada depois. Com
            dns-prefetch o DNS já vem resolvido e o handshake fica para o
            momento em que a origem for realmente pedida. */}
        <link rel="dns-prefetch" href="https://cdn.utmify.com.br" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://scripts.clarity.ms" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://api6.ipify.org" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body className="min-h-full" suppressHydrationWarning>
        <ScrollToTop />
        <Tracking />
        {children}

        {/* Destrava as animações decorativas (ver globals.css) assim que a
            página termina de carregar. Elas nascem pausadas para não roubar
            frame da pintura da primeira dobra — era o que segurava o LCP.

            Script inline e não componente cliente: são duas linhas que rodam
            uma vez e morrem; virar componente custaria hidratação e bytes de
            bundle. O <noscript> garante que, sem JS, a página não fique com
            o carrossel congelado. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){function a(){document.documentElement.classList.add('animar')}" +
              "if(document.readyState==='complete'){a()}else{addEventListener('load',a,{once:true})}})();",
          }}
        />
        <noscript>
          <style>{`.cta-pulse,.cta-attention::before,.hero-float,.marquee-track{animation-play-state:running}`}</style>
        </noscript>

        {/* Acerta o POUSO da rolagem suave dos CTAs.

            As seções abaixo da dobra usam `content-visibility: auto` (ver
            globals.css): enquanto estão fora da tela o navegador usa a altura
            ESTIMADA delas, e troca pela real quando cada uma entra no
            enquadramento. A rolagem do `#planos` atravessa três dessas
            seções, então o alvo se move DURANTE a animação — e o clique
            parava ~110px depois do ponto certo, cortando o título do primeiro
            plano.

            A correção roda uma vez, quando a rolagem termina: se o alvo não
            estiver na posição pedida (respeitando o `scroll-mt` dele), faz um
            último ajuste suave. `scrollend` é o sinal exato; onde ele não
            existe (Safari mais antigo), um timer de 900ms cobre a duração
            típica da animação. Qualquer gesto de rolagem da pessoa no meio do
            caminho CANCELA o ajuste — quem assumiu a rolagem manda nela. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var TOL=8;" +
              "addEventListener('click',function(e){" +
              "var a=e.target&&e.target.closest&&e.target.closest('a[href^=\"#\"]');if(!a)return;" +
              "var id=a.getAttribute('href').slice(1);if(!id)return;" +
              "var alvo=document.getElementById(id);if(!alvo)return;" +
              "var cancelado=false;" +
              "function cancelar(){cancelado=true;limpar()}" +
              "function limpar(){removeEventListener('wheel',cancelar);removeEventListener('touchstart',cancelar);removeEventListener('keydown',cancelar)}" +
              "addEventListener('wheel',cancelar,{once:true,passive:true});" +
              "addEventListener('touchstart',cancelar,{once:true,passive:true});" +
              "addEventListener('keydown',cancelar,{once:true});" +
              "function corrigir(){limpar();if(cancelado)return;" +
              "var m=parseFloat(getComputedStyle(alvo).scrollMarginTop)||0;" +
              "if(Math.abs(alvo.getBoundingClientRect().top-m)>TOL)" +
              "alvo.scrollIntoView({block:'start',behavior:'smooth'})}" +
              "if('onscrollend' in window){addEventListener('scrollend',corrigir,{once:true})}" +
              "else{setTimeout(corrigir,900)}" +
              // Rede de segurança: se a rolagem nunca acontecer (o clique caiu
              // num alvo que já estava na posição), o `scrollend` não vem e as
              // três vigias de cancelamento ficariam registradas à toa.
              "setTimeout(limpar,4000)" +
              "},true)})();",
          }}
        />

        {/* Pixel da Utmify já atualizado para a conta desta oferta
            (6ab1ee727477ee3b5bc09fce). */}

        {/* Utmify — captura de UTMs.
            `lazyOnload` (era `afterInteractive`): em `afterInteractive` o Next
            põe um <link rel=preload as=script> no <head>, e esse preload entra
            com prioridade ALTA na mesma fila da imagem de LCP — mais um TLS
            handshake e 6,5 KB na frente da primeira dobra. Nada se perde: o
            link do checkout é reescrito com as UTMs no CLIQUE por withUtms()
            (lib/track.ts), lendo a URL da própria página. */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="lazyOnload"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
        />

        {/* Microsoft Clarity — mapa de calor e gravação de sessão.
            Projeto desta oferta: y3snimvd08 (o antigo xnmgji9f58 era herdado
            da página anterior).

            ⚠️ Passou de `afterInteractive` para `lazyOnload`. O clarity.js
            custa 26 KB e UMA TAREFA LONGA de ~1s de JavaScript; em
            `afterInteractive` ela caía em cima da janela em que o navegador
            ainda tentava pintar a primeira dobra e empurrava o LCP sozinha.
            Em `lazyOnload` ele sobe depois do `load` — a gravação perde o
            primeiro segundo de sessão, mas começa muito antes de qualquer
            interação humana. Se algum dia o replay precisar do frame zero,
            é aqui que se volta para `afterInteractive` (e o LCP volta junto). */}
        <Script id="ms-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y3snimvd08");
          `}
        </Script>

        {/* Meta Pixel (1118224517470575) — base code.

            `lazyOnload` pelo mesmo motivo do Clarity e da Utmify: o
            fbevents.js sobe DEPOIS do `load`, sem TLS handshake nem bytes
            disputando a imagem da primeira dobra. O custo é perder o
            PageView de quem abandona antes do `load` — quem sai nessa janela
            não compra, e o sinal que a campanha realmente otimiza
            (InitiateCheckout/Purchase) acontece muito depois. Para registrar
            o frame zero, troque para `afterInteractive` — e o LCP volta a
            piorar junto.

            É o snippet oficial da Meta com UMA diferença deliberada: o
            `init` e o `PageView` ficam FORA do guard `if(f.fbq)return`. A
            Utmify também injeta o fbevents.js e, como os dois são
            `lazyOnload`, a ordem entre eles não é garantida — com o snippet
            cru, se a Utmify chegasse primeiro o `return` mataria o bloco
            inteiro e ESTE pixel nunca seria inicializado. Fora do guard, o
            stub só é criado se ainda não existir e o init sempre roda.

            O PageView usa `trackSingle` e não `track`: o pixel.js da
            Utmify também roda `fbq("init", ...)` para os IDs configurados
            no painel dela, e um `track` cru faz BROADCAST para TODO pixel
            inicializado na página — o nosso PageView cairia no pixel da
            Utmify junto. `trackSingle` entrega só para este ID.

            ⚠️ Isso blinda o nosso lado, não o dela: a Utmify dispara
            PageView/ViewContent/InitiateCheckout com `fbq("track")`, que
            continua fazendo broadcast para ESTE pixel. Se o painel da Utmify
            tiver algum Pixel da Meta configurado, os eventos chegam em
            dobro — a saída é deixar UM dos dois lados enviando eventos de
            navegador, não os dois. */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1118224517470575');
            fbq('trackSingle', '1118224517470575', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=1118224517470575&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Utmify — Pixel de conversão */}
        <Script id="utmify-pixel" strategy="lazyOnload">
          {`
            window.pixelId = "6ab1ee727477ee3b5bc09fce";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
      </body>
    </html>
  );
}
