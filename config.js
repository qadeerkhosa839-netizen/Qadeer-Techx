const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RXTEpzTmdDRXN0QTR4amtyQ3V1ZTdXdlBYQzMzOGJvZlp1Y2hnS3dGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZ1QzlQNmQ5TGxwVWVrR1lPUE1IdmdHaGh5QTNjMlRtVFF4UHYycmJEST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSS9pNkdsRXVZYzh4R1FLNXZTakdkU1B4ZFFXQVRURnZ3V20rYjRuTEc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwUGZYODlmQ2hQZFdLOU9jbjNoaHdOWTZyQzdLZmdUVmlwenVzZXZMSlJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHY2JkMUZGZXhQaXNmcjNCeDdEb1d3RjRGbG1tQmxMSHhNNm9RVHFHRlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik85eC9uUkJVNkhXamEvR0VTQWJmZVl0M0F1NVgzWGI3TFJkRUV2NVcvMGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lBbnYvaVlRRHdvdWhVL1ZkK29GN1FzQkQ3aUlma3dXMWZWZWV6TTRXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01QMlpXMklxL3JrbnFMREFHMEtBTzZnNnB1WVByZy9sMG5VMTFrbUNTcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOWkRxMkN4M3BqM2NnTlJjd0lsMEt2MWxPZjR3MEMzRWZycnRScS9iemFPeGh4VmdHUGE5SnJJeVpadUx4dWVtZmpIUGxXVndnTksvT05iS0VNUWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6IlVGQXFlcXpSanpYSXFXazFqUUJyTGI2TE52aGtHcW9yVTJCZWF3WFREWTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzY5NDIzNTMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzZEOTM3M0E3RDMyQ0I4Mzg5NUQyQjcwMUQyRjBBMSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzczMjk4MTY1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzNjk0MjM1MzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDQkY2REU4NjQwREU1ODRENEMzOUUyOEUyNDdFRUM0IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzMyOTgxNjR9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiOE44RVhNR0QiLCJtZSI6eyJpZCI6IjkyMzM2OTQyMzUzMTozNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE1NjcwNjc2Mzk4OTA4ODozNEBsaWQiLCJuYW1lIjoiUWFkZWVyflRlY2hYIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKSFJvZUFIRU9uRHljMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2Y3RWZVFyQ3gwRTZLK0hHV0M0YkV2VjFmY25PeWJYdEU5b1orczFjNHhRPSIsImFjY291bnRTaWduYXR1cmUiOiJBd1R1bGZYcndnNm5LQ3kwbFVKRkd1ait2VDlHY3V4RHE5dXgrN08xVXd3a3EvZEJNbnNLT3lJVGFtdWorYUd6Mk9FNDJoSjVOajlOblF4TEZiK2xBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK0ZBQ0taY1Q1b3p5NlV6czRnaUhCVFVnd1FDdXdydmxUOTc0MFhvbXFLSFpwOCtVeElNNzYzYW41UGdENXBaVG1BTmtyL0U1S0RIZVRrT0VhWWJ6aXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNTY3MDY3NjM5ODkwODg6MzRAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVuTFZYa0t3c2RCT2l2aHhsZ3VHeEwxZFgzSnpzbTE3UlBhR2ZyTlhPTVUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZ2dOIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MzI5ODE2MSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZOViJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Qadeer~Techx 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/snlnz4.jpeg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Qadeer~Techx",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Qadeer~Techx",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923369423531",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Qadeer~Techx Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qadeer~Techx ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/snlnz4.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
