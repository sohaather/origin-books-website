import Seo from '@/components/Seo'
import Hero from '@/components/sections/Hero'
import Introduction from '@/components/sections/Introduction'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ProcessSection from '@/components/sections/ProcessSection'
import WhyAuthorsChooseUs from '@/components/sections/WhyAuthorsChooseUs'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import FaqSection from '@/components/sections/FaqSection'
import FinalCta from '@/components/sections/FinalCta'

export default function Home() {
  return (
    <>
      <Seo
        title="Origin Books Publishing | Book Publishing Services for Authors Worldwide"
        description="Origin Books Publishing helps authors worldwide publish with editing, book formatting, cover design, eBook and print publishing, Amazon KDP and IngramSpark distribution, ISBN registration, and book marketing."
        path="/"
      />
      <Hero />
      <Introduction />
      <ServicesGrid />
      <ProcessSection />
      <WhyAuthorsChooseUs />
      <PortfolioPreview />
      <FaqSection />
      <FinalCta />
    </>
  )
}
