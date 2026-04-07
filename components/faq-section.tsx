"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "What is Artyug?",
    a: "Artyug is an operating system for trusted art commerce — a place to sell work, run auctions, host events, build guilds, and give collectors blockchain-backed proof they own the real piece.",
  },
  {
    q: "Is it free to get started?",
    a: "Yes. You can sign up and build your creator profile for free. We keep starting friction low so you can list work, join guilds, and explore the platform before you scale.",
  },
  {
    q: "How do certificates and authenticity work?",
    a: "When a sale completes, Artyug can generate a scannable QR certificate and an on-chain receipt (Solana devnet today, mainnet-ready). Optional NFC tags tie physical pieces to that record so anyone can verify — not just take your word for it.",
  },
  {
    q: "What are guilds?",
    a: "Guilds are artist-first communities: structured spaces for discussion, peer events, shared milestones, and collective growth — closer to a studio network than a generic social feed.",
  },
  {
    q: "Can I use Artyug on my phone?",
    a: "Yes. Use the web app in your browser, or download the Android APK directly from this site. iOS is on the roadmap; we’ll announce it when it’s ready.",
  },
  {
    q: "Are payments secure?",
    a: "Transactions are designed for direct artist–collector flows with clear pricing. We emphasize encrypted checkout patterns and transparent fees so you always know what you keep.",
  },
  {
    q: "Do you take a cut of every sale?",
    a: "We aim for minimal platform fees compared with traditional galleries and aggregators. Exact fee tiers can vary by product surface — check in-app pricing or reach out if you’re planning a large drop or event.",
  },
]

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section
      ref={ref}
      className="border-t border-[#E2DDD8] bg-[#F5F1EC] py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center lg:mb-12 lg:text-left"
        >
          <p className="label-tag mb-4">FAQ</p>
          <h2 id="faq-heading" className="display-sm text-[#0A0A0A] md:max-w-2xl lg:max-w-none">
            Common questions<span className="text-[#E8470A]">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#6B6560] lg:mx-0">
            Straight answers about getting started, authenticity, guilds, and how Artyug fits into your practice.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl"
        >
          <Accordion type="single" collapsible className="overflow-hidden rounded-2xl border border-[#E2DDD8] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-[#EDE8E2] px-4 sm:px-6 last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-[0.9375rem] font-bold tracking-tight text-[#0A0A0A] hover:no-underline [&>svg]:text-[#E8470A]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[0.9375rem] leading-relaxed text-[#6B6560]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-8 text-center text-xs text-[#6B6560] lg:text-left">
            Still stuck?{" "}
            <a
              href="https://app.artyug.art"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#E8470A] underline decoration-[#E8470A]/30 underline-offset-2 transition hover:decoration-[#E8470A]"
            >
              Open the app
            </a>{" "}
            or reach out through your dashboard.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
