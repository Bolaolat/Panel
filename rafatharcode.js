module.exports = async (rafatharcode, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const rdm = () =>{
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 10);
  randomNumbers.push(randomNumber);
}
return randomNumbers.join('')
}
const makeid = rdm()
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await rafatharcode.decodeJid(rafatharcode.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await rafatharcode.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata?.participants?.find((v) => v.id == botNumber) : ''
let participant_sender = isGroup ? groupMetadata?.participants?.find((v) => v.id == m.sender) : ''
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { version } = require("./package.json")
const speed = require('performance-now')
const tls = require('tls')
const net = require('net')
const http2 = require('http2')
const cluster = require('cluster')
const QRCode = require('qrcode')
const qris = require('./all/qris.js');
const { runtime, getRandom, formatp, getTime, tanggal, telegraPh, jsonformat, format, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./prem.json"))
const db_respon_list = JSON.parse(fs.readFileSync('./list.json'))
const jsobfus = require('javascript-obfuscator')
const { Client } = require('ssh2');
const LINODE_API_TOKEN = global.apilinode;
const API_TOKEN = global.apitokendo;
let isPrem = prem.includes(m.sender)
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}
const totalFitur = () =>{
            var mytext = fs.readFileSync("./rafatharcode.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const hariini = moment.tz('Asia/Jakarta')      
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var stime = (`Good Night`)
 }
 if(time2 < "19:00:00"){
var stime = (`Good Evening`)
 }
 if(time2 < "18:00:00"){
var stime = (`Good Evening`)
 }
 if(time2 < "15:00:00"){
var stime = (`Good Afternoon`)
 }
 if(time2 < "11:00:00"){
var stime = (`Good Morning`)
 }
 if(time2 < "05:00:00"){
var stime = (`Good Morning`)
 }
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
function pickrandomref() {
  var symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var symbolLength = symbols.length;
  var currentDate = new Date();
  
  // Generate a random 3-letter symbol
  var randomSymbol = '';
  for (var i = 0; i < 3; i++) {
    randomSymbol += symbols.charAt(Math.floor(Math.random() * symbolLength));
  }

  var randomString = 'Rafa' +
    currentDate.getFullYear() +
    ('0' + (currentDate.getMonth() + 1)).slice(-2) +
    ('0' + currentDate.getDate()).slice(-2) + randomSymbol;

  return randomString;
}
let koderef = pickrandomref()

function toRupiah(angka) {
  var angkaStr = angka.toString();
  var angkaTanpaKoma = angkaStr.split('.')[0];
  var angkaRev = angkaTanpaKoma.toString().split('').reverse().join('');
  var rupiah = '';
  for (var i = 0; i < angkaRev.length; i++) {
    if (i % 3 == 0) rupiah += angkaRev.substr(i, 3) + '.';
  }
  return '' + rupiah.split('', rupiah.length - 1).reverse().join('');
}
function pickrandoms() {
  var symbols = '0123456789';
  var symbolLength = symbols.length;
  var randomString = 'P';
  for (var i = 0; i < 2; i++) {
    randomString += symbols.charAt(Math.floor(Math.random() * symbolLength));
  }
  randomString += '';
  for (var j = 0; j < 4; j++) {
    randomString += symbols.charAt(Math.floor(Math.random() * symbolLength));
  }
  return randomString;
}

    
const nebal = (angka) => {
return Math.floor(angka)
}
function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return rafatharcode.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return rafatharcode.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

//=================================================//
let ppuser
try {
ppuser = await rafatharcode.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = '-'
}

async function rafatharcodeReply(teks) {
return rafatharcode.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: false, thumbnailUrl: ppuser, title: "｢ ACCESS DENIED ｣", body: "© Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
}

async function loading () {
var gen2 = [
"-",
"-",
"-"
]
let { rafa } = await rafatharcode.sendMessage(m.chat, {text: '-'})

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

for (let i = 0; i < gen2.length; i++) {
await sleep(10)
await rafatharcode.sendMessage(m.chat, {text: gen2[i], edit: rafa });
}
}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6287743212449:+62 877-4321-2449\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

if (global.owneroff && !isCmd) {
if (!isGroup && !isOwner) {
let teks = `*Hai Kak* @${m.sender.split('@')[0]}

Maaf *Ownerku Sedang Offline*, Silahkan Tunggu Owner Kembali Online & Jangan Spam Chat Atau Bisa Hubungi Melalui Telegram *t.me/RafatharCode*`
return rafatharcode.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnail: fs.readFileSync("./media/ownermode.jpg"), renderLargerThumbnail: false, title: "｢ OWNER OFFLINE MODE ｣", mediaUrl: linkgc, sourceUrl: linkyt, previewType: "PHOTO"}}}, {quoted: null})
}}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


