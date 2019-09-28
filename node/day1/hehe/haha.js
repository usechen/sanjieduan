function unique2(array) {
   var n = {}, r = [], val, type;
   for (var i = 0; i < array.length; i++) {
      val = array[i];
      type = typeof val;
      // if (!n[val]) {
      //    n[val] = [type];
      //    r.push(val);
      // } else if (n[val].indexOf(type) < 0) {
      //    n[val].push(type);
      //    r.push(val);
      // }
      console.log(type)
   }
   return r
}

console.log(unique2([1, 4, 6, 3, 2, 8, 6, 4, 2, 5, 7, 9, 3, 2, 6, 8, 3, 2]))