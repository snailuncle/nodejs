console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)


console.log("server/tasks/qiniuExample.js")

var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var config = new qiniu.conf.Config();
//config.useHttpsDomain = true;
config.zone = qiniu.zone.Zone_z0;
var bucketManager = new qiniu.rs.BucketManager(mac, config);


var resUrl = 'http://devtools.qiniu.com/qiniu.png';
var bucket = "if-bc";
var key = "qiniu.png";

bucketManager.fetch(resUrl, bucket, key, function(err, respBody, respInfo) {
  if (err) {
    console.log(err);
    //throw err;
  } else {
    if (respInfo.statusCode == 200) {
      console.log(respBody.key);
      console.log(respBody.hash);
      console.log(respBody.fsize);
      console.log(respBody.mimeType);
    } else {
      console.log(respInfo.statusCode);
      console.log(respBody);
    }
  }
});
