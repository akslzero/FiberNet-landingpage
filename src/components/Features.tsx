import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Clock, Headphones, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Kecepatan Tinggi",
    description: "Fiber optik dengan kecepatan hingga 1 Gbps untuk pengalaman internet terbaik"
  },
  {
    icon: Shield,
    title: "Keamanan Terjamin", 
    description: "Koneksi aman dengan teknologi enkripsi terdepan untuk melindungi data Anda"
  },
  {
    icon: Clock,
    title: "Uptime 99.9%",
    description: "Jaringan yang stabil dan handal dengan downtime minimal sepanjang tahun"
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Tim customer service siap membantu Anda kapan saja, termasuk hari libur"
  },
  {
    icon: Wifi,
    title: "WiFi 6 Ready",
    description: "Modem dan router terbaru dengan teknologi WiFi 6 untuk performa maksimal"
  },
  {
    icon: Users,
    title: "Multi Device",
    description: "Dukung hingga 50+ device bersamaan tanpa mengurangi kecepatan internet"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mengapa Memilih <span className="gradient-text">Kami?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami menghadirkan layanan internet terdepan dengan teknologi fiber optik terbaru
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center transition-smooth hover:scale-105 hover:card-glow border-border hover:border-primary/50"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-primary w-fit">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;