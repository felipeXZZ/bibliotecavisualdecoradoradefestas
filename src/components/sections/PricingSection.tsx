import Image from "next/image";
import {
  Check,
  ChevronsDown,
  Clock,
  Gift,
  Infinity as InfinityIcon,
  ShieldCheck,
  Star,
  X,
  Zap,
} from "lucide-react";
import { plans, bonuses, CHECKOUT_URL } from "@/content";
import { BasicCtaWithUpsell } from "@/components/UpsellPopup";
import { Eyebrow } from "@/components/Eyebrow";
import { TodayDate } from "@/components/TodayDate";
import { Highlight } from "@/components/Highlight";
import { PAGE_VARIANT } from "@/lib/track";

/** Ícones da faixa de garantias abaixo dos dois planos (ver content.ts). */
const assuranceIcons = {
  infinity: InfinityIcon,
  shield: ShieldCheck,
  zap: Zap,
};

/**
 * 10. PLANOS — Básico (R$10,00, 75 projetos infantis) e Completo (R$29,90,
 * 300 projetos de todas as ocasiões + ferramentas + bônus).
 *
 * O Básico vem primeiro de propósito: ele estabelece a âncora barata e
 * a caixa no fim do card (`plans.basic.nudge`) entrega o olhar ao Completo,
 * que recebe todo o peso visual — card escuro, borda dourada, selo de mais
 * escolhido e a lista em grupos (acervo, ferramentas, bônus).
 *
 * O id="planos" é o destino de TODOS os CTAs da página.
 */
