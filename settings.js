

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
//global.ytname = "YT: Akubrecah Entertainment" //ur yt chanel name
global.socialm = "GitHub: Akubrecah" //ur github or insta name
global.location = "Africa, Kenya, Kapenguria" //ur location

//new
global.botname = '𝙂𝙇𝙊𝘽𝘼𝙇-AKUBRECAH-𝙓𝙈𝘿' //ur bot name
global.ownernumber = ['254791497858',254739926767] //ur owner number, dont add more than one
global.ownername = '© Akubrecah' //ur owner name
//global.websitex = "https://www.youtube.com/@GlobalTechInfo"
//global.wagc = "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07"
global.themeemoji = '🪀'
global.wm = "Global Bot Inc."
global.botscript = 'https://github.com/Akubrecah/GLOBAL-AKUBRECAH-XMD' //script link
global.packname = "Sticker By"
global.author = "Akubrecah\n\n+254739926767\n\n+254791497858"
global.creator = "254791497858@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["254791497858","254739926767"] // Premium User

//channel id
global.xchannel = {
	jid: '120363319098372999@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['⎆','ෆ','✎','⫹⫺','•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆','☆','⊡','益','✯','⊙','☞','㉨','✪','➜']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
