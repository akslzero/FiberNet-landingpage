const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/send-to-telegram", async (req, res) => {
  const { name, email, phone, address, package: selectedPackage, message } = req.body;

  const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

  const text = `
Nama: ${name}
Telepon: ${phone}
Email: ${email}
Alamat: ${address}
Paket: ${selectedPackage}
Pesan Tambahan: ${message || "-"}
  `;

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    const data = await telegramRes.json();

    if (!data.ok) {
      return res.status(500).json({ message: "Telegram error", error: data });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Telegram error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