switch (command) {
case "menu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}
 
* 乂 M A I N M E N U

* tourl
* mediafire
* addcase
* delcase
* getcase
* listcase
* ping
* addprem

* I N S T A L L P A N E L M E N U

* installpanel
* installpanelv2
* installtema
* uninstallpanel
* wings
* cnode
  
* D O M A I N M E N U 

* listdomain
* listsubdomain
* delsubdomain
  
* D I G I T A L O C E A N

- changeapido
- cekakunv2

* C V P S R E Q O S

- cvpsubuntu

* V P S M E N U

- cvps
- listdroplet
- deldroplet
- rebuildvps  
- resetpassword

`
rafatharcodeReply(teksmenu)
}
break
case 'addcase': {
 if (!isOwner) return rafatharcodeReply(msg.owner)
 if (!text) return rafatharcodeReply('Mana case nya');
    const fs = require('fs');
const namaFile = 'rafatharcode.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                rafatharcodeReply('Terjadi kesalahan saat menulis file:', err);
            } else {
                rafatharcodeReply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        rafatharcodeReply('Tidak dapat menambahkan case dalam file.');
    }
});

}

break
case "addprem": {
if (!isOwner) return rafatharcodeReply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (prem.includes(orang)) return rafatharcodeReply(`User ${orang.split('@')[0]} Sudah Terdaftar Di Database Premium Kami`)
await prem.push(orang)
await fs.writeFileSync("./prem.json", JSON.stringify(prem))
rafatharcodeReply(`Berhasil Menjadikan ${orang.split('@')[0]} Sebagai Premium Kami`)
} else {
return rafatharcodeReply(example("@tag/62838XXX"))
}}

break
case 'delcase': {
if (!isOwner) return rafatharcodeReply(`*Access Denied ❌*\n\n*Owners only*`)
if (!q) return rafatharcodeReply('*Masukan nama case yang akan di hapus*')

dellCase('./rafatharcode.js', q)
rafatharcodeReply('*Dellcase Successfully*\n\n© Dellcase By RafatharCode')
}
break
case 'listcase': {
if (!isOwner) return rafatharcodeReply(`*Access Denied ❌*\n\n*Owners only*`)
let { listCase } = require('./all/scrapelistCase.js')
rafatharcodeReply(listCase())
}
break
case 'ping': {
if (!isPrem) return rafatharcodeReply('anu bg kmu blum prem')
const old = performance.now()
const ram = (os.totalmem() / Math.pow(1024, 3)).toFixed(2) + " GB"
const free_ram = (os.freemem() / Math.pow(1024, 3)).toFixed(2) + " GB"
const serverInfo = `
*🔴 INFORMASI SERVER BOT RAFATHARCODE*

🖥 CPU : *${os.cpus().length} Core, ${os.cpus()[0].model}*
🕡 Uptime : *${Math.floor(os.uptime() / 86400)} days*
🕡 Runtime : *${runtime(process.uptime())}*
💾 Ram : *${free_ram}/${ram}*
⚡ Speed : *${(performance.now() - old).toFixed(5)} ms*
`
rafatharcode.sendText(m.chat, serverInfo, m)
}
break
case 'getcase': {
if (!isOwner) return rafatharcodeReply('Maaf Perintah Ini Khusus Owner Kami.')
const getCase = (cases) => {

            return "case "+`'${cases}'`+fs.readFileSync("./rafatharcode.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isOwner) return rafatharcodeReply('ngapain')

                if (!q) return rafatharcodeReply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                rafatharcodeReply(nana)

            } catch(err){

            console.log(err)

            rafatharcodeReply(`Case ${q} tidak di temukan`)

        }
}
        break 
case 'restart':
if (!isOwner) return rafatharcodeReply('Khusus Owner Kami')
rafatharcodeReply(`_Restarting Bot . . ._`)
await sleep(3000)
process.exit()
break
case "listdomain": {
if (!isPrem) return rafatharcodeReply('anu bg kmu blum prem')
var teks = `*List Domain Yang Tersedia :*

.d1 ${global.tld1}
.d2 ${global.tld2}
.d3 ${global.tld3}
.d4 ${global.tld4}
.d5 ${global.tld5}
.d6 ${global.tld6}
.d7 ${global.tld7}

*Contoh Cara Membuat Subdomain :*
ketik *.d1* hostname|ipvps

*Contoh Cara Melihat Subdomain :*
ketik *.listsubdomain d1*
`
m.reply(teks)
}
break
case "listsubdomain": case "listsubdo": {
if (!isPrem) return rafatharcodeReply('anu bg kmu blum prem')
if (!args[0]) return m.reply(example("d1\n\nketik *.listdomain*\nUntuk melihat list domainnya"))
let zonenya
let apinya
let dom = args[0].toLowerCase()
if (/d1/.test(dom)) {
zonenya = global.zone1
apinya = global.apitoken1
} else if (/d2/.test(dom)) {
zonenya = global.zone2
apinya = global.apitoken2
} else if (/d3/.test(dom)) {
zonenya = global.zone3
apinya = global.apitoken3
} else if (/d4/.test(dom)) {
zonenya = global.zone4
apinya = global.apitoken4
} else if (/d5/.test(dom)) {
zonenya = global.zone5
apinya = global.apitoken5
} else if (/d6/.test(dom)) {
zonenya = global.zone6
apinya = global.apitoken6
} else if (/d7/.test(dom)) {
zonenya = global.zone7
apinya = global.apitoken7
}
axios.get(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,{
headers: {
Authorization: "Bearer " + `${apinya}`,
"Content-Type": "application/json",
},
}).then(async (res) => {
if (res.data.result.length < 1) return m.reply("Tidak Ada Subdomain")
var teks = `*🌐 LIST SUBDOMAIN ${dom.toUpperCase()}*\n\n*Total Subdomain :* ${res.data.result.length}\n\n`
await res.data.result.forEach(e => teks += `*Domain :* ${e.name}\n*IP :* ${e.content}\n\n`)
return m.reply(teks)
})
}
break
case "d1": case "d2": case "d3": case "d4": case "d5": case " d6": case "d7": {
if (!isPrem) return rafatharcodeReply('anu bg kmu blum prem')
if (!text) return m.reply(example("host|ip"))
if (!text.split("|")) return m.reply(example("host|ip"))
let zonenya
let apinya
let tldnya
let dom = args[0].toLowerCase()
if (/d1/.test(command)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/d2/.test(command)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/d3/.test(command)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
} else if (/d4/.test(command)) {
zonenya = global.zone4
apinya = global.apitoken4
tldnya = global.tld4
} else if (/d5/.test(command)) {
zonenya = global.zone5
apinya = global.apitoken5
tldnya = global.tld5
} else if (/d6/.test(command)) {
zonenya = global.zone6
apinya = global.apitoken6
tldnya = global.tld6
} else if (/d7/.test(command)) {
zonenya = global.zone7
apinya = global.apitoken7
tldnya = global.tld7
}
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
   
let raw1 = text
if (!raw1) return m.reply(example("host|ip"))
let host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "")
if (!host1) return m.reply("Hostname Tidak Valid!, Hostname Hanya Mendukung Tanda Strip(-) Atau Titik(.)")
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "IP Tidak Valid!" : "Isi IP Servernya!")
await subDomain1(host1.toLowerCase(), ip1).then((e) => {
if (e['success']) m.reply(`*Subdomain Berhasil Dibuat ✅*\n\n*Domain Induk 🌐*\n${tldnya}\n*IP 📡*\n${e['ip']}\n*Subdomain 🌐*\n${e['name']}`)
else m.reply(`${e['error']}`)
})}
break
case "delsubdo": case "delsubdomain": {
if (!isPrem) return rafatharcodeReply('anu bg kmu blum prem')
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("d1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
if (!text.split("|")) return m.reply(example("d1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
var [pusat, sub] = text.split("|")
var zonenya
var apinya
var tldnya
if (/d1/.test(pusat)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/d2/.test(pusat)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/d3/.test(pusat)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
} else if (/d4/.test(pusat)) {
zonenya = global.zone4
apinya = global.apitoken4
tldnya = global.tld4
} else if (/d5/.test(pusat)) {
zonenya = global.zone5
apinya = global.apitoken5
tldnya = global.tld5
} else if (/d6/.test(pusat)) {
zonenya = global.zone6
apinya = global.apitoken6
tldnya = global.tld6
}  else if (/d7/.test(pusat)) {
zonenya = global.zone7
apinya = global.apitoken7
tldnya = global.tld7
} else return m.reply("Domain Tidak Ditemukan")
if (!sub.includes(".")) return m.reply("Format Subdomain Tidak Valid!")
var host = sub.toLowerCase()
var dom = null
var id = null
await axios.get(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`, {
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then(async (res) => {
await res.data.result.forEach((e) => {
if (e.name == host) {
dom = e.name
id = e.id
}})
})
if (dom == null && id == null) return m.reply("Subdomain Tidak Ditemukan")
await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records/${id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
}
})
m.reply(`Berhasil Menghapus Subdomain *${dom}* Dari Domain *${tldnya}*`)
}
break
case "tourl": {
if (!isPrem) return rafatharcodeReply('anu bg kmu blum prem')
if (!/image/.test(mime)) return m.reply(example("dengan mengirim foto"))
await m.reply(msg.wait)
var fotonya = await rafatharcode.downloadAndSaveMediaMessage(qmsg)
var urlimage = await telegraPh(fotonya)
await m.reply(`Link Tautan :\n${urlimage}`)
await fs.unlinkSync(fotonya)
}
break
case "public": {
if (!isOwner) return rafatharcodeReply(msg.owner)
rafatharcode.public = true
m.reply("Berhasil mengganti mode bot menjadi *Public*")
}
break
case "self": {
if (!isOwner) return rafatharcodeReply(msg.owner)
rafatharcode.public = false
m.reply("Berhasil mengganti mode bot menjadi *Self*")
}
break
case "get": {
if (!isOwner) return rafatharcodeReply(msg.owner)
if (!text) return m.reply("linknya")
try {
var check = await fetchJson(text)
m.reply(JSON.stringify(check, null, 2))
} catch (e) {
return m.reply(e.toString())
}}
break
case "mediafire": {
if (!isOwner && !isPrem) return rafatharcodeReply('Maaf Perintah Ini Khusus Premium Kami.')
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
await api.mediafireDl(text).then((res) => {
if (res.filesize.includes("GB")) return m.reply("Gagal mendownload, ukuran file terlalu besar")
if (res.filesize.split("MB")[0] >= 100) return m.reply("Gagal mendownload, ukuran file terlalu besar")
if (res.url == "") return m.reply(mess.error)
rafatharcode.sendMessage(m.chat, {document: {url: res.url}, fileName: res.filename, mimetype: "application/"+res.ext.toLowerCase(), caption: "Download Berhasil ✅"}, {quoted: m})
}).catch((e) => m.reply(e.toString()))
}
break
case "changeapido" :
if (!isOwner) return rafatharcodeReply(msg.owner)
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
global.apitokendo = `${text}`
rafatharcodeReply("Berhasil Mengganti Token Api Do ✅")
} else {
return rafatharcodeReply(`*format salah*\nContoh: ${prefix}changeapido *<TOKEN-API>*`)
}
break
case 'cekakunv1':
      if (!isOwner) return rafatharcodeReply(msg.owner)
        

      const getAccountInfo = async () => {
        try {
          const response = await fetch('https://api.digitalocean.com/v2/account', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${API_TOKEN}`
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching account info:', error);
          return null;
        }
      };

      const getPasswordInfo = async () => {
        try {
          const response = await fetch('https://api.digitalocean.com/v2/account/password', {  // Adjust endpoint as necessary
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${API_TOKEN}`
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching password info:', error);
          return null;
        }
      };

      const accountInfo = await getAccountInfo();
      const passwordInfo = await getPasswordInfo();

      if (accountInfo && passwordInfo) {
        const account = accountInfo.account;
        const password = passwordInfo.password;  // Adjust according to actual response structure
        const responseText = `
Account Info:
Name: ${account.name}
Email: ${account.email}
Droplet Limit: ${account.droplet_limit}
Floating IP Limit: ${account.floating_ip_limit}
Status: ${account.status}
Team Name: ${account.team.name}
Password: ${password}
        `;
        rafatharcodeReply(responseText);
      } else {
        rafatharcodeReply('Failed to fetch account or password info');
      }
break
case 'cekakunv2': {
    if (!isOwner) return rafatharcodeReply(msg.owner)

    const getAccountInfo = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/account', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching account info:', error);
        return null;
      }
    };

    getAccountInfo()
      .then((accountInfo) => {
        if (accountInfo) {
          const account = accountInfo.account;
          const responseText = `
Account Info:
Name: ${account.name}
Email: ${account.email}
Droplet Limit: ${account.droplet_limit}
Floating IP Limit: ${account.floating_ip_limit}
Status: ${account.status}
Team Name: ${account.team.name}
          `;
          rafatharcodeReply(responseText);
        } else {
          rafatharcodeReply('Failed to fetch account info');
        }
      })
      .catch((err) => {
        rafatharcodeReply(`Error: ${err.message}`);
      });
    break;
  }
