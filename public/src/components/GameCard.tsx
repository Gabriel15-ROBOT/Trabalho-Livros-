interface GameCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  tags: string[];
}

const GameCard = ({ image, title, price, originalPrice, discount, tags }: GameCardProps) => {
  return (
    <div className="group glass-card rounded-xl overflow-hidden card-shadow hover:glow-border transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {discount && (
          <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-accent text-accent-foreground text-xs font-bold">
            -{discount}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-sm mb-2 truncate">{title}</h3>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-[10px] font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
          )}
          <span className="text-sm font-bold text-primary">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
