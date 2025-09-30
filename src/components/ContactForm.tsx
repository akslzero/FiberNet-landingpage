import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    package: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Bikin message buat Telegram
    const message = `
    Nama: ${formData.name}
    Telepon: ${formData.phone}
    Email: ${formData.email}
    Alamat: ${formData.address}
    Paket: ${formData.package}
    Pesan Tambahan: ${formData.message || "-"}
      `;

      const botToken = "8100053649:AAGOaTrfMIK7k_CG4XDW__5rMZ8gQ5SIlTA"; // ganti sama token bot kamu
      const chatId = "8165187573"; // ganti sama chat id kamu

      try {
        const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message
          })
        });

        const data = await res.json();

        if (data.ok) {
          // Tampilkan toast sukses
          toast({
            title: "Pendaftaran Berhasil!",
            description: "Tim kami akan menghubungi Anda dalam 24 jam untuk proses instalasi.",
          });

          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            package: "",
            message: ""
          });
        } else {
          alert("Gagal kirim data ke Telegram.");
          console.error(data);
        }
      } catch (err) {
        console.error(err);
        alert("Terjadi error saat mengirim data ke Telegram.");
      }
    };


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Daftar <span className="gradient-text">Sekarang</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Isi formulir di bawah ini untuk mendaftar atau hubungi kami langsung
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="text-2xl">Formulir Pendaftaran</CardTitle>
              <CardDescription>
                Lengkapi data di bawah ini untuk proses pendaftaran yang cepat
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Budi Santoso"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="08123456789"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Budi@gmail.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Alamat Lengkap</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Jl. Contoh No. 123, Kelurahan, Kecamatan, Kota"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="package">Pilih Paket</Label>
                  <Select value={formData.package} onValueChange={(value) => handleInputChange("package", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih paket internet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="starter">Starter - 10 Mbps</SelectItem>
                      <SelectItem value="family">Family - 30 Mbps</SelectItem>
                      <SelectItem value="pro">Pro - 50 Mbps</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Pesan Tambahan (Opsional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Ada pertanyaan khusus atau permintaan instalasi?"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Daftar Sekarang
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="transition-smooth hover:card-glow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  Telepon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">0800-1234-5678</p>
                <p className="text-muted-foreground">Hubungi kami untuk konsultasi gratis</p>
              </CardContent>
            </Card>

            <Card className="transition-smooth hover:card-glow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@internetprovider.com</p>
                <p className="text-muted-foreground">Customer service siap membantu</p>
              </CardContent>
            </Card>

            <Card className="transition-smooth hover:card-glow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Alamat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Jl. Teknologi No. 123</p>
                <p className="text-muted-foreground">Jakarta Selatan, DKI Jakarta 12345</p>
              </CardContent>
            </Card>

            <Card className="transition-smooth hover:card-glow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Jam Operasional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Senin - Jumat</p>
                <p className="text-muted-foreground">08:00 - 22:00 (Customer Service)</p>
                <p className="text-muted-foreground">08:00 - 17:00 (Instalasi)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;