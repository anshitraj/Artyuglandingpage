import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import BestsellersSection from "@/components/bestsellers-section"
import CommunitySection from "@/components/community-section"
import CTASection from "@/components/cta-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <BestsellersSection />
      <CommunitySection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  )
}
