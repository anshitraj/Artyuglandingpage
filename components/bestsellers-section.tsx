"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

/** Technical “gallery wall” schematic — shown on hover for diagram-style cards */
function GalleryWallDiagram() {
  return (
    <svg
      viewBox="0 0 280 320"
      className="absolute inset-0 h-full w-full bg-[#FAFAF8] text-[#0A0A0A]"
      aria-hidden
    >
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
      {/* Overall W / H guides */}
      <line x1="8" y1="40" x2="8" y2="260" stroke="currentColor" strokeWidth="0.5" opacity="0.45" />
      <line x1="32" y1="278" x2="252" y2="278" stroke="currentColor" strokeWidth="0.5" opacity="0.45" />
      <text x="4" y="155" fontSize="8" fill="currentColor" opacity="0.6" transform="rotate(-90 4,155)">
        H
      </text>
      <text x="130" y="312" fontSize="8" fill="currentColor" opacity="0.6">
        W
      </text>
      {/* Frame grid — 6 blocks stylized */}
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="40" y="48" width="88" height="112" />
        <rect x="136" y="48" width="96" height="80" />
        <rect x="136" y="136" width="46" height="72" />
        <rect x="188" y="136" width="44" height="72" />
        <rect x="40" y="168" width="88" height="96" />
        <rect x="136" y="216" width="96" height="48" />
      </g>
      <text x="62" y="108" fontSize="7" fill="currentColor" opacity="0.75" textAnchor="middle">
        20&quot;W × 28&quot;H
      </text>
      <text x="180" y="92" fontSize="7" fill="currentColor" opacity="0.75" textAnchor="middle">
        16&quot;W × 24&quot;H
      </text>
      <text x="156" y="176" fontSize="6" fill="currentColor" opacity="0.75" textAnchor="middle">
        12&quot;×16&quot;
      </text>
      <text x="208" y="176" fontSize="6" fill="currentColor" opacity="0.75" textAnchor="middle">
        12&quot;×16&quot;
      </text>
      <text x="84" y="220" fontSize="7" fill="currentColor" opacity="0.75" textAnchor="middle">
        24&quot;W × 32&quot;H
      </text>
      <text x="180" y="244" fontSize="6" fill="currentColor" opacity="0.75" textAnchor="middle">
        Set layout
      </text>
    </svg>
  )
}

type HoverKind = "lifestyle" | "diagram"

type Bestseller = {
  id: string
  artist: string
  title: string
  price: string
  wasPrice?: string
  discountLabel?: string
  isNew?: boolean
  imageDefault: string
  imageHover?: string
  hoverKind: HoverKind
}

const bestsellers: Bestseller[] = [
  {
    id: "1",
    artist: "Dan Hobday",
    title: "Sun Set, Abstract Painting",
    price: "₹4,299",
    wasPrice: "₹4,799",
    discountLabel: "10% off",
    imageDefault:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80&auto=format&fit=crop",
    imageHover:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&auto=format&fit=crop",
    hoverKind: "lifestyle",
  },
  {
    id: "2",
    artist: "Studio Collective",
    title: "Botanical Art Set of 6, Floral Series",
    price: "₹2,200",
    imageDefault:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80&auto=format&fit=crop",
    hoverKind: "diagram",
  },
  {
    id: "3",
    artist: "Mira Sen",
    title: "Monsoon Blues, Limited Edition",
    price: "₹6,450",
    wasPrice: "₹7,200",
    discountLabel: "10% off",
    imageDefault:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80&auto=format&fit=crop",
    imageHover:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80&auto=format&fit=crop",
    hoverKind: "lifestyle",
  },
  {
    id: "4",
    artist: "Arjun Mehta",
    title: "Urban Geometry No. 12",
    price: "₹3,890",
    wasPrice: "₹4,299",
    discountLabel: "10% off",
    isNew: true,
    imageDefault:
      "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80&auto=format&fit=crop",
    imageHover:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80&auto=format&fit=crop",
    hoverKind: "lifestyle",
  },
]

