"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Copy, Users, CalendarDays, Globe, Lock,
  CheckCircle2, ShieldCheck, QrCode, Wifi, Gem
} from "lucide-react"

const problems = [
  {
    icon: Copy,
    problem: "Your art gets copied without recourse",
    solution: "Artyug generates blockchain-backed certificates and NFC tags for every piece. Anyone can verify. No one can fake.",
  },
  {
    icon: Users,
    problem: "No artist-first community platform",
    solution: "Guilds give artists a structured home — discussions, peer events, shared milestone celebrations, and collective growth.",
  },
  {
    icon: CalendarDays,
    problem: "No event stack built for creators",
    solution: "Artyug is your event publishing tool. Create, sell tickets, and manage events the way Devfolio does — but for the art world.",
  },
  {
    icon: Globe,
    problem: "Discovery is fragmented and unfair",
    solution: "A single curated platform where verified artists surface based on quality and trust, not ad spend.",
  },
  {
    icon: Lock,
    problem: "Collectors can't prove they own the real thing",
    solution: "Every purchase generates a scannable ownership certificate with a blockchain receipt and the current market price in INR.",
  },
]

const authItems = [
  { icon: ShieldCheck, title: "Blue Verified Badge", sub: "Admin-verified creator identity", color: "#3B82F6" },
  { icon: Gem, title: "Gold Creator Badge", sub: "10+ sales milestone + admin approval", color: "#F59E0B" },
  { icon: QrCode, title: "QR Certificate", sub: "Scannable ownership proof, generated at purchase", color: "#E8470A" },
  { icon: Wifi, title: "NFC Protection", sub: "Write authenticity data to physical NFC tags", color: "#10B981" },
  { icon: Globe, title: "Blockchain Receipt", sub: "On-chain record on Solana devnet (mainnet-ready)", color: "#8B5CF6" },
]

const statsGrid = [
  { value: "₹90K+", label: "Revenue" },
  { value: "Live", label: "Partner Events" },
  { value: "QR + NFC", label: "Verification" },
  { value: "On-chain", label: "Authenticity" },
]

