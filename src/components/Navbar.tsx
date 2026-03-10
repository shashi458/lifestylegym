import { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4" aria-label="Main navigation">
        <a href="#" className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-primary" />
          <span className="font-display text-2xl text-foreground">IRON FORGE</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
          <Button variant="hero" size="sm">Join Now</Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 py-6 space-y-4">
          <a href="#services" className="block text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>Services</a>
          <a href="#pricing" className="block text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#testimonials" className="block text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>Testimonials</a>
          <Button variant="hero" className="w-full">Join Now</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
