import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-internet.jpg";

const Hero = () => {
  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold">
            Internet Super Cepat
            <span className="block gradient-text">Tanpa Batas</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Nikmati koneksi internet fiber optik tercepat dengan kecepatan hingga 1 Gbps. 
            Cocok untuk gaming, streaming, dan kerja dari rumah.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToPackages}
              className="text-lg px-8 py-6"
            >
              Lihat Paket Internet
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Hubungi Kami
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">1 Gbps</div>
              <div className="text-muted-foreground">Kecepatan Maksimal</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">24/7</div>
              <div className="text-muted-foreground">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary-glow rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;