break 
case "cvpsubuntu": {
if (!isOwner) return rafatharcodeReply(msg.owner)
let teksnya = `Create Vps Do Os ubuntu Reg Sgp `
let sections = [{
title: '# UBUNTU 20.04',
highlight_label: 'Ubuntu 20.04',
rows: [{
title: 'VPS 1 GB 1 CORE',
description: `1GB 1C  Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-1gb,ubuntu-20-04-x64'
},
{
title: 'VPS 2 GB 1 CORE',
description: `2GB 1C  Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-2gb,ubuntu-20-04-x64'
},
{
title: 'VPS 4 GB 2 CORE',
description: `4GB 2C  Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-2vcpu-4gb,ubuntu-20-04-x64'
},
{
title: 'VPS 8 GB 4 CORE',
description: `8GB 4C  Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-4vcpu-8gb,ubuntu-20-04-x64'
},
{
title: 'VPS 16 GB 4 CORE',
description: `8GB 4C  Os Ubuntu 24 Region Sfo`, 
id: '.cvps root,sfo3,s-4vcpu-16gb,ubuntu-20-04-x64'
}]
},
{
title: '# UBUNTU 22.04', 
highlight_label: 'System Information',
rows: [{
title: 'VPS 1 GB 1 CORE',
description: `1GB 1C  Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-1gb,ubuntu-22-04-x64'
},
{
title: 'VPS 2 GB 1 CORE',
description: `2GB 1C  Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-2gb,ubuntu-22-04-x64'
},
{
title: 'VPS 4 GB 2 CORE',
description: `4GB 2C  Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-2vcpu-4gb,ubuntu-22-04-x64'
},
{
title: 'VPS 8 GB 4 CORE',
description: `8GB 4C  Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-4vcpu-8gb,ubuntu-22-04-x64'
},
{
title: 'VPS 16 GB 4 CORE',
description: `16GB 4C  Os Ubuntu 24 Region Sfo`, 
id: '.cvps root,sfo3,s-4vcpu-16gb,ubuntu-22-04-x64'
}]
},
{
title: '# UBUNTU 24.04', 
highlight_label: 'System Information',
rows: [{
title: 'VPS 1 GB 1 CORE',
description: `1GB 1C  Os Ubuntu 24 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-1gb,ubuntu-24-04-x64'
},
{
title: 'VPS 2 GB 1 CORE',
description: `2GB 1C  Os Ubuntu 24 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-2gb,ubuntu-24-04-x64'
},
{
title: 'VPS 4 GB 2 CORE',
description: `4GB 2C  Os Ubuntu 24 Region Sg`, 
id: '.cvps root,sgp1,s-2vcpu-4gb,ubuntu-24-04-x64'
},
{
title: 'VPS 8 GB 4 CORE',
description: `8GB 4C  Os Ubuntu 24 Region Sg`, 
id: '.cvps root,sgp1,s-4vcpu-8gb,ubuntu-24-04-x64'
},
{
title: 'VPS 16 GB 4 CORE',
description: `16GB 4C  Os Ubuntu 24 Region Sfo`, 
id: '.cvps root,sfo3,s-4vcpu-16gb,ubuntu-24-04-x64'
}]
}]
let listMessage = {
    title: 'List Vps Ubuntu', 
    sections
};

let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/owner.jpg")}, { upload: rafatharcode.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Owner LeXcZ\",\"url\":\"https://wa.me/6287743212449\",\"merchant_url\":\"https://wa.me/6287743212449\"}"
}]
}) 
})} 
}}, {userJid: m.sender}) 
await rafatharcode.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cvps": {
  if (!isOwner) return rafatharcodeReply(msg.owner);
  let t = text.split(',');
