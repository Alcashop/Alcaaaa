import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' ; 
import { tr, translateText } from './lib/_checkLang.js';

//---------[ Añada los numeros a ser Propietario/a ]---------

global.owner = [['528241050228', 'Alcashop', true], ['']]
global.mods = []
global.prems = []

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
global.botNumberCode = "" //Ejemplo: +59309090909
global.confirmCode = "" 
global.gataJadibts = false //cambia a false Desactivar en "auto-reconexion" de sub-bots

//Cambiar a tu idioma "es = español" - "en = inglés"
global.lang = "es"
global.tr = tr

//---------[ APIS GLOBAL ]---------

global.baileys = '@whiskeysockets/baileys'
global.apis = 'https://delirius-apiofc.vercel.app'

global.APIs = { lolhuman: { url: 'https://api.lolhuman.xyz/api/', key: 'GataDiosV3' },
skizo: { url: 'https://skizo.tech/api/', key: 'GataDios' },
alyachan: { url: 'https://api.alyachan.dev/api/', key: null }, 
neoxr: { url: 'https://api.neoxr.eu/api', key: 'GataDios' },
fgmods: { url: 'https://api.fgmods.xyz/api', key: 'elrebelde21' },
popcat: { url: 'https://api.popcat.xyz', key: null }}

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//------------------------[ Stickers ]-----------------------------

global.packname = '✔️𝘼𝙇𝘾𝘼/𝘽𝙊𝙏'
global.author = 'Alcashop'

//------------[ Versión | Nombre | cuentas ]------------

global.wm = '𝘼𝙇𝘾𝘼/𝘽𝙊𝙏' 
global.vs = '1.9.8'
global.yt = 'https://www.instagram.com/alcashop.ff'
global.tiktok = 'https://www.instagram.com/alcashop.ff'
global.md = 'https://www.instagram.com/alcashop.ff'
global.fb = 'https://www.instagram.com/alcashop.ff'
global.face = 'https://www.instagram.com/alcashop.ff'

global.nna = 'wa.me/528241050228' 
global.nna2 = 'wa.me/528241050228' //
global.nnaa = 'wa.me/528241050228' //
global.nn = 'wa.me/528241050228' //Grupo 1
global.nnn = 'wa.me/528241050228' //Grupo 2
global.nnnt = 'wa.me/528241050228' //Grupo del Colaboracion
global.nnntt = 'wa.me/528241050228' //enlace lolibot
global.nnnttt = 'wa.me/528241050228' //A.T.T.M
global.nnntttt = 'wa.me/528241050228' //Grupo ayuda sobre el bot
global.bot = 'wa.me/528241050228'
global.redes = [nna, nna2, yt, nn, nnn, nnnt, nnntt, nnnttt, nnntttt, md, tiktok, fb, face]

//------------------------[ Info | Datos ]---------------------------

global.wait = 'Calmao pa estoy procesando😎\n\n> *❗Por favor no hacer spam👏❗*'
global.waitt = '*⌛ _Cargando..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _Cargando..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*'
global.waittttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▬*'
global.rg = '『✅ 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 ✅』\n\n'
global.ag = '『⚠️ 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 ⚠️』\n\n'
global.iig = '『❕ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 』\n\n'
global.fg = '『❌ 𝙀𝙍𝙍𝙊𝙍 ❌』\n\n'
global.mg = '『❗️ 𝙇𝙊 𝙐𝙎𝙊 𝙈𝘼𝙇❗』\n\n'
global.eeg = '『📩 𝙍𝙀𝙋𝙊𝙍𝙏𝙀 📩』\n\n'
global.eg = '『💚 𝙀𝙓𝙄𝙏𝙊𝙎 💚』\n\n'

//-------------------------[ IMAGEN ]------------------------------
//global.img = "https://qu.ax/Zgqq.jpg"
global.img1 = 'https://qu.ax/hNJk.jpg'
global.img2 = 'https://qu.ax/jzhN.jpg'

global.imagen = fs.readFileSync('./Menu2.jpg')
global.imagen1 = fs.readFileSync('./media/Menu1.jpg')
global.imagen2 = fs.readFileSync('./media/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/Menu3.jpg')
global.imagen4 = fs.readFileSync('./media/Menu4.jpg')
global.imagen5 = 'https://qu.ax/rULv.jpg'
global.imagen6 = 'https://qu.ax/CySs.jpg'
global.menu18 = 'https://qu.ax/MOgO.jpg'
global.vid1 = 'https://qu.ax/dcAc.mp4'
global.img = [imagen, imagen1, imagen2, imagen3, imagen4]
global.imageUrl = ["https://qu.ax/HJnWj.jpg", "https://qu.ax/ehPzQ.jpg", "https://qu.ax/ilfbC.jpg"]

//----------------------------[ NIVELES | RPG ]---------------------------------

global.multiplier = 850 // Cuanto más alto, más difícil subir de nivel
global.maxwarn = '4' // máxima advertencias

//---------------[ IDs de canales ]----------------

global.ch = {
ch1: '120363297379773397@newsletter', 
ch2: '120363355261011910@newsletter', 
ch3: '120363160031023229@newsletter',
ch4: '120363301598733462@newsletter',
ch5: '120363374372683775@newsletter', 
ch6: '120363388040813284@newsletter',
ch7: '120363419483367014@newsletter',  
ch8: '120363397276648807@newsletter',
ch9: '120363343811229130@newsletter',
}

//----------------------------------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
