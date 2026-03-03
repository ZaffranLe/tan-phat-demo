import AboutSection from '@/components/home/about-section';
import ContactSection from '@/components/home/contact-section';
import HeroSection from '@/components/home/hero-section';
import OurServicesSection from '@/components/home/our-services-section';
import StatisticSection from '@/components/home/statistic-section';
import ProductsSection from '@/components/home/products-section';

export default function LandingPage() {
  return (
    <div className="space-y-10 lg:space-y-20">
      <HeroSection />
      <div className="space-y-10 px-5 md:px-8 lg:space-y-20 lg:px-0">
        <AboutSection />
        <StatisticSection />
        <OurServicesSection />
        <ProductsSection />
        <ContactSection />
      </div>
    </div>
  );
}
