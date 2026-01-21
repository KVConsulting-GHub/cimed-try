import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Pill, Heart, Droplets, Baby, Sun, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";

const categories = [
  { label: "Dor e Febre", icon: Pill },
  { label: "Genéricos", icon: Heart },
  { label: "Dermocosméticos", icon: Droplets },
  { label: "Infantil", icon: Baby },
  { label: "Vitaminas", icon: Sun },
  { label: "Outros", icon: MoreHorizontal },
];

export function SearchSection() {
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="py-20 bg-background" id="busca">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que você procura?
          </h2>
          <p className="text-muted-foreground mb-8">
            Encontre medicamentos, vitaminas e produtos para o seu bem-estar
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Digite o nome do medicamento ou princípio ativo..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="input-search pl-14 pr-32"
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-2 px-6">
              Buscar
            </Button>
          </div>

          {/* Category Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                onClick={() => setActiveCategory(
                  activeCategory === category.label ? null : category.label
                )}
                className={`chip ${activeCategory === category.label ? 'chip-active' : ''}`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
