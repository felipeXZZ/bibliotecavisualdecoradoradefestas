import Image from "next/image";
import { occasions } from "@/content";
import { Section, SectionHead } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Highlight } from "@/components/Highlight";
import { CTAButton } from "@/components/CTAButton";

/**
 * 2.3 OCASIÕES — "não é só festa infantil".
 *
 * Fica ENTRE a hero e a vitrine de propósito: é esta seção que transforma o
 * "300 projetos" em motivo de comprar o Completo. Se a grade de projetos vier
 * antes, a pessoa já formou a ideia de que é tudo festa infantil.
 *
 * Cada card mostra a foto da ocasião (`src`) ou, sem ela, o emoji; e o
 * contador só aparece quando `count` está preenchido (ver content.ts).
 */
export function OccasionsSection() {
  return (
    <Section bg="white" id="ocasioes">
      <SectionHead>
        <Eyebrow tone="purple">{occasions.eyebrow}</Eyebrow>
        <h2 className="font-display text-balance mt-3 text-[1.75rem] leading-tight text-ink sm:text-4xl">
          <Highlight text={occasions.title} tone="purple" />
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
          {occasions.subtitle}
        </p>
      </SectionHead>

      <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {occasions.items.map((o) => (
          <li
            key={o.name}
            className="flex flex-col overflow-hidden rounded-2xl bg-cream text-center ring-1 ring-black/5"
          >
            {o.src ? (
              <Image
                src={o.src}
                alt={`Projeto de decoração: ${o.name}`}
                width={400}
                height={400}
                loading="lazy"
                quality={65}
                sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
                className="aspect-square h-auto w-full object-cover"
              />
            ) : (
              <span
                aria-hidden
                className="flex aspect-[2/1] items-center justify-center text-[2.1rem] leading-none sm:text-[2.4rem]"
              >
                {o.emoji}
              </span>
            )}
            <div className="flex flex-1 flex-col justify-center bg-white px-2 py-3">
              <p className="text-balance text-[14px] font-extrabold leading-tight text-ink sm:text-[15px]">
                {o.name}
              </p>
              {o.count > 0 ? (
                <p className="mt-1 text-[12px] font-bold text-purple-ink">
                  {o.count} {occasions.countLabel}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>

      {/* Fecho em caixa própria: é o argumento da seção, não uma legenda. */}
      <p className="text-pretty mx-auto mt-8 max-w-2xl rounded-2xl bg-gold/10 px-5 py-4 text-center text-[15px] font-extrabold leading-relaxed text-ink ring-1 ring-gold/40 sm:text-base">
        {occasions.closing}
      </p>

      <div className="mt-10 flex justify-center">
        <CTAButton
          size="lg"
          href="#planos"
          location="occasions"
          trackId="occasions-plans"
        >
          {occasions.cta}
        </CTAButton>
      </div>
    </Section>
  );
}
