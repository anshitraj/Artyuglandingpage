import type { Metadata } from "next"
import Link from "next/link"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy — Artyug",
  description: "How Artyug handles personal data for creators and collectors using the platform.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F5F1EC]">
      <div className="mx-auto max-w-3xl px-6 pb-20 pt-28 md:pt-32">
        <p className="label-tag mb-4">Legal</p>
        <h1 className="display-sm mb-2 text-[#0A0A0A]">
          Privacy policy<span className="text-[#E8470A]">.</span>
        </h1>
        <p className="mb-10 text-sm text-[#6B6560]">Last updated April 7, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-[#3D3A37]">
          <section>
            <h2 className="mb-2 text-base font-bold text-[#0A0A0A]">Who we are</h2>
            <p>
              Artyug (&quot;we&quot;, &quot;us&quot;) provides tools for artists and collectors to list art, run
              events, join communities, and verify authenticity. This policy describes how we handle personal
              information when you use our website (artyug.art), downloadable apps, and related services.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-bold text-[#0A0A0A]">What we collect</h2>
            <ul className="list-inside list-disc space-y-1 text-[#6B6560]">
              <li>Account details you provide (e.g. name, email, creator profile, city).</li>
              <li>Content you upload (artwork listings, images, descriptions).</li>
              <li>Usage and device data typical for web and mobile apps (logs, diagnostics, approximate region).</li>
              <li>Transaction-related data needed to operate sales, certificates, and support.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-bold text-[#0A0A0A]">How we use data</h2>
            <p className="text-[#6B6560]">
              We use information to run the platform, authenticate users, prevent abuse, improve the product,
              communicate service updates, and meet legal obligations. We do not sell your personal data.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-bold text-[#0A0A0A]">Sharing</h2>
            <p className="text-[#6B6560]">
              We may share data with infrastructure providers (hosting, email, analytics) under contract, or when
              required by law. Public profile and listing content you choose to publish is visible as designed.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-bold text-[#0A0A0A]">Your choices</h2>
            <p className="text-[#6B6560]">
              You can request access, correction, or deletion of personal data where applicable by contacting us.
              You may opt out of non-essential communications via your account or unsubscribe links.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-bold text-[#0A0A0A]">Contact</h2>
            <p className="text-[#6B6560]">
              Questions about this policy:{" "}
              <a href="mailto:hello@artyug.art" className="font-semibold text-[#E8470A] underline underline-offset-2">
                hello@artyug.art
              </a>
            </p>
          </section>

          <p className="pt-4">
            <Link href="/" className="text-sm font-semibold text-[#E8470A] underline underline-offset-2">
              ← Back to home
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
