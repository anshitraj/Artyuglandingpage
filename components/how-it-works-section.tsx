'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { UserPlus, Paintbrush, ShoppingCart, QrCode, ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Create Your Profile',
    description: 'Sign up free. Choose if you\'re an Artist or Collector. Set your style, city, and what you love.',
    color: 'text-purple-500',
    bg: 'from-purple-500/10 to-violet-500/10',
    border: 'border-purple-400/20 hover:border-purple-400/50',
  },
  {
    step: '02',
    icon: Paintbrush,
    title: 'Post or Discover Art',
    description: 'Artists list their work with pricing, medium, and size. Collectors browse the feed and discover gems.',
    color: 'text-violet-500',
    bg: 'from-violet-500/10 to-fuchsia-500/10',
    border: 'border-violet-400/20 hover:border-violet-400/50',
  },
  {
    step: '03',
    icon: ShoppingCart,
    title: 'Buy Securely',
    description: 'Purchase directly through Artyug. Demo mode available so you can test the full flow risk-free.',
    color: 'text-fuchsia-500',
    bg: 'from-fuchsia-500/10 to-pink-500/10',
    border: 'border-fuchsia-400/20 hover:border-fuchsia-400/50',
  },
  {
    step: '04',
    icon: QrCode,
    title: 'Get Certified',
    description: 'Every sale auto-generates a blockchain-anchored QR certificate of authenticity. Yours forever.',
    color: 'text-indigo-500',
    bg: 'from-indigo-500/10 to-blue-500/10',
    border: 'border-indigo-400/20 hover:border-indigo-400/50',
  },
]

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/10 via-background to-purple-50/10 z-0" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl z-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            How <span className="text-primary">Artyug</span> Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            From sign-up to certified sale in four simple steps.
            No technical knowledge required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-purple-500/0 via-purple-400/40 to-purple-500/0 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`relative bg-card border ${step.border} rounded-2xl p-8 text-center space-y-5 hover:shadow-xl hover:shadow-purple-200/10 transition-all duration-500 group z-10`}
              >
                {/* Step number */}
                <div className="flex justify-center">
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.bg} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${step.color}`} />
                    <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-violet-600 text-white text-xs font-bold flex items-center justify-center`}>
                      {index + 1}
                    </span>
                  </div>
                </div>

                <h3 className={`font-serif text-xl font-semibold group-hover:${step.color} transition-colors duration-300`}>
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector (mobile hidden, shows between desktop cards) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center">
                    <ArrowRight className="w-5 h-5 text-primary/40 rotate-90" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
