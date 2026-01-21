import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-family.jpg";

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen pt-20 md:pt-24 relative overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Saúde e bem-estar
              <br />
              <span className="relative inline-block">
                para toda a família.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M2 6C50 2 150 2 198 6"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Cuidando da sua saúde há mais de 50 anos com medicamentos de 
              qualidade certificada e preços acessíveis que cabem no seu bolso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary inline-flex items-center gap-2">
                <Search className="w-5 h-5" />
                Buscar Medicamentos
              </Button>
              <Button className="btn-secondary inline-flex items-center gap-2">
                Saiba Mais
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Anos de história</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Produtos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">5M+</p>
                <p className="text-sm text-muted-foreground">Famílias atendidas</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
              
              <img
                src={heroImage}
                alt="Família feliz e saudável"
                className="relative z-10 w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover aspect-[3/4]"
              />

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 md:left-0 bg-white rounded-2xl shadow-xl p-4 z-20"
              >
                <p className="text-sm text-muted-foreground">Qualidade certificada pela</p>
                <p className="font-bold text-foreground">ANVISA</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
