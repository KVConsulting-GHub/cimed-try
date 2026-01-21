import { motion } from "framer-motion";

const partners = [
  { name: "Nevralgex", color: "bg-red-500" },
  { name: "XO", color: "bg-yellow-500" },
  { name: "KMED", color: "bg-gray-700" },
  { name: "Cimelide", color: "bg-green-600" },
  { name: "Ciflogex", color: "bg-blue-600" },
  { name: "Foxx", color: "bg-orange-500" },
  { name: "Lavitan", color: "bg-yellow-400" },
  { name: "Acetil", color: "bg-purple-600" },
];

export function PartnersSection() {
  return (
    <section className="py-8 md:py-12 bg-background border-b border-border">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <p className="text-muted-foreground text-sm md:text-base">
            A <span className="font-bold text-primary">VitaCare</span> está presente no seu dia a dia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-border 
                         flex items-center justify-center shadow-sm hover:shadow-md 
                         hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <span className="text-xs md:text-sm font-bold text-muted-foreground text-center px-1">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
