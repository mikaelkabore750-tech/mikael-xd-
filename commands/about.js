module.exports = {
    name: "about",
    run: async ({ sock, msg }) => {
        const from = msg.key.remoteJid;

        const text = `
🤖 *𝐌𝐈𝐊𝐀𝐄𝐋-𝐗𝐃*
Version : 0.0.1
Auteur : 𝑴𝑰𝑲𝑨𝑬𝑳
Description : Bot WhatsApp multifonctions basé sur Baileys
⚡ Fonctions : Audio, Sticker, Mini-jeux, Admin, Utilitaires et plus

📱 Suivez l'auteur :
- GitHub :https://github.com/mikaelkabore750-tech
- Channel https://whatsapp.com/channel/0029VbBBWbU30LKRv34yfH3m
        `;

        await sock.sendMessage(from, { text });
    }
};