export function PricingSection() {
  return (
    <section className="bg-cream px-5 py-14 text-ink sm:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="purple">{plans.eyebrow}</Eyebrow>
          <h2 className="font-display text-balance mt-3 text-[1.75rem] leading-tight text-ink sm:text-4xl">
            <Highlight text={plans.title} tone="purple" />
          </h2>
        </div>

        <div
          id="planos"
          className="mx-auto mt-10 grid max-w-4xl scroll-mt-16 items-start gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-7"
        >
          {/* ---------------- Plano Básico ---------------- */}
          <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-[0_14px_38px_-20px_rgba(26,35,56,0.4)] sm:p-7">
            <h3 className="text-xl font-extrabold text-ink">{plans.basic.name}</h3>
            <p className="mt-1 text-[14px] text-ink-soft">{plans.basic.tagline}</p>

            <div className="mt-6">
              <p className="old-price text-sm font-bold">{plans.basic.priceFrom}</p>
              <p className="font-display text-4xl leading-none text-ink">
                {plans.basic.price}
              </p>
            </div>

            {/* Não vai direto ao checkout: abre o popup que oferece o Plano Completo
                por R$19,00. Recusar leva ao Básico normalmente. */}
            <BasicCtaWithUpsell label={plans.basic.cta} />

            <ul className="mt-6 flex-1 space-y-2.5">
              {plans.basic.features.map((f) => (
                <li
                  key={f.text}
                  className="flex items-start gap-2.5 text-[14px] font-medium text-ink"
                >
                  {f.included ? (
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-green-ink"
                      aria-hidden
                    />
                  ) : (
                    <X className="mt-0.5 size-4 shrink-0 text-danger" aria-hidden />
                  )}
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>

            {/* Caixa apontando para o Completo, dentro do card do Básico. A
                seta só aparece no mobile: no desktop os cards ficam lado a
                lado e o Completo não está "abaixo". */}
            <div className="mt-7 rounded-2xl bg-danger/[0.06] px-4 py-3.5 text-center ring-1 ring-danger/20">
              <p className="text-balance text-[14px] font-extrabold leading-snug text-danger">
                {plans.basic.nudge}
              </p>
              <ChevronsDown
                aria-hidden
                className="mx-auto mt-1 size-6 animate-bounce text-danger lg:hidden"
                strokeWidth={3}
              />
            </div>
          </div>

          {/* ---------------- Plano Completo (destaque) ---------------- */}
          {/* Peso visual do Completo sem nenhum brilho dourado: borda dourada,
              sombra funda e, no desktop (onde os cards ficam lado a lado), uma
              elevação em relação ao Básico. */}
          <div className="relative flex h-full flex-col rounded-3xl border-2 border-gold bg-plum p-6 pt-10 text-white shadow-[0_30px_70px_-20px_rgba(74,21,48,0.85)] sm:p-8 sm:pt-11 lg:-mt-4">
            <span className="absolute -top-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gold px-5 py-1.5 text-[12px] font-extrabold uppercase tracking-wide text-ink shadow-lg">
              <Star className="size-3.5 fill-ink" aria-hidden />
              {plans.premium.badge}
            </span>

            {/* Faixa de urgência logo abaixo do selo dourado. Vermelha de
                propósito — é o único aviso de prazo dentro dos cards e, em
                azul ou dourado, se dissolveria no card do Completo. Usa o
                `danger-vivid` (o mesmo da faixa do popup de upsell), não o
                `danger`: sobre o azul escuro do card o vermelho fechado
                apagava. A data vem do navegador da visitante (ver TodayDate). */}
            <p className="flex items-center gap-2.5 rounded-xl bg-danger-vivid px-4 py-2.5 text-center text-[12px] font-extrabold uppercase leading-snug tracking-wide text-white shadow-[0_10px_24px_-14px_rgba(0,0,0,0.9)]">
              <Clock className="size-4 shrink-0" aria-hidden />
              <span className="flex-1 text-balance">
                {plans.premium.todayBadge}{" "}
                <TodayDate className="tabular-nums" />
              </span>
            </p>

            <h3 className="mt-5 text-2xl font-extrabold text-white">
              {plans.premium.name}
            </h3>
            <p className="mt-1 text-[14px] leading-snug text-ink-invert">
              {plans.premium.tagline}
            </p>

            <Image
              src={plans.premium.image.src}
              alt={plans.premium.image.alt}
              width={plans.premium.image.width}
              height={plans.premium.image.height}
              loading="lazy"
              decoding="async"
              quality={65}
              sizes="(min-width: 1024px) 340px, 300px"
              className="mx-auto mt-4 h-auto w-full max-w-[320px] rounded-2xl object-contain"
            />

            <div className="mt-6">
              <p className="old-price-dark text-sm font-bold">
                {plans.premium.priceFrom}
              </p>
              {/* "POR APENAS" entre o preço riscado e o preço real — a mesma
                  escrita do popup de upsell, para os dois lugares da página
                  que anunciam o Completo falarem igual. */}
              <p className="mt-1 text-[11px] font-extrabold uppercase tracking-wide text-ink-invert">
                {plans.premium.priceConnector}
              </p>
              <p className="mt-0.5 font-display text-5xl leading-none text-gold">
                {plans.premium.price}
              </p>
            </div>

            <a
              href={CHECKOUT_URL}
              data-cta-location="plan-premium"
              data-track-id="premium-checkout"
              data-page-variant={PAGE_VARIANT}
              className="mt-6 flex min-h-[60px] w-full items-center justify-center rounded-2xl bg-gradient-to-b from-cta to-cta-dark px-6 py-4 text-center font-cta text-[0.95rem] uppercase leading-tight tracking-wide text-white shadow-[0_14px_32px_-10px_rgba(34,180,85,0.8)] ring-1 ring-inset ring-white/20 transition hover:-translate-y-0.5 hover:brightness-110 sm:text-[1.05rem]"
            >
              {plans.premium.cta}
            </a>

            {/* A lista em grupos, na ordem acervo → ferramentas → bônus: cada
                grupo é um motivo diferente para a diferença de preço em
                relação ao Básico. */}
            <div className="mt-6 flex-1 space-y-5">
              {plans.premium.featureGroups.map((g) => (
                <div key={g.title}>
                  <p className="text-[12px] font-extrabold uppercase tracking-wide text-gold">
                    {g.title}
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {g.items.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-[14px] font-semibold leading-snug text-white"
                      >
                        <span className="mt-px flex size-[18px] shrink-0 items-center justify-center rounded-full bg-cta">
                          <Check className="size-3 text-white" strokeWidth={3.5} aria-hidden />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Bônus em caixa própria: os nomes saem de `bonuses.items`. */}
              <div className="rounded-2xl border border-gold/40 bg-white/5 p-4">
                <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-wide text-gold">
                  <span aria-hidden>🎁</span>
                  {plans.premium.bonusTitle}
                </p>
                <ul className="mt-3 space-y-2.5">
                  {bonuses.items.map((b) => (
                    <li
                      key={b.title}
                      className="flex items-start gap-2 text-[13px] font-bold leading-snug text-white"
                    >
                      <Gift className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                      <span>{b.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plans.premium.closingFeature ? (
                <p className="flex items-start gap-2.5 text-[14px] font-bold leading-snug text-white">
                  <span className="mt-px flex size-[18px] shrink-0 items-center justify-center rounded-full bg-cta">
                    <Check className="size-3 text-white" strokeWidth={3.5} aria-hidden />
                  </span>
                  <span>{plans.premium.closingFeature}</span>
                </p>
              ) : null}
            </div>

            {/* Fecha o card: pequeno e apagado de propósito. Relógio EM LINHA
                com o texto — se a frase quebrar, ele acompanha a primeira
                palavra em vez de ficar solto. Texto vazio tira a linha. */}
            {plans.premium.ctaNote ? (
              <p className="mt-6 text-balance text-center text-[10.5px] font-extrabold uppercase leading-snug tracking-wide text-ink-invert sm:text-[11px]">
                <Clock className="mr-1.5 inline-block size-3.5 -translate-y-px align-middle" aria-hidden />
                {plans.premium.ctaNote}
              </p>
            ) : null}
          </div>
        </div>

        {/* O que vale para os DOIS planos — fora dos cards, para não virar
            item de comparação entre eles. */}
        {/* Largura casada com a dos cards (`max-w-4xl`) e três colunas iguais
            no desktop. Era `w-fit` + coluna centralizada: a caixa nascia da
            largura do item mais longo, ficava mais estreita que os cards e
            desalinhada deles, e os dois itens curtos sobravam de espaço nas
            laterais — daí o card parecer desproporcional. No mobile o
            `justify-center` centraliza a COLUNA inteira dentro da caixa: o
            bloco fica no meio e os três ícones continuam alinhados entre si
            (centralizar item por item deixaria a lista serrilhada). */}
        <ul className="mx-auto mt-8 grid w-full max-w-4xl justify-center gap-3.5 rounded-3xl bg-white px-6 py-5 shadow-[0_14px_38px_-22px_rgba(26,35,56,0.3)] ring-1 ring-black/5 sm:grid-cols-3 sm:gap-6 sm:px-8 sm:py-6">
          {plans.assurances.map((a) => {
            const Icon = assuranceIcons[a.icon];
            return (
              <li
                key={a.text}
                className="flex items-center gap-2 text-[14px] font-extrabold text-green-ink sm:justify-center sm:text-[15px]"
              >
                <Icon className="size-[18px] shrink-0" aria-hidden />
                <span>{a.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
