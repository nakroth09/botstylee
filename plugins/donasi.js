let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Telkomsel [081343989930]
│ • Dana  [081343989930]
│ • Saweria [https://saweria.co/rafigantenk]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281343989930
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
