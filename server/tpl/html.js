console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
console.log("server/tpl/html.js")

module.exports=`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Koa Server HTML</title>
    <link href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js">

    </script>
    <script src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.bundle.js">

    </script>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1>Hi Luke</h1>
          <p>This is Scott</p>
        </div>
        <div calss="col-md-4">
          <p>测试静态 HTML 页面</p>
        </div>
      </div>
    </div>
  </body>
  </html>
`

