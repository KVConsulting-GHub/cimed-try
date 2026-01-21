import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const metrics = [
  { number: "50+", label: "Milhões de brasileiros atendidos" },
  { number: "5.000+", label: "Municípios alcançados" },
  { number: "500+", label: "Produtos no portfólio" },
];

export function CommitmentSection() {
  return (
    <section className="commitment-bg py-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nosso compromisso é com você
            </h2>
            <p className="text-lg opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Acreditamos que saúde de qualidade é um direito de todos. Por isso, trabalhamos todos os dias 
              para democratizar o acesso a medicamentos, levando bem-estar para milhões de famílias brasileiras.
            </p>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-8 mb-12"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <p className="metric-number text-primary mb-2">{metric.number}</p>
                <p className="text-sm opacity-80">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button className="btn-outline-light inline-flex items-center gap-2">
              Conheça Nossa História
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
