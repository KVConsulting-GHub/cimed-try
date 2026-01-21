import { motion } from "framer-motion";
import { Search, Building2, Store, MapPin, Warehouse } from "lucide-react";

const quickLinks = [
  { label: "Drogaria SP", icon: Building2 },
  { label: "Droga Raia", icon: Store },
  { label: "Pague Menos", icon: MapPin },
  { label: "Farmácias Viva", icon: Warehouse },
];

export function FindUsSection() {
  return (
    <section className="py-16 md:py-24 bg-background" id="onde-encontrar">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Onde encontrar CIMED
          </h2>
          <p className="text-muted-foreground">
            Nossos produtos estão disponíveis em farmácias de todo o Brasil
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white border-2 border-border p-6 md:p-8">
            {/* Search */}
            <div className="flex flex-col md:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Digite seu CEP ou endereço..."
                  className="input-search rounded-md pr-4"
                />
              </div>
              <button className="btn-primary whitespace-nowrap">
                Buscar Farmácias
              </button>
            </div>

            {/* Quick Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  className="btn-outline inline-flex items-center gap-2 text-sm"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