if (t.length < 4) return rafatharcodeReply(`*Format salah!*\nPenggunaan: ${prefix}cvps hostname,region,osversi,ram`)

    let hostname = t[0];
    let regions = t[1];
    let ram = t[2];
    let osvps = t[3];
    
  try {
    let dropletData = {
      name: hostname,
      region: regions,
      size: ram,
      image: osvps,
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['LeXcZ']
    };

    let password = `lexcz1VPS`
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      rafatharcodeReply(`\`\`\`Tunggu Sebentar...\`\`\``);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `*\`VPS berhasil dibuat √\`*\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n\n`;
      
      messageText += `*\`SPEKTIFIKASI\`*\n\n`;
      
      messageText += `HOSTNAME: ${hostname}\n`;
      messageText += `REGION: ${regions}\n`;
      messageText += `RAM: ${ram}\n`;
      messageText += `OS + VERSI: ${osvps}\n`;

      await rafatharcode.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    rafatharcodeReply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
case "listdroplet": {
  if (!isOwner) return rafatharcodeReply(msg.owner);

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      rafatharcode.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    rafatharcodeReply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }
}
break
case "deldroplet": {
  if (!isOwner) return rafatharcodeReply(msg.owner);

  let dropletId = args[0];
  if (!dropletId) return rafatharcodeReply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        rafatharcodeReply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      rafatharcodeReply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();
}
break
case "resetpassword": {
    if (!isOwner) return rafatharcodeReply(msg.owner);
    const dropletId = args[0];
    if (!dropletId) return rafatharcodeReply("Please provide the Droplet ID.");
const resetDropletPassword = async (dropletId) => {
    const newPassword = `lexcz1VPS`;
    const userData = `#cloud-config\npassword: ${newPassword}\nchpasswd: { expire: False }`;

    const dropletData = {
        type: 'password_reset',
        user_data: userData
    };

    try {
        const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_TOKEN}`
            },
            body: JSON.stringify(dropletData)
        });

        if (response.ok) {
            const result = await response.json();
            return `Password reset successfully. New password: ${newPassword}`;
        } else {
            const errorData = await response.json();
            return `Failed to reset password: ${errorData.message}`;
        }
    } catch (error) {
        return `Error resetting password: ${error.message}`;
    }
};
    const resetPasswordMessage = await resetDropletPassword(dropletId);
    rafatharcodeReply(resetPasswordMessage);
}


break
case "rebuildvps": {
  if (!isOwner) return rafatharcode.sendMessage(m.chat, { text: `Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Yatim` });

  const text = args.join(' ');
  const t = text.split(',');
  if (t.length < 2) {
    rafatharcode.sendMessage(m.chat, { text: 'Mohon masukkan ID vps dan Image yang ingin digunakan\n\n.rebuildvps iddroplet,ubuntu-20-04-x64' });
    break;
  }

  const dropletId = t[0];
  const imageS = t[1];

  let rebuildVPS = async () => {
    try {
      // Generate a new password
      let newPassword = `lexcz1VPS`; // Atau bisa menggunakan generator password

      // User data untuk menyetel password baru
      let userData = `#cloud-config
password: ${newPassword}
chpasswd: { expire: False }`;

      // Data untuk rebuild droplet
      let dropletData = {
        type: 'rebuild',
        image: imageS,
        user_data: userData
      };

      // Request rebuild
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify(dropletData)
      });

      if (response.ok) {
        const result = await response.json();
        rafatharcode.sendMessage(m.chat, { text: `Password baru VPS: ${newPassword}` });
        rafatharcode.sendMessage(m.chat, { text: JSON.stringify(result) });

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}\nPASSWORD: ${newPassword}`;
          await sleep(60000);
          rafatharcode.sendMessage(m.chat, { text: textvps });
        } else {
          rafatharcode.sendMessage(m.chat, { text: 'Gagal mendapatkan informasi VPS setelah rebuild.' });
        }
      } else {
        const errorData = await response.json();
        rafatharcode.sendMessage(m.chat, { text: `Gagal melakukan rebuild VPS: ${errorData.message}` });
      }
    } catch (error) {
      rafatharcode.sendMessage(m.chat, { text: `Terjadi kesalahan saat melakukan rebuild VPS: ${error}` });
    }
  };

  rebuildVPS();
}

