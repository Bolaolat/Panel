require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "2347041039367"
global.namaowner = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"

//======== Setting Bot & Link ========//
global.namabot = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽" 
global.namabot2 = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.ownerbot = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.foother = "© Copyright"
global.idsaluran = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.linkgc = '𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽'
global.linksaluran = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.apitokendo = 'dop_v1_9fac1a33778eba14c1dea51544c6348750b66091e42ae1ae557eb9923ce8661b' // API AKUN DIGITAL OCEAN ANDA
global.linkyt = 'https://www.youtube.com/@LexczXModz'
global.linktele = "t.me/Asmakev930"
global.packname = "Created By"
global.author = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.footer2 = '©𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽'
global.foter1 = 'Script type Case'
global.foter2 = '𝘚𝘤𝘳𝘪𝘱𝘵 𝘴𝘪𝘮𝘱𝘭𝘦 by 𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽'

//========== Setting Event ==========//
global.welcome = true
global.autoread = fals
global.anticall = false
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "-"
global.apikey = "-"
global.capikey = "-"

//========== Setting Panell 2 ==========//
global.domain2 = "-"
global.apikey2 = "-"
global.capikey2 = "-"

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "-"
global.gopay = "-"
global.ovo = "-"
global.qr = fs.readFileSync("./media/qr.jpg")
                             
//========== Api Domain 1 ===========//
global.zone1 = "3aefcb0e7939b3fd9a54eb3a573e6b5d"
global.apitoken1 = "TQgEsbaBSxuXcPyBVhK6sRThj-3gNHrThJ_cEtM_"
global.tld1 = "lexcz.my.id"
//========== Api Domain 2 ==========//
global.zone2 = "54cf05db031b9fa9df8c6b44ac84458c";
global.apitoken2 = "8nyVSV_JdWHg6olujcU_-kDHjsvWn7mZlB4eYVr8";
global.tld2 = "bakz.xyz";
//========== Api Domain 3 ==========//
global.zone3 = "3285d8510ee8f4859cfdf533247cf301";
global.apitoken3 = "7tjuO9YrP9hxf_76SIcdD_Yrv6ZjlsyQf_t9AqbF";
global.tld3 = "lexcz.xyz";
//========== Api Domain 4 ==========//
global.zone4 = "2f9d0ded89aeb704fa876af9d19ff6ca";
global.apitoken4 = "QmQZBcqLLrqeofJdWDQTGHs1i6jcLqN8xswA4R3v";
global.tld4 = "exvlora.xyz";
//========== Api Domain 5 ==========//
global.zone5 = "e3f263f43641ef8e6a6261c2cca38148";
global.apitoken5 = "bF0avtEAMZodMLRVytyHms7EIFXRvC6_qZ6Didkr";
global.tld5 = "serverlex.xyz";
//========== Api Domain 6 ==========//
global.zone6 = "04704cadf8eb5803131af3fdc4ad88ff";
global.apitoken6 = "t7SIEGM-of8zK086rvzLczMWjSWpLcwWrk24X3s3";
global.tld6 = "lexczganteng.me";
//========== Api Domain 7 ==========//
global.zone7 = "5181b7063fdf8a42c051f0ef0dd1842d";
global.apitoken7 = "5ug6Hb6Ctd1GzFpUJ9jqD2dvGyFQupQ_A2U8FO6m";
global.tld7 = "lexcz.me";
//========== Api Domain 8 ==========//
global.zone8 = "-";
global.apitoken8 = "-";
global.tld8 = "-";
//========== Api Domain 9 ==========//
global.zone9 = "-";
global.apitoken9 = "-";
global.tld9 = "-";
//========== Api Domain 10 ==========//
global.zone10 = "-";
global.apitoken10 = "-";
global.tld10 = "-";
//========= Setting Message =========//
global.msg = {
"error": "Error ",
"done": "SUCCESS ✅", 
"wait": "PROCESSING. . .", 
"group": "*• Group Only* ", 
"private": "*• Private Chat*!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})