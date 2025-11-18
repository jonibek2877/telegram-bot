import TelegramBot from "node-telegram-bot-api";

const TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(TOKEN);

// -------- Vercel handler (webhook) --------
export default function handler(req, res) {
  if (req.method === "POST") {
    bot.processUpdate(req.body);
    return res.status(200).send("OK");
  }
  res.status(200).send("Bot ishlayapti! 🚀");
}

// -------- Bot funksiyasi --------
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Assalomu alaykum! Vercelda ishlayapman 🚀");
});
