import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  { id: 1, name: "Genéricos CIMED", tag: "Genéricos", image: product1 },
  { id: 2, name: "Antimicotil", tag: "Vitaminas", image: product2 },
  { id: 3, name: "Cimegripe MKC", tag: "Genérico", image: product3 },
  { id: 4, name: "Gavrilax CIMED", tag: "Medicamento", image: product4 },
  { id: 5, name: "Antialérgico", tag: "Saúde", image: product1 },
];

export function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="products-bg py-16 md:py-24" id="produtos">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa linha completa de medicamentos e dermocosméticos
          </p>
        </motion.div>

        {/* Desktop Grid with carousel arrows */}
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center hover:border-foreground transition-colors shadow-lg hidden lg:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="product-card group"
              >
                <div className="relative">
                  <span className="badge-tag absolute top-3 left-3 z-10 text-[10px]">
                    {product.tag}
                  </span>
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground text-sm mb-3 line-clamp-2">{product.name}</h3>
                  <button className="w-full btn-outline text-xs py-2 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                    Saiba Mais
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center hover:border-foreground transition-colors shadow-lg hidden lg:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="btn-secondary inline-flex items-center gap-2">
            Ver Todos os Produtos
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
