import { Camera, Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                A.K.M. Muntasir
              </span>
            </div>
            <p className="text-sm opacity-80">
              Blending Technology and Art<br />
              Building Intelligent Systems & Capturing Timeless Moments
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm opacity-80">
              <div>About Me</div>
              <div>Portfolio</div>
              <div>Services</div>
              <div>Contact</div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.facebook.com/muntasir.shawon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/80 transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/muntasir_shawon?igsh=MTEwODQyNWNuc216Nw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-coral rounded-lg flex items-center justify-center hover:bg-coral/80 transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="mailto:muntasir.shawon78@gmail.com"
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/80 transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
            <p className="text-sm opacity-80">
              muntasir.shawon78@gmail.com<br />
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} A.K.M. Muntasir Uddin Shawon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
