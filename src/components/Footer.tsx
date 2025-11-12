import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">AKM Muntasir Uddin Shawon</p>
          <p className="text-sm opacity-90">AI Developer | Photographer</p>
          
          <div className="flex items-center justify-center gap-2 text-sm opacity-80">
            <span>Built with</span>
            <Heart className="h-4 w-4 fill-coral text-coral animate-pulse" />
            <span>using React & TypeScript</span>
          </div>
          
          <p className="text-xs opacity-70">
            © {new Date().getFullYear()} AKM Muntasir Uddin Shawon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
