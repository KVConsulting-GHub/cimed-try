import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

export function HeroSection() {
  return (
    <section className="hero-bg min-h-screen relative overflow-hidden pt-20">
      {/* Decorative curved shape on left */}
      <div className="absolute left-0 top-1/4 w-24 md:w-32 h-64 md:h-80">
        <svg viewBox="0 0 100 300" fill="none" className="w-full h-full">
          <path
            d="M-50 0C30 50 50 150 -50 300"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="3"
            strokeOpacity="0.15"
            fill="none"
          />
          <path
            d="M-30 0C50 60 70 160 -30 300"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="2"
            strokeOpacity="0.1"
            fill="none"
          />
        </svg>
      </div>

      {/* Decorative dots pattern */}
      <div className="absolute right-10 top-32 hidden lg:block">
        <div className="grid grid-cols-4 gap-2 opacity-20">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-foreground rounded-full" />
          ))}
        </div>
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] mb-6">
              Saúde e bem-estar
              <br />
              para <span className="relative inline-block">
                <span className="relative z-10">todos os</span>
              </span>
              <br />
              <span className="relative inline-block font-black">
                brasileiros.
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8C80 4 220 4 298 8"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeOpacity="0.3"
                  />
                </svg>
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button className="btn-secondary inline-flex items-center justify-center gap-2 rounded-full">
                <Search className="w-5 h-5" />
                Encontrar Medicamentos
              </button>
              <button className="btn-primary inline-flex items-center justify-center gap-2 rounded-full">
                Nossos Produtos
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Família feliz e saudável"
                className="relative z-10 w-full max-w-xl mx-auto lg:max-w-none object-cover rounded-3xl shadow-2xl aspect-[4/5]"
              />

              {/* Floating info card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-8 right-4 md:right-0 bg-white rounded-lg shadow-xl p-4 md:p-5 z-20 max-w-[200px] md:max-w-[240px]"
              >
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Cuidando da sua saúde há quase <strong className="text-foreground">50 anos</strong> com medicamentos de qualidade certificada pela Anvisa e preços que cabem no seu bolso.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L1440 60L1440 30C1200 50 960 0 720 20C480 40 240 10 0 30L0 60Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