export default function FeaturesSection() {
  const problemRef = useRef<HTMLDivElement>(null)
  const authRef = useRef<HTMLDivElement>(null)
  const tractionRef = useRef<HTMLDivElement>(null)
  const problemInView = useInView(problemRef, { once: true, margin: "-80px" })
  const authInView = useInView(authRef, { once: true, margin: "-80px" })
  const tractionInView = useInView(tractionRef, { once: true, margin: "-80px" })

  return (
    <>
      {/* ── THE PROBLEM SECTION ── */}
      <section ref={problemRef} className="bg-[#F5F1EC] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 lg:mb-20"
          >
            <p className="label-tag mb-4 text-center lg:text-left">The Problem</p>
            <h2 className="display-section mx-auto max-w-4xl text-center text-[#0A0A0A] lg:mx-0 lg:max-w-none lg:text-left">
              Five problems<span className="text-[#E8470A]">.</span>
              <br />
              One platform<span className="text-[#E8470A]">.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-[#6B6560] md:text-base lg:mx-0 lg:max-w-xl lg:text-left">
              The art world is broken for independent creators. Here&apos;s what Artyug fixes.
            </p>
          </motion.div>

          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
            {problems.map((item, i) => {
              const Icon = item.icon
              const isLast = i === problems.length - 1
              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={problemInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={
                    isLast
                      ? "flex justify-center lg:col-span-2"
                      : undefined
                  }
                >
                  <div
                    className={[
                      "group relative w-full overflow-hidden rounded-2xl border border-[#E2DDD8] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 sm:p-6",
                      "hover:-translate-y-0.5 hover:border-[#E8470A]/35 hover:shadow-[0_12px_40px_-12px_rgba(232,71,10,0.12),0_4px_16px_rgba(0,0,0,0.06)]",
                      isLast ? "lg:max-w-3xl" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <div
                      className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#E8470A] to-[#E8470A]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div className="relative flex gap-4 sm:gap-5">
                      <div className="flex shrink-0 flex-col items-center gap-2">
                        <span className="font-mono text-[10px] font-bold tabular-nums text-[#E8470A]/80">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF3EF] ring-1 ring-[#E8470A]/10 transition-transform duration-300 group-hover:scale-[1.03] sm:h-12 sm:w-12">
                          <Icon className="h-5 w-5 text-[#E8470A] sm:h-[22px] sm:w-[22px]" strokeWidth={1.75} />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <h3 className="text-base font-bold leading-snug tracking-tight text-[#0A0A0A] sm:text-[1.05rem]">
                          {item.problem}
                        </h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-[#6B6560] sm:mt-3 sm:text-[0.9375rem]">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── AUTHENTICITY SECTION ── */}
      <section id="authenticity" ref={authRef} className="bg-[#F5F1EC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={authInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="label-tag mb-4">Authenticity Infrastructure</p>
              <h2 className="display-section text-[#0A0A0A] mb-6">
                PROVE IT'S<br />
                REAL<span className="text-[#E8470A]">.</span>
              </h2>
              <p className="text-[#6B6560] text-sm leading-relaxed mb-8 max-w-sm">
                Every artwork sold on Artyug generates a tamper-proof ownership certificate.
                Collectors can verify via QR scan, NFC tap, or blockchain explorer —
                anywhere, anytime.
              </p>
              <a
                href="https://app.artyug.art/#/authenticity"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Explore Authenticity Protocol
              </a>
            </motion.div>

            {/* Right — checklist */}
            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={authInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {authItems.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={i}
                    className="auth-check"
                    initial={{ opacity: 0, y: 12 }}
                    animate={authInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.color}15` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <div>
                        <p className="font-bold text-[#0A0A0A] text-sm">{item.title}</p>
                        <p className="text-[#6B6560] text-xs mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── PARTNERS STRIP (light) ── */}
      <section className="bg-[#F5F1EC] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold tracking-widest text-[#6B6560] uppercase mb-6">
            In Collaboration With
          </p>
          <div className="flex items-center justify-center gap-16">
            <div className="text-center">
              <p className="font-black text-base tracking-tight text-[#0A0A0A]">MOTOJOJO</p>
              <p className="text-[10px] text-[#6B6560]">Event Partners</p>
            </div>
            <div className="text-center">
              <p className="font-black text-base tracking-tight text-[#0A0A0A]">WEBCOIN LABS</p>
              <p className="text-[10px] text-[#6B6560]">Technology Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRACTION SECTION (dark brown) ── */}
      <section ref={tractionRef} className="dark-section py-20 md:py-28 relative overflow-hidden">
        {/* Subtle orange glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,71,10,0.15) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — big stat */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={tractionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p className="label-tag-dark mb-4 text-[#E8470A]">Real Traction · Proven Partnership</p>
              <div className="mb-4">
                <span
                  className="font-black text-[#F5F1EC]"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1 }}
                >
                  ₹90,000+
                </span>
              </div>
              <p
                className="font-black text-[#9A8A7A]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
              >
                Generated<span className="text-[#E8470A]">.</span>
              </p>
              <p className="text-[#9A8A7A] text-sm leading-relaxed mt-6 max-w-sm">
                Artyug's partnership with Motojojo resulted in{" "}
                <strong className="text-[#F5F1EC]">₹90,000+ in revenue</strong> through a single partner-led
                event execution — before our full platform launch.
              </p>
            </motion.div>

            {/* Right — stat cards */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={tractionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {[
                { icon: "₹", value: "₹90K+", label: "Revenue" },
                { icon: "📅", value: "Live", label: "Partner Events" },
                { icon: "🔁", value: "QR + NFC", label: "Verification" },
                { icon: "🔗", value: "On-chain", label: "Authenticity" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="stat-card-dark"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={tractionInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  <p className="text-[#E8470A] text-lg mb-2">{s.icon}</p>
                  <p className="text-[#F5F1EC] font-black text-xl">{s.value}</p>
                  <p className="text-[#9A8A7A] text-xs mt-1">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
