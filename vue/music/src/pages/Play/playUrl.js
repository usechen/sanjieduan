export default {
  songUrl(songmid){
    var songmid = songmid || '003NGKTc2tabpb'
    let url = `http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400${songmid}.m4a?guid=6274638440&vkey=E7F057144B1EFBEC4999734A2A245A3AD7CB61F08C564B8C6E9F1574A6582EA60EC71F7B5D6A4D896A1EF9F26C4A7AF29167F0BC0122E693&uin=0&fromtag=38`
    return url
  }
}