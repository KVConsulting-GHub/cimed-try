import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const newsItems = [
  {
    id: 1,
    category: "Institucional",
    title: "VitaCare renova certificação de qualidade e reafirma compromisso com excelência",
    image: news1,
  },
  {
    id: 2,
    category: "Inovação",
    title: "Laboratório amplia investimentos em pesquisa e desenvolvimento para 2025",
    image: news2,
  },
  {
    id: 3,
    category: "Saúde",
    title: "Programa de bem-estar incentiva práticas saudáveis em comunidades",
    image: news3,
  },
];

export function NewsSection() {
  return (
    <section className="py-20 bg-background" id="novidades">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Últimas Novidades
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das últimas notícias, eventos e inovações
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="badge-tag mb-3 inline-block">{item.category}</span>
                <h3 className="font-semibold text-foreground leading-snug mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ler mais
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="outline"
            className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            Ver todas as notícias
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
