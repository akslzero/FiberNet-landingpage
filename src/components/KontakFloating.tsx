import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FloatingButtons = () => {
  const waNumber = "62818618157"; // Ganti nomor WA lu (tanpa +)
  const waMessage = "Halo! Saya mau tanya tentang paket internetnya.";
  const telegramUsername = "usernamekamu"; // Ganti username Telegram lu (tanpa @)

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(waMessage);
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleTelegram = () => {
    window.open(`https://t.me/${telegramUsername}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Tombol Telegram */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleTelegram}
            className="
              bg-blue-500 hover:bg-blue-600
              text-white rounded-full shadow-lg
              w-14 h-14 flex items-center justify-center
              transition-all duration-300 hover:scale-110
            "
            aria-label="Chat via Telegram"
          >
            <FaTelegramPlane size={26} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Chat via Telegram</p>
        </TooltipContent>
      </Tooltip>

      {/* Tombol WhatsApp */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleWhatsApp}
            className="
              bg-green-500 hover:bg-green-600
              text-white rounded-full shadow-lg
              w-14 h-14 flex items-center justify-center
              transition-all duration-300 hover:scale-110
            "
            aria-label="Chat via WhatsApp"
          >
            <FaWhatsapp size={28} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Chat via WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default FloatingButtons;
