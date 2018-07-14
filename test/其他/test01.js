var fs = require("fs");
var data = '';

// 创建可读流

// console.log('读取之前readerStream=',readerStream)
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');
// console.log('读取之后readerStream=',readerStream)


// 设置编码为 utf8。

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
console.log('读取最后readerStream=',readerStream)

});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");
// console.log('读取最后readerStream=',readerStream)
