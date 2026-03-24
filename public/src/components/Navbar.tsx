import { Search, ShoppingCart, User, Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Gamepad2 className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold gradient-text hidden sm:block">
            NEXUS
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Loja</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Biblioteca</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Comunidade</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Novidades</a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {searchOpen ? (
            <div className="flex items-center glass-card rounded-lg px-3 py-1.5 animate-slide-in">
              <Search className="h-4 w-4 text-muted-foreground mr-2" />
              <input
                type="text"
                placeholder="Buscar jogos..."
                className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-40"
                autoFocus
              />
              <button onClick={() => setSearchOpen(false)}>
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Search className="h-5 w-5 text-muted-foreground" />
            </button>
          )}

          <button className="p-2 rounded-lg hover:bg-secondary transition-colors relative">
            <ShoppingCart className="h-5 w-5 text-muted-foreground" />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
              3
            </span>
          </button>

          <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <User className="h-5 w-5 text-muted-foreground" />
          </button>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-border px-4 py-4 animate-fade-in">
          <div className="flex flex-col gap-3">
            <a href="#" className="text-sm font-medium text-foreground">Loja</a>
            <a href="#" className="text-sm font-medium text-muted-foreground">Biblioteca</a>
            <a href="#" className="text-sm font-medium text-muted-foreground">Comunidade</a>
            <a href="#" className="text-sm font-medium text-muted-foreground">Novidades</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
