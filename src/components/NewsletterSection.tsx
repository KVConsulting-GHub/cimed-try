import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="newsletter-bg py-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Mail className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-muted-foreground mb-8">
            Receba dicas de saúde, lançamentos e promoções exclusivas diretamente no seu e-mail
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-search flex-1"
            />
            <Button className="btn-primary inline-flex items-center gap-2 whitespace-nowrap">
              Inscrever-se
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Ao se inscrever, você concorda com nossa{" "}
            <a href="#" className="underline hover:text-foreground transition-colors">
              Política de Privacidade
            </a>{" "}
            e autoriza o recebimento de comunicações.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
