import TechNewsSlider from '../components/TechNewsSlider'
import PartnerLogos from '../components/PartnerLogos'
import LatestTechBlogs from '../components/LatestTechBlogs'
import HeroSection from '@/components/hero-section'
import FeaturedArticles from '@/components/featured-articles'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
    <HeroSection />

      <LatestTechBlogs />

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            Latest Tech News
          </h2>
          <TechNewsSlider />
        </div>
      </section>

      <FeaturedArticles/>

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-600">
            Our Trusted Partners
          </h2>
          <PartnerLogos />
        </div>
      </section>
    </div>
  )
}

