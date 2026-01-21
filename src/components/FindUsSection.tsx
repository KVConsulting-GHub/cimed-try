import { motion } from "framer-motion";
import { Search, MapPin, Building2, Store } from "lucide-react";
import { Button } from "./ui/button";

export function FindUsSection() {
  return (
    <section className="py-20 bg-background" id="onde-encontrar">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-border overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <MapPin className="w-8 h-8 text-primary" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Onde encontrar
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Encontre nossos produtos em farmácias e pontos de venda perto de você
              </p>

              {/* Search */}
              <div className="relative max-w-xl mx-auto mb-8">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Digite seu CEP ou cidade..."
                  className="input-search pl-14 pr-36"
                />
                <Button className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-2 px-6">
                  Buscar Farmácias
                </Button>
              </div>

              {/* Quick Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  className="rounded-full inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <Building2 className="w-4 h-4" />
                  Drogarias SP
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <Store className="w-4 h-4" />
                  Drogarias RJ
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <MapPin className="w-4 h-4" />
                  Pague Menos
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <Store className="w-4 h-4" />
                  Drogasil
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
