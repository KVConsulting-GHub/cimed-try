import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const metrics = [
  { number: "50+", label: "Milhões de brasileiros atendidos" },
  { number: "5.000+", label: "Municípios alcançados" },
  { number: "500+", label: "Produtos no portfólio" },
];

export function CommitmentSection() {
  return (
    <section className="commitment-bg py-16 md:py-24">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Nosso compromisso é com você
            </h2>
            <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed text-primary-foreground/80">
              Acreditamos que saúde de qualidade é um direito de todos. Por isso, trabalhamos todos os dias 
              para democratizar o acesso a medicamentos, levando bem-estar para milhões de famílias brasileiras.
              Nossa missão vai além de produzir remédios - queremos fazer parte da jornada de
              saúde e bem-estar de cada brasileiro.
            </p>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-8 md:gap-12 mb-12"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <p className="metric-number text-primary-foreground mb-2">{metric.number}</p>
                <p className="text-sm text-primary-foreground/70">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button className="bg-foreground text-white font-semibold px-8 py-3 rounded-md inline-flex items-center gap-2 hover:bg-foreground/90 transition-colors">
              Conheça Nossa História
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
