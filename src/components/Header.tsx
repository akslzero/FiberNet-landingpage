import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Wifi } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Wifi className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">FiberNet</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('packages')} 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Paket
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Fitur
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Kontak
            </button>
            <Button variant="hero" onClick={() => scrollToSection('contact')}>
              Daftar Sekarang
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('packages')} 
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Paket
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Fitur
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Kontak
              </button>
              <Button variant="hero" onClick={() => scrollToSection('contact')} className="w-fit">
                Daftar Sekarang
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;