import heroImage from "@/assets/hero-game.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jogo em destaque"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-end pb-20">
        <div className="max-w-xl animate-fade-in">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground mb-4">
            🔥 EM DESTAQUE
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Elysium <br />
            <span className="gradient-text">Chronicles</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            Explore reinos esquecidos, enfrente criaturas ancestrais e forje seu
            destino em um mundo épico de fantasia sombria.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-border">
              Comprar — R$ 199,90
            </button>
            <button className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors">
              + Lista de Desejos
            </button>
          </div>
          <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="text-primary font-bold">94%</span> Avaliações positivas
            </span>
            <span>RPG • Ação • Mundo Aberto</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
