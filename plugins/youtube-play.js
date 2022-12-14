import { youtubeSearch } from '@bochilteam/scraper'
import canva from "canvacord"

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId

let spo = new canva.Spotify()
        .setAuthor(`rizxyux`)
        .setAlbum("Youtube donlod")
        .setStartTimestamp(Date.now() - 10000)
        .setEndTimestamp(Date.now() + 50000)
        .setImage(thumbnail)
        .setTitle(title);
        
   spo.build()
        .then(data => {
   conn.sendHydrated(m.chat, `
π *Title:* ${title}
π *Url:* ${url}
πΉ *Description:* ${description}
β²οΈ *Published:* ${publishedTime}
β *Duration:* ${durationH}
ποΈ *Views:* ${viewH}

Dukung Kami
${trakteer}  `.trim(), author, data, url, 'πΊGo To Youtube!', null, null, [
    ['Audio π§', `${usedPrefix}yta ${url} yes`],
    ['Video π₯', `${usedPrefix}ytv ${url} yes`],
    ['Youtube Searchπ', `${usedPrefix}yts ${url}`]
  ], m)
        });
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false

export default handler

