//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "256742366969@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/user-attachments/assets/3bc8f1da-0dac-4a84-81d7-bae9012491a4";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "256742366969,256704376077,256742366969,256704376077,256742366969";
global.owner = process.env.OWNER_NUMBER || "256742366969,256742366969";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE4wWkRZY085b3Q0WmYvbU92WUk4S1ZWQ3RURURNRStuTXFBOXhoczkxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDFteit1UFE3dHduR1VEL0FFL2ZLTXRxcDBMVVFJcXNFKzg5M1F6bnpqbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Q202L0FCWE4wTHZDcE1zQWtydDI4N3Jwa0tyaW5jWEliaWYwSk9ZaDNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4dWJDUVdiZnFvY2x4VlBqT2RCWUJoNEhHNUx2VGJpellTbWhlTXNqQkFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRNdHgrTjI4clpvU3NKUnl6OUMyd2dqSUJod05PblZ0bkQ3MmZZdjZFbk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ4clpWZVpnMGZ4eHZvb0lBRzlpN2crQUZjRzNRWllvMm5YTGFZeFZtaEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURzNG5XTVl6bVc0YUp2RU5WcXJlQkgwaWJwS00yeC9wWWIvUUI4SVRWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemV3dEtxdkVRQTI0V2ZOYmEzVUZibzlPdGoxNEFtUUExVE1ISDU1K2EwND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVwTXg4MHNYcEMyNDJkdXZUMGo5TzlxR2tLTEdSUzgwYSt5YUFXdkZ5RDJQNEJsVHBVVlhCUTMrMTVWeHkvYzBwTmFCQjVMUXJmTWgyZVE4eUFlRENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiI3V3hUM3R0OHkxRzZVdHY2ZW1PbEtKS24yZ1pVdkVmTGc4Tk9WaTZybmdZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4MGowbFNWMFN5cXFQWWNMMUZma3VnIiwicGhvbmVJZCI6IjliYjQ2MmQ1LWU0YTctNDZhMS1iNWY4LTNhNTJiMjE4ODQyMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0N09jWjBYejJyM3Bhd2hyMEIzWlVtRWcyL0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHlSY1JTSHZHaFJ2RERaTnVmcnNoY3BvNmNrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRXWVhFVDU0IiwibWUiOnsiaWQiOiIyNTY3NDIzNjY5Njk6MjBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQOKCs+KCteKCtcOYyYTigqbigq4gMiDigrHDmOKxpCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFhveU9rSEVOaW0yTFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL09jNGd2SGcwNGNJc1VtTFRxNGs3N1pRRFRZSjlBZ3hQN2ZVSW1XQmxBTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidGdqd3dvREIrWHJVc1lBV1pYZkhIV1VFZUptTkwwRG1LTnN1Ui8rczQ5QjU5K1N0UzBuWWxrWkxvK0xKVXdmQjBMSktiR25yU1g4ancweUh5NERORGc9PSIsImRldmljZVNpZ25hdHVyZSI6IjNIRGFpelhSOFNUQmJjbXhJUGtLVlJwb3lwTVlBam9zallsSWxLeFgwWXhoRmZ5bEVlNEUwOUg0ODNFMWRxNmZmN3lFS0RycVpIZGxqSk1rZER3SUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzQyMzY2OTY5OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZ6bk9JTHg0Tk9IQ0xGSmkwNnVKTysyVUEwMkNmUUlNVCszMUNKbGdaUUQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjExMTEzOTl9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
