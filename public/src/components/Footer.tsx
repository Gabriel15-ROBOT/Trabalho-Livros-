import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-bold gradient-text">NEXUS</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sua plataforma definitiva para descobrir, comprar e jogar os melhores games.
            </p>
          </div>
          {[
            { title: "Loja", links: ["Novidades", "Promoções", "Gratuitos", "Pré-venda"] },
            { title: "Comunidade", links: ["Fórum", "Guias", "Workshops", "Streams"] },
            { title: "Suporte", links: ["Central de Ajuda", "Reembolsos", "Contato", "FAQ"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-foreground text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © 2026 Nexus Games. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
