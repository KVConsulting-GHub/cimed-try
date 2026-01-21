import { motion } from "framer-motion";

const partners = [
  { name: "Brand A", initial: "A" },
  { name: "Brand B", initial: "B" },
  { name: "Brand C", initial: "C" },
  { name: "Brand D", initial: "D" },
  { name: "Brand E", initial: "E" },
  { name: "Brand F", initial: "F" },
  { name: "Brand G", initial: "G" },
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground text-lg">
            Nossas marcas estão <span className="font-semibold text-foreground">presentes no seu dia a dia</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-border 
                         flex items-center justify-center shadow-sm hover:shadow-md 
                         hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <span className="text-2xl md:text-3xl font-bold text-muted-foreground">
                {partner.initial}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
