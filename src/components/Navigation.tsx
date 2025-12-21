import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { useState, useMemo } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { searchData, SearchItem } from "@/data/searchData";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skin Cancer Checks", path: "/skin-checks" },
    { name: "Dermatology", path: "/dermatology" },
    { name: "Skin Care", path: "/skin-care" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Group search items by category
  const groupedSearchItems = useMemo(() => {
    const groups: Record<string, SearchItem[]> = {};
    searchData.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold text-charcoal">NovaSkin</span>
            <span className="text-xs text-muted-foreground">
              Skin Cancer & Dermatology
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-sage-dark ${
                  isActive(link.path) ? "text-sage-dark" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search & CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="hover:bg-sage-light"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="cta" asChild>
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Search Dialog */}
          <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
            <CommandInput placeholder="Search conditions, treatments, ingredients..." />
            <CommandList className="max-h-[400px]">
              <CommandEmpty>No results found.</CommandEmpty>
              {Object.entries(groupedSearchItems).map(([category, items]) => (
                <CommandGroup key={category} heading={category}>
                  {items.map((item, idx) => (
                    <CommandItem
                      key={`${item.path}-${item.name}-${idx}`}
                      value={`${item.name} ${item.keywords.join(" ")}`}
                      onSelect={() => {
                        navigate(item.path);
                        setSearchOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      <Search className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{item.name}</span>
                      <span className="ml-auto text-xs text-muted-foreground">{item.category}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </CommandDialog>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {/* Mobile Search */}
              <button
                onClick={() => {
                  setSearchOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Search className="h-4 w-4" />
                Search...
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-sage-dark ${
                    isActive(link.path) ? "text-sage-dark" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="cta" asChild className="w-full">
                <Link to="/contact">Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
