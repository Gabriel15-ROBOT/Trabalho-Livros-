import { Swords, Rocket, Ghost, Trophy, Puzzle, Globe } from "lucide-react";

const categories = [
  { icon: Swords, label: "Ação", count: "2.4k" },
  { icon: Rocket, label: "Sci-Fi", count: "1.8k" },
  { icon: Ghost, label: "Terror", count: "950" },
  { icon: Trophy, label: "Esportes", count: "1.2k" },
  { icon: Puzzle, label: "Puzzle", count: "780" },
  { icon: Globe, label: "Mundo Aberto", count: "1.5k" },
];

const Categories = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="font-display text-2xl font-bold text-foreground mb-8">
        Explorar <span className="gradient-accent-text">Categorias</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map(({ icon: Icon, label, count }) => (
          <button
            key={label}
            className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 hover:glow-border transition-all duration-300 group cursor-pointer"
          >
            <Icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm font-semibold text-foreground">{label}</span>
            <span className="text-xs text-muted-foreground">{count} jogos</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