function ProductCard({ item }: { item: Bestseller }) {
  return (
    <article className="group flex flex-col font-serif text-[#0A0A0A]">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F4F2EF]">
        {/* Default artwork */}
        <img
          src={item.imageDefault}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out group-hover:opacity-0"
          loading="lazy"
        />

        {/* Hover layer: lifestyle image or diagram */}
        {item.hoverKind === "lifestyle" && item.imageHover ? (
          <img
            src={item.imageHover}
            alt={`${item.title} — in room`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
            <GalleryWallDiagram />
          </div>
        )}

        {/* Edge arrows — decorative (reference layout) */}
        <div
          className="pointer-events-none absolute inset-y-8 left-1 z-10 flex w-7 items-center justify-center rounded border border-[#E0E0E0] bg-white/90 text-[#0A0A0A] opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
        </div>
        <div
          className="pointer-events-none absolute inset-y-8 right-1 z-10 flex w-7 items-center justify-center rounded border border-[#E0E0E0] bg-white/90 text-[#0A0A0A] opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        >
          <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
        </div>

        {/* Badges */}
        <div className="absolute left-2 top-2 z-10 flex flex-col gap-1.5">
          {item.isNew && (
            <span className="bg-[#0A0A0A] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
              New in
            </span>
          )}
          {item.discountLabel && (
            <span className="bg-[#0A0A0A] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
              {item.discountLabel}
            </span>
          )}
        </div>

        <button
          type="button"
          className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#0A0A0A] shadow-sm transition hover:bg-white"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4" strokeWidth={1.5} />
        </button>

        {/* Quick buy — reference */}
        <div className="absolute inset-x-3 bottom-3 z-10 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href="https://app.artyug.art"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-[#0A0A0A] bg-white py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A0A0A] transition hover:bg-[#0A0A0A] hover:text-white"
          >
            Quick buy
          </a>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center text-center">
        <p className="text-xs text-[#5C5855]">{item.artist}</p>
        <h3 className="mt-1 max-w-[16rem] text-sm font-semibold leading-snug text-[#0A0A0A]">{item.title}</h3>
        <p className="mt-2 text-sm text-[#0A0A0A]">
          <span className="mr-1">From {item.price}</span>
          {item.wasPrice && (
            <>
              <span className="text-[#6B6560] line-through">{item.wasPrice}</span>
              <span className="ml-1.5 text-[#8B4513]">Sale</span>
            </>
          )}
        </p>
      </div>
    </article>
  )
}

export default function BestsellersSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    const w = el.clientWidth * 0.85
    el.scrollBy({ left: dir * w, behavior: "smooth" })
  }

  return (
    <section className="border-t border-[#E2DDD8] bg-white py-14 sm:py-20" aria-labelledby="bestsellers-heading">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-10 flex flex-col items-center gap-3">
          <div className="flex w-full max-w-md items-center justify-between gap-4 sm:max-w-lg">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[#E2DDD8] text-[#0A0A0A] transition hover:bg-[#F5F1EC]"
              aria-label="Scroll bestsellers left"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.25} />
            </button>
            <h2 id="bestsellers-heading" className="font-serif text-2xl text-[#0A0A0A] sm:text-3xl">
              Bestsellers
            </h2>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[#E2DDD8] text-[#0A0A0A] transition hover:bg-[#F5F1EC]"
              aria-label="Scroll bestsellers right"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
          <a
            href="https://app.artyug.art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0A0A0A] underline decoration-[#C8C3BC] underline-offset-4 transition hover:decoration-[#E8470A]"
          >
            View all
          </a>
        </header>

        {/* Mobile: horizontal snap scroll; desktop: 4-col grid */}
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:gap-8 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0"
        >
          {bestsellers.map((item) => (
            <div key={item.id} className="w-[78vw] shrink-0 snap-center sm:w-[42vw] lg:w-auto">
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
