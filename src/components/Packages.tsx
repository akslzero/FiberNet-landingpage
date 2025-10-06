import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Wifi, Zap, Shield } from "lucide-react";

const packages = [
  {
    name: "Starter",
    speed: "10 Mbps",
    price: "99.000",
    originalPrice: "199.000",
    description: "Cocok untuk browsing dan streaming basic",
    features: [
      "Download hingga 10 Mbps",
      "Upload hingga 5 Mbps",
      "Unlimited kuota",
      "Gratis instalasi",
      "Modem WiFi gratis",
    ],
    popular: true,
    icon: Wifi,
  },
  {
    name: "Family",
    speed: "30 Mbps",
    price: "215.000",
    originalPrice: "299.000",
    description: "Ideal untuk keluarga dengan banyak device",
    features: [
      "Download hingga 30 Mbps",
      "Upload hingga 15 Mbps",
      "Unlimited kuota",
      "Gratis instalasi",
      "Modem WiFi AC gratis",
    ],
    popular: false,
    icon: Zap,
  },
  {
    name: "Pro",
    speed: "50 Mbps",
    price: "285.000",
    originalPrice: "399.000",
    description: "Untuk gaming dan streaming 4K tanpa lag",
    features: [
      "Download hingga 50 Mbps",
      "Upload hingga 25 Mbps",
      "Unlimited kuota",
      "Gratis instalasi",
      "Gaming router gratis",
    ],
    popular: false,
    icon: Shield,
  },
];

const Packages = () => {
  const handleSelectPackage = (packageName: string) => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pilih Paket <span className="gradient-text">Terbaik</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai pilihan paket internet yang sesuai dengan
            kebutuhan dan budget Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <Card
                key={index}
                className={`relative transition-smooth hover:scale-105 ${
                  pkg.popular
                    ? "border-primary card-glow"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                    Paling Populer
                  </Badge>
                )}

                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>

                  <div className="space-y-2">
                    <div className="text-4xl font-bold gradient-text">
                      {pkg.speed}
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold">
                        Rp {pkg.price}
                        <span className="text-sm font-normal text-muted-foreground">
                          /bulan
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground line-through">
                        Rp {pkg.originalPrice}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={pkg.popular ? "hero" : "default"}
                    className="w-full"
                    onClick={() => handleSelectPackage(pkg.name)}
                  >
                    Pilih Paket Ini
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
