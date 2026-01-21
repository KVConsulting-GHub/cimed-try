import { motion } from "framer-motion";
import { Award, ShieldCheck, Globe, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Quase 50 anos de experiência",
    description: "Desde 1975, dedicando-se à saúde dos brasileiros com excelência e comprometimento.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade certificada",
    description: "Todos os nossos medicamentos são aprovados pela ANVISA, garantindo segurança e eficácia.",
  },
  {
    icon: Globe,
    title: "Presença nacional",
    description: "Presentes em todo o Brasil, levando saúde acessível para milhões de famílias.",
  },
  {
    icon: BadgeDollarSign,
    title: "Preços acessíveis",
    description: "Comprometidos em oferecer medicamentos de qualidade com preços que cabem no bolso.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Por que escolher a
            </h2>
            <span className="text-3xl md:text-4xl font-bold text-primary">VitaCare</span>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">V</span>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossa expertise e compromisso fazem a diferença na sua saúde
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-border p-6 text-center hover:border-foreground transition-colors"
            >
              <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-sm">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
