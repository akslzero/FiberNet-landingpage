import { Wifi, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Wifi className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">FiberNet</span>
            </div>
            <p className="text-muted-foreground">
              Penyedia layanan internet fiber optik terdepan di Indonesia dengan komitmen 
              memberikan koneksi tercepat dan terstabil.
            </p>
            <div className="flex gap-4">
              <div className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-smooth cursor-pointer">
                <Facebook className="w-5 h-5 text-primary" />
              </div>
              <div className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-smooth cursor-pointer">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Layanan</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-smooth cursor-pointer">Internet Rumah</li>
              <li className="hover:text-primary transition-smooth cursor-pointer">Dedicated Line</li>
              <li className="hover:text-primary transition-smooth cursor-pointer">Colocation</li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Bantuan</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-smooth cursor-pointer">Customer Care</li>
              <li className="hover:text-primary transition-smooth cursor-pointer">FAQ</li>
              <li className="hover:text-primary transition-smooth cursor-pointer">Panduan Instalasi</li>
              <li className="hover:text-primary transition-smooth cursor-pointer">Speed Test</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontak</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Telepon:</strong><br />
                0800-1234-5678
              </li>
              <li>
                <strong>Email:</strong><br />
                info@fibernet.id
              </li>
              <li>
                <strong>Alamat:</strong><br />
                Jl. Teknologi No. 123<br />
                Jakarta Selatan, DKI Jakarta
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 FiberNet. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;