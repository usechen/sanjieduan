function avator(mid) {
  let Mid = mid || '004AlfUb0cVkN1'
  return `https://y.gtimg.cn/music/photo_new/T001R300x300M000${Mid}.jpg?max_age=2592000`
}


export default {
  parseData(list){
    let obj = {
      '热门':{
        title : '热门',
        items : []
      }
    }
    list.forEach((item,index) => {
      // console.log(item)
      let nowItem = { Findex: item.Findex, Fsinger_mid: item.Fsinger_mid, Fsinger_name: item.Fsinger_name}
      nowItem.avator = avator(item.Fsinger_mid)
      if (index < 20){
        obj['热门'].items.push(nowItem)
      }
      if (obj[item.Findex]){
        obj[item.Findex].items.push(nowItem)
      }else{
        if (item.Findex !== '9') {
          obj[item.Findex] = {
            title: item.Findex,
            items: [nowItem]
          }
        }
      }
    })
    let hot = []
    let indexArr = []
    for (const key in obj) {
      if (key === '热门') {
        hot.push(obj[key])
      }else{
        indexArr.push(obj[key])
      }
    }
    indexArr.sort((a,b) => {
      return a.title.charCodeAt() - b.title.charCodeAt()
    })
    // console.log(hot)
    // console.log(indexArr)
    // console.log(obj)
    return hot.concat(indexArr)
  },
}