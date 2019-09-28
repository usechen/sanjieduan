
function avator(mid) {
  let Mid = mid || '004AlfUb0cVkN1'
  return `https://y.gtimg.cn/music/photo_new/T001R300x300M000${Mid}.jpg?max_age=2592000`
}

export const parseData = (list) =>{
  let obj = {
    hot: {
      title: 'hot',
      items: []
    }
  }
  list.forEach((item, index) => {
    let { Fsinger_mid, Fsinger_name, Findex } = item
    Fsinger_mid = avator(Fsinger_mid)
    if (index < 20) {
      obj.hot.items.push({ Fsinger_mid, Fsinger_name, Findex })
    }
    if (obj[item.Findex]) {
      obj[item.Findex].items.push({ Fsinger_mid, Fsinger_name, Findex })
    } else {
      obj[item.Findex] = {
        title: item.Findex,
        items: [{ Fsinger_mid, Fsinger_name, Findex }]
      }
    }
  })
  let hot = []
  let indexArr = []
  for (const key in obj) {
    if (key === 'hot') {
      hot.push(obj[key])
    } else {
      indexArr.push(obj[key])
    }
  }
  indexArr.sort((a, b) => {
    return a.title.charCodeAt() - b.title.charCodeAt()
  })
  let reslist = hot.concat(indexArr)
  return reslist
}