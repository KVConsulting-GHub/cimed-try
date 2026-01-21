import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-[#FFC83D]">
      {/* Decorative curve left */}
      <div className="absolute left-0 top-1/3 w-32 h-80 opacity-20 pointer-events-none">
        <svg viewBox="0 0 120 320" fill="none" className="w-full h-full">
          <path d="M-40 0C40 60 60 200 -40 320" stroke="#000" strokeWidth="2" />
        </svg>
      </div>

      {/* Dots pattern */}
      <div className="absolute right-12 top-32 hidden lg:block opacity-20">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black rounded-full" />
          ))}
        </div>
      </div>

      {/* Right image with curved mask */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[45%]">
        <div className="relative w-full h-full">
          <img
            src={heroImage}
            alt="Família feliz"
            className="w-full h-full object-cover"
          />

          {/* Curved mask */}
          <svg
            className="absolute left-0 top-0 h-full w-24"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M100,0 C40,20 40,80 100,100 L0,100 L0,0 Z"
              fill="#FFC83D"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-6 lg:px-12">
        <div className="min-h-[calc(100vh-5rem)] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="text-black tracking-[-0.02em] leading-[1]">
              {/* Saúde e bem- / estar */}
              <span className="block font-medium text-[42px] sm:text-[50px] lg:text-[38px]">
                Saúde e bem-estar
              </span>

              {/* para (menor) + todos os (destaque, sem quebrar) */}
              <span className="block">
                <span className="font-medium text-[38px] sm:text-[46px] lg:text-[38px]">
                  para{"   "}
                </span>
                <span className="font-black text-[62px] sm:text-[72px] lg:text-[70px] whitespace-nowrap">
                  todos os
                </span>
              </span>

              {/* brasileiros + underline discreto */}
              <span className="relative block font-black text-[70px] sm:text-[70px] lg:text-[72px] w-fit">
                brasileiros.
                <span className="absolute left-0 -bottom-2 h-[7px] w-[76%] bg-black/12 rounded-full" />
              </span>
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold shadow-md hover:shadow-lg transition">
                <Search className="w-5 h-5" />
                Encontrar Medicamentos
              </button>

              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-black/90 transition">
                Nossos Produtos
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-10 max-w-md text-black/80 leading-relaxed">
              Cuidando da sua saúde há quase{" "}
              <strong className="text-black">50 anos</strong> com medicamentos
              de qualidade certificada pela Anvisa e preços que cabem no seu
              bolso.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path
            d="M0 30C240 50 480 10 720 20C960 30 1200 50 1440 30V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
