import { Brainly } from "brainly-scraper-v2"

let handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) throw `Contoh: ${usedPrefix + command} Penemu Listrik`
  const brain = new Brainly('id')
  brain.search(text, 'id').then(res => {
    let json = JSON.parse(JSON.stringify(res))
    let answer = json.map((v, i) => `_*πβPERTANYAAN KE ${i + 1}*_\n${v.question.content}\n${v.answers.map((v, i) => `*βοΈJAWABAN KE ${i + 1}*\n${v.content.replace(/<\/?p>|<\/?strong>|<\/?u>|<\/?h[1-3]>|<\/?span>/g, '').replace(/<br ?(\/|\\)?>/g, '\n')}`).join('\n')}`).join('\n\n*βΉβββββββββββββββββββΊ*\n\n')
  // console.log(res)
    m.reply(answer)
  })

}
handler.help = ['brainly'].map(v => v + ' <Pertanyaan>')
handler.tags = ['edukasi']
handler.command = /^(brainly)$/i
export default handler