break
case 'installtema': {
if (!isOwner && !isPrem) return rafatharcodeReply('anu bg kmu blum prem');
let t = text.split(',');
if (t.length < 2) return rafatharcodeReply(`*Format salah!*
Penggunaan:
${prefix + command} ipvps,pwvps`)
let ipvps = t[0];
let passwd = t[1];

let sections = [{
title: 'Silahkan Pilih Theme Yang Ingin Di install',
rows: [{
title: 'INSTALL THEME STELLAR',
id: `.th1 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEME BILLING', 
id: `.th2 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEME ENIGMA',
id: `.th3 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEME NEBULA', 
id: `.th4 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEME ELSIUM', 
id: `.th5 ${ipvps},${passwd}`
}]
}]

let listMessage = {
    title: 'Klik Disini!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '-',
 newsletterName: '-', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Silahkan Pilih Theme Yang Ingin Anda Install`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${m.sender.split("@")[0]} 👋*`,
 subtitle: "-",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/owner.jpg") }, { upload: rafatharcode.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break  
case 'th1': {
    if (!isOwner && !isPrem) return rafatharcodeReply('anu bg kmu blum prem');
    
    let t = text.split(',');
    if (t.length < 2) return rafatharcodeReply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/LeXcZxMoDz9/Installerlex/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodeReply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                rafatharcodeReply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodeReply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            rafatharcodeReply('SILAHKAN CEK WEB PANEL ANDA');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'th2': {
    if (!isOwner && !isPrem) return rafatharcodeReply('anu bg kmu blum prem');
    
    let t = text.split(',');
    if (t.length < 2) return rafatharcodeReply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/LeXcZxMoDz9/Installerlex/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodeReply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 1 SAMPAI 2  MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                rafatharcodeReply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('1\n');
                stream.write('2\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodeReply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            rafatharcodeReply('SILAHKAN CEK WEB PANEL ANDA');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'th3': {
    if (!isOwner && !isPrem) return rafatharcodeReply('anu bg kmu blum prem');
    
    let t = text.split(',');
    if (t.length < 2) return rafatharcodeReply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/LeXcZxMoDz/Installerlex/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodeReply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 1 SAMPAI 2  MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                rafatharcodeReply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('1\n');
                stream.write('3\n');
                stream.write('\n');
                stream.write('https://whatsapp.com/channel/0029VajNyapCxoAsIcvqfr1v\n');
                stream.write('https://whatsapp.com/channel/0029VajNyapCxoAsIcvqfr1v\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodeReply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            rafatharcodeReply('SILAHKAN CEK WEB PANEL ANDA');
        }
    }, 300000); // 180000 ms = 3 menit
    
}
break  
case 'th4': {
    if (!isOwner && !isPrem) return rafatharcodeReply('anu bg kmu blum prem');
    
    let t = text.split(',');
    if (t.length < 2) return rafatharcodeReply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/LeXcZxMoDz9/folderr/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodeReply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                rafatharcodeReply('`SUKSES INSTALL THEME PANEL NEBULA, SILAHKAN CEK WEB PANEL ANDA`')
                conn.end();
            }).on('data', (data) => {
                stream.write('3\n');
                stream.write('A\n');
                stream.write('Y\n');
                stream.write('Y\n');
                stream.write('\n');
                stream.write('\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodeReply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            rafatharcodeReply('SILAHKAN CEK WEB PANEL ANDA');
        }
    }, 180000); // 180000 ms = 3 menit
   
}

