import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="newsletter-bg py-16 md:py-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-14 h-14 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Mail className="w-7 h-7 text-white" />
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-primary-foreground/70 mb-8 text-sm md:text-base">
            Receba dicas de saúde, lançamentos e promoções exclusivas diretamente no seu e-mail
          </p>

          <div className="bg-white p-6 md:p-8 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-search flex-1 rounded-md"
              />
              <button className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap">
                Inscrever-se
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-muted-foreground">
              Ao se inscrever, você concorda com nossa{" "}
              <a href="#" className="underline hover:text-foreground transition-colors">
                Política de Privacidade
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
