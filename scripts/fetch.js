const {writeFileSync} = require('fs')
const fetch = require('isomorphic-unfetch')
const {parse} = require('@progfay/scrapbox-parser')
const {resolve} = require('path')
const dic = require(resolve(process.cwd(), './data/dic.json'))

const main = async () => {
  const res = await fetch(`https://scrapbox.io/api/pages/jigsaw/${encodeURIComponent('最近書かれた記事')}`)
  const json = await res.json()
  const parsed = parse(json.lines.map(line => line.text).join('\n'))
  const res1 = await fetch(`https://scrapbox.io/api/pages/jigsaw/${encodeURIComponent('最近クリップしたページ')}`)
  const json1 = await res1.json()
  const parsed1 = parse(json1.lines.map(line => line.text).join('\n'))
  const data = {
    articles: parsed.slice(1, -1).map(({nodes}, index) => ({ title: nodes[0].href, id: dic[nodes[0].href], updated: json.lines.slice(1, -1)[index].updated })),
    clips: parsed1.slice(1, -1).map(({nodes}, index) => ({ title: nodes[0].href, id: dic[nodes[0].href], updated: json1.lines.slice(1, -1)[index].updated }))
  }
  writeFileSync('./data/updates.json', JSON.stringify(data))
}

main()