break  
case 'th5': {
    if (!isOwner && !isPrem) return rafatharcodeReply('anu bg kmu blum prem');
    
    let t = text.split(',');
    if (t.length < 2) return rafatharcodeReply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/LeXcZxMoDz9/folderr/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodeReply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                rafatharcodeReply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('1\n');
                stream.write('y\n');
                stream.write('yes\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodeReply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            rafatharcodeReply('SILAHKAN CEK WEB PANEL ANDA');
        }
    }, 180000); // 180000 ms = 3 menit
   
}

break  
case 'uninstalltema': {
    if (!isOwner && !isPrem) return rafatharcodeReply('anu bg kmu blum prem');
    
    let t = text.split(',');
    if (t.length < 2) return rafatharcodeReply(`*Format salah!*\nPenggunaan: ${prefix}uninstalltema ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/LeXcZxMoDz9/folderr/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodeReply('*PROSES UNINSTALL PANEL DIMULAI MOHON TUNGGU 30 SAMPAI 50 DETIK KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                rafatharcodeReply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('9\n');
                stream.write('yes\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodeReply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            rafatharcodeReply('SILAHKAN CEK WEB PANEL ANDA');
        }
    }, 1000); // 180000 ms = 3 menit
   
}
/*
break  
case 'th1': {
    if (!isOwner) return rafatharcodeReply(msg.owner);
    
    let t = text.split(',');
    if (t.length < 2) return rafatharcodeReply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/LeXcZxMoDz9/Installerlex/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodeReply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                rafatharcodeReply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodeReply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            rafatharcodeReply('SILAHKAN CEK WEB PANEL ANDA');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
*/
break
case 'cnode': {
    if (!isPrem) return rafatharcodeReply('anu bg kmu blum prem')
    let t = text.split(',');
    if (t.length < 2) return rafatharcodeReply(`*Format salah!*\nPenggunaan: ${prefix}cnode ipvps,password,domainnode,ramvps`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let domainnode = t[2];
    let ramvps = t[3];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/LeXcZxMoDz9/Kebutuhan/main/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodeReply('*MEMULAI CREATE NODE & LOCATION*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                rafatharcodeReply('*NODE DAN LOCATION TELAH DI TAMBAHKAN SILAHAKAN TAMBAH KAN ALLOCATION MANUAL & AMBIL TOKEN CONFIGURE*')
                conn.end();
            }).on('data', (data) => {
            stream.write('3\n');
                stream.write('LeXcZ\n');
                stream.write('LeXcZ\n');
                stream.write(`${domainnode}\n`)
                stream.write('LeXcZ\n');
                stream.write(`${ramvps}\n`);
                stream.write(`${ramvps}\n`);
                stream.write('1\n');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodeReply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }
break  
case 'installpanel': {
    if (!isOwner && !isPrem) rafatharcodeReply('anu bg kmu blum prem')
    let t = text.split(',');
    if (t.length < 5) return rafatharcodeReply(`*Format salah!*\nPenggunaan: ${prefix}installpanel ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let aloklex = generateRandomPassword();
    let passdb = generateRandomPassword();
    let database = generateRandomPassword();
    let password = 'lex';
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        rafatharcodeReply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU SEKITAR 1 SAMPAI 2 MENIT*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        rafatharcodeReply('*PROSES PENGINSTALLAN WINGS SEDANG BERLANGSUNG MOHON TUNGGU 1-2MENIT*');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = 'bash <(curl https://raw.githubusercontent.com/LeXcZxMoDz9/Kebutuhan/main/install.sh)';
        rafatharcodeReply('*MEMULAI CREATE NODE & LOCATION*');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        rafatharcodeReply(`*DATA PANEL ANDA*\n\n*USERNAME:* lex\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .wings ipvps,pwvps,tokenconfiguration \nNote: *HARAP TUNGGU 1-2MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${database}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${aloklex}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${passdb}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('lexcz@lexcz.my.id\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('lexcz@lexcz.my.id\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('lex\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('lex\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('lex\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${database}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${passdb}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('lexcz@lexcz.my.id\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write('3\n');
        stream.write('LeXcZ\n');
        stream.write('LeXcZ\n');
        stream.write(`${domainnode}\n`);
        stream.write('LeXcZ\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break
case 'installpanelv2': {
    if (!isPrem) return rafatharcodeReply('anu bg kmu blum prem')
    let t = text.split(',');
    if (t.length < 4) return rafatharcodeReply(`*Format salah!*\nPenggunaan: ${prefix}installpanelv2 ipvps,password,domainpnl,domainnode,ramvps(Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = 'lex';
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const node = 'bash <(curl https://raw.githubusercontent.com/LeXcZxMoDz9/Kebutuhan/main/install.sh)'
    const conn = new Client();

    conn.on('ready', () => {
        rafatharcodeReply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 1-2MENIT*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                if (data.toString().includes('Input')) {
                    stream.write('0\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('lex\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('lex\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('lex\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('Asia/Jakarta\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('lex@g.io\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('lex@g.io\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('lex\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('lex\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('lex\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write(`${password}\n`);
                }
                if (data.toString().includes('Input')) {
                    stream.write(`${subdomain}\n`);
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('yes\n');
                }
                if (data.toString().includes('Please read the Terms of Service')) {
                    stream.write('Y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('\n');
        }
                if (data.toString().includes('Input')) {
                    stream.write('1\n');
        }
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);
    
    async function installWings(conn, domainnode, subdomain, password) {
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                if (data.toString().includes('Input')) {
                    stream.write('1\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write(`${subdomain}\n`);
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('lexcz\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('lexcz\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write(`${domainnode}\n`);
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('lex@g.io\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }
        
    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        conn.exec(node, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('CreateNode Prcesed stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                stream.write('3\n');
                stream.write('LeXcZ\n');
                stream.write('LeXcZ\n');
                stream.write(`${domainnode}\n`)
                stream.write('LeXcZ\n');
                stream.write(`${ramvps}\n`);
                stream.write(`${ramvps}\n`);
                stream.write('1\n');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }
   
    
    async function sendPanelData(subdomain, password) {
   rafatharcodeReply(`*DATA PANEL ANDA*\n\n*USERNAME:* lex\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .wings ipvps,pwvps,tokenconfiguration \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`)
}
}

    break;
case 'wings': {
    if (!isPrem) return rafatharcodeReply('anu bg kmu blum prem')
    let t = text.split(',');
    if (t.length < 2) return rafatharcodeReply(`*Format salah!*\nPenggunaan: ${cmd} ipvps,password,token (token configuration)`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/LeXcZxMoDz9/Kebutuhan/main/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodeReply('*PROSES CONFIGURE WINGS*')
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
rafatharcodeReply('SUCCES START WINGS DI PANEL ANDA SILAHKAN CEK NODE ANDAI');
                conn.end();
            }).on('data', (data) => {
                stream.write('2\n');
                stream.write(`${token}\n`)
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodeReply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return rafatharcode.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return rafatharcode.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
rafatharcode.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
rafatharcode.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return rafatharcode.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return rafatharcode.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
//rafatharcode.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})