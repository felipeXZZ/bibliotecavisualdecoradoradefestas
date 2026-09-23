import { tools } from "@/content";
import { Section, SectionHead } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Highlight } from "@/components/Highlight";
import { CTAButton } from "@/components/CTAButton";

/**
 * 5.5 FERRAMENTAS DE TRABALHO — "não é só um catálogo".
 *
 * Vem DEPOIS dos 3 passos: primeiro a pessoa entende que escolher o tema é
 * fácil, depois descobre que precificar, orçar, formalizar e responder o
 * cliente também estão resolvidos. É o que sustenta o ticket do Completo.
 *
 * Fundo AZUL PROFUNDO com cards brancos: fica entre duas seções claras (os
 * passos e os bônus) e precisa ler como um bloco à parte. Emojis coloridos no
 * lugar de ícones de traço: o card é lido em diagonal, e cor ajuda a achar.
 */
export function ToolsSection() {
  return (
    <Section bg="plum" id="ferramentas">
      <SectionHead>
        <Eyebrow tone="gold">{tools.eyebrow}</Eyebrow>
        <h2 className="font-display text-balance mt-3 text-[1.75rem] leading-tight sm:text-4xl">
          <Highlight text={tools.title} tone="gold" />
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-invert sm:text-base">
          {tools.subtitle}
        </p>
      </SectionHead>

      <ol className="mx-auto mt-10 grid max-w-5xl gap-5 sm:mt-12 md:grid-cols-2 md:gap-6">
        {tools.items.map((t, i) => (
          <li
            key={t.label}
            className="flex flex-col rounded-3xl bg-white p-6 text-left text-ink shadow-[0_24px_50px_-24px_rgba(0,0,0,0.7)] sm:p-7"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-purple-ink/10 text-[26px] leading-none"
                aria-hidden
              >
                {t.emoji}
              </span>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-wide text-purple-ink">
                  Ferramenta {i + 1} · {t.label}
                </p>
                <h3 className="font-display text-balance mt-0.5 text-[1.3rem] leading-tight text-ink sm:text-[1.4rem]">
                  {t.title}
                </h3>
              </div>
            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {t.text}
            </p>

            <ul className="mt-4 space-y-2">
              {t.list.map(([emoji, item]) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-purple-ink/5 px-3 py-2 text-[15px] font-semibold leading-snug text-ink"
                >
                  <span className="shrink-0 text-lg leading-none" aria-hidden>
                    {emoji}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex justify-center sm:mt-12">
        <CTAButton size="lg" href="#planos" location="tools" trackId="tools-plans">
          {tools.cta}
        </CTAButton>
      </div>
    </Section>
  );
}
