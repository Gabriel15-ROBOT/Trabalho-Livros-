import GameCard from "./GameCard";
import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";
import game5 from "@/assets/game-5.jpg";
import game6 from "@/assets/game-6.jpg";
import game7 from "@/assets/game-7.jpg";
import game8 from "@/assets/game-8.jpg";

const games = [
  { image: game1, title: "Stellar Warfare", price: "R$ 89,90", originalPrice: "R$ 149,90", discount: "40%", tags: ["Ação", "Sci-Fi"] },
  { image: game2, title: "Kingdoms of Ashfall", price: "R$ 129,90", tags: ["RPG", "Estratégia"] },
  { image: game3, title: "Neon District", price: "R$ 59,90", originalPrice: "R$ 99,90", discount: "40%", tags: ["Cyberpunk", "Aventura"] },
  { image: game4, title: "Last Haven", price: "R$ 79,90", tags: ["Sobrevivência", "Mundo Aberto"] },
  { image: game5, title: "Abyssal Depths", price: "R$ 49,90", originalPrice: "R$ 69,90", discount: "28%", tags: ["Exploração", "Puzzle"] },
  { image: game6, title: "Velocity X", price: "R$ 99,90", tags: ["Corrida", "Futurista"] },
  { image: game7, title: "Hollow Corridors", price: "R$ 39,90", tags: ["Terror", "Indie"] },
  { image: game8, title: "Ronin's Path", price: "R$ 149,90", tags: ["Ação", "Samurai"] },
];

const GamesGrid = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Jogos <span className="gradient-text">Populares</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-1">Os mais jogados da semana</p>
        </div>
        <button className="text-sm text-primary hover:underline font-medium">
          Ver todos →
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {games.map((game) => (
          <GameCard key={game.title} {...game} />
        ))}
      </div>
    </section>
  );
};

export default GamesGrid;
