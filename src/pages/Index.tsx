import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { SearchSection } from "@/components/SearchSection";
import { ProductsSection } from "@/components/ProductsSection";
import { FindUsSection } from "@/components/FindUsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { CommitmentSection } from "@/components/CommitmentSection";
import { NewsSection } from "@/components/NewsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <SearchSection />
        <ProductsSection />
        <FindUsSection />
        <WhyChooseSection />
        <CommitmentSection />
        <NewsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
