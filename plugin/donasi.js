let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Gopay [0881036804098]
│ • Dana [0881036804098]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
