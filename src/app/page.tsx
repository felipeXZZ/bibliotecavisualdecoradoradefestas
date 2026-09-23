import { UrgencyBar } from "@/components/sections/UrgencyBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ShowcaseCarousel } from "@/components/sections/ShowcaseCarousel";
import { ThreeSteps } from "@/components/sections/ThreeSteps";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { BonusSection } from "@/components/sections/BonusSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { CamadasDiferidas } from "@/components/CamadasDiferidas";

/**
 * "Biblioteca Visual da Decoradora de Festas" — landing page de venda.
 *
 * Mesma ordem de seções da página de +150 Festas Infantis, com duas seções
 * novas: Ocasiões (antes da vitrine) e Ferramentas (depois dos 3 passos).
 * A jornada: eu já sei montar, o que atrasa é a conta → não é só festa
 * infantil → as fichas são de verdade → do pedido à festa em 3 passos → o
 * resto do trabalho (preço, orçamento, contrato, conversa) também está
 * resolvido → ainda levo bônus → escolho o plano.
 *
 * Todo o texto vive em src/content.ts.
 */
export default function Home() {
  return (
    <>
      <UrgencyBar />
      <main>
        {/* 3 · Biblioteca Visual da Decoradora de Festas */}
        <HeroSection />
        {/* 4 · Não é só festa infantil (OccasionsSection) — tirada a pedido */}
        {/* 5 · As fichas por dentro */}
        <ShowcaseCarousel />
        {/* 6 · Do pedido do cliente à festa montada (3 passos) */}
        <ThreeSteps />
        {/* 7 · [NOVA] As ferramentas que fecham a venda */}
        <ToolsSection />
        {/* 8 · Ainda recebo materiais extras */}
        <BonusSection />
        {/* 9 · Prova social — ⚠️ os prints atuais são da oferta de festas
            infantis; troque por prints de decoradoras (ver `testimonials`
            no content.ts). */}
        <TestimonialsSection />
        {/* 10 · Planos */}
        <PricingSection />
        {/* 11 · Sem risco */}
        <GuaranteeSection />
        {/* 12 · Dúvidas */}
        <FAQSection />
        {/* 13 · Posso comprar agora */}
        <FinalCTA />
        {/* 14 · Rodapé */}
        <Footer />
      </main>
      {/* As duas CAMADAS da página, carregadas FORA do pacote inicial (ver
          CamadasDiferidas): o popup de R$17 que sobe sozinho depois de um
          tempo na página ou quando o ponteiro vai sair pelo topo, e o
          balãozinho de "fulana acabou de comprar" no canto inferior esquerdo,
          a partir de 5s. Ficam FORA do <main> porque não são conteúdo da
          página: são camadas por cima dela — e o popup fica ACIMA do balão no
          empilhamento. ⚠️ O balão AFIRMA vendas: ver o aviso em
          purchaseNotifications, no content.ts. */}
      <CamadasDiferidas />
      {/* Seções desligadas a pedido — os componentes continuam em
          components/sections/ e voltam com um import + a linha aqui:
            <StickyMobileCTA />   barra fixa de CTA no celular
            <ProjectGallery />    galeria ilustrada "veja alguns dos projetos"
            <VideoSection />      vídeo demonstrativo (ainda sem vídeo real)
            <ProjectInside />     "cada projeto mostra como chegar ao resultado"
            <PinterestComparison /> "Pinterest mostra a festa; nós mostramos
                                  como fazer" — deu lugar de volta aos 3 passos
          ProjectGallery, VideoSection e ProjectInside saíram porque a
          vitrine em carrossel logo abaixo da hero já mostra as pranchas
          REAIS — as ilustrações vetoriais e o espaço reservado do vídeo
          repetiam o argumento com material mais fraco. */}
    </>
  );
}
