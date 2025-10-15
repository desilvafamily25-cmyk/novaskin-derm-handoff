import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-charcoal mb-3">NovaSkin Medical</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Skin Cancer & Dermatology by Dr Premila Hewage
            </p>
            <p className="text-xs text-muted-foreground">
              MBBS FRACGP
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-charcoal mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/skin-checks" className="text-muted-foreground hover:text-sage-dark transition-colors">
                  Skin Cancer Checks
                </Link>
              </li>
              <li>
                <Link to="/dermatology" className="text-muted-foreground hover:text-sage-dark transition-colors">
                  Dermatology Conditions
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-sage-dark transition-colors">
                  About Dr Premila
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-sage-dark transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-charcoal mb-3">Information</h4>
            <p className="text-xs text-muted-foreground mb-4">
              Information on this site is for general educational purposes only and does not replace a personal medical consultation.
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 NovaSkin Medical. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
