console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)

var crypto = require('crypto');
var seed = '86728f5fc3bd99db94d3cdaf105d67788194e9701bf95d049ad0e1ee3d004277'
const hmac = crypto.createHmac("sha256", '0000000000000000004d6ec16dafe9d8370958664c1dc422f452892264c59526')
const nBits = 52

 for(var i=0; i<20; i++){
//  for(var i=0; i<671455; i++){
    hmac.update(seed)
    seed = hmac.digest("hex")
}


// console.log(seed)
//  // 2. r = 52 most significant bits
//  seed = seed.slice(0, nBits/4)
//  const r = parseInt(seed, 16)
// console.log(r)
// // 3. X = r / 2^52
//  var X = r / Math.pow(2, nBits) // uniformly distributed in [0; 1)
//  // 4. X = 99 / (1-X)
// X = 99 / (1 - X)
// // 5. return max(trunc(X), 100)
//  const result = Math.floor(X)
// console.log( Math.max(1, result / 100))


// npm i crypto -S --registry=https://registry.npm.taobao.org
