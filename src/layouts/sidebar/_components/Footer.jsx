import { Package2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-4 px-6 bg-muted/40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Package2 className="h-6 w-6 mr-2" />
          <span className="font-semibold">Acme Inc</span>
        </div>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
        </nav>
        <div className="text-sm text-muted-foreground mt-4 md:mt-0">
          © {new Date().getFullYear()} Acme Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;