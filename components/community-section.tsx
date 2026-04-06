"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const testimonials = [
  {
    quote: "Finally someone built an art platform that doesn't treat creators like content machines. The guild structure is incredible.",
    author: "Priya Sharma",
    role: "Visual Artist, Jaipur",
    badge: "Gold Creator",
  },
  {
    quote: "Sold my first painting and got a blockchain certificate. My buyer showed it at a gallery opening. This is the future.",
    author: "Arjun Mehta",
    role: "Folk Artist, Patna",
    badge: "Verified Artist",
  },
  {
    quote: "The QR + NFC certificate system changed how I talk about my work. Collectors love the proof of ownership.",
    author: "Kavitha Nair",
    role: "Oil Painter, Kochi",
    badge: "Verified Artist",
  },
]

export default function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="bg-[#F5F1EC] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="label-tag mb-4">Creators Are Already Building</p>
          <h2 className="display-section text-[#0A0A0A]">
            Join the guild<span className="text-[#E8470A]">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-[#E2DDD8] rounded-xl p-7 hover:border-[#0A0A0A] hover:shadow-md transition-all duration-300"
            >
              <p className="text-[#0A0A0A] text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="border-t border-[#E2DDD8] pt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#0A0A0A] text-sm">{t.author}</p>
                  <p className="text-[#6B6560] text-xs mt-0.5">{t.role}</p>
                </div>
                <span className="text-[10px] font-bold bg-[#FFF3EF] text-[#E8470A] px-2.5 py-1 rounded-full">
                  {t.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
