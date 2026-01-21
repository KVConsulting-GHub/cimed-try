import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail } from "lucide-react";

const footerLinks = {
  produtos: [
    { label: "Genéricos", href: "#" },
    { label: "Nutracêuticos", href: "#" },
    { label: "Estética e Beleza", href: "#" },
    { label: "Ver Todos", href: "#" },
  ],
  institucional: [
    { label: "Sobre Nós", href: "#" },
    { label: "Trabalhe Conosco", href: "#" },
    { label: "Imprensa", href: "#" },
  ],
  suporte: [
    { label: "Fale Conosco", href: "#" },
    { label: "SAC", href: "#" },
    { label: "Canal de Ouvidoria", href: "#" },
    { label: "Farmacovigilância", href: "#" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Política de Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="footer-bg pt-12 md:pt-16 pb-6">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 mb-4 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <span className="font-bold text-xl text-white">VitaCare</span>
            </div>
            <p className="text-xs opacity-60 mb-4 max-w-xs leading-relaxed">
              Sua parceira na jornada pela saúde. Qualidade, acessibilidade e compromisso com o bem-estar dos brasileiros.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center 
                             hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Produtos</h4>
            <ul className="space-y-2">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs opacity-60 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Institucional</h4>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs opacity-60 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Suporte</h4>
            <ul className="space-y-2">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs opacity-60 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs opacity-60 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs opacity-60 mb-2">
                <Phone className="w-3 h-3" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center gap-2 text-xs opacity-60">
                <Mail className="w-3 h-3" />
                <span>sac@vitacare.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50">
            © 2025 VitaCare. Todos os direitos reservados.
          </p>
          <p className="text-[10px] opacity-40 text-center md:text-right uppercase tracking-wide">
            SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO.
          </p>
        </div>
      </div>
    </footer>
  );
}
