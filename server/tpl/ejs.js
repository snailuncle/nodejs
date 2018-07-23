console.log(module.filename)

console.log("server/tpl/ejs.js")

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
        <h1>Hi <%= you %></h1>
        <p>This is <%= me %></p>
      </div>
      <div calss="col-md-4">
        <p>测试动态 EJS 模板引擎</p>
      </div>
    </div>
  </div>
</body>
</html>
`






// /**
//  * Module dependencies.
//  */

// var ejs = require('../')
//   , fs = require('fs')
//   , str = fs.readFileSync(__dirname + '/list.ejs', 'utf8');

// var ret = ejs.render(str, {
//   names: ['foo', 'bar', 'baz']
// });

// console.log(ret);



// <html>
//   <head>
//     <script src="../ejs.js"></script>
//     <script id="users" type="text/template">
//       <% if (names.length) { %>
//         <ul>
//           <% names.forEach(function(name){ %>
//             <li><%= name %></li>
//           <% }) %>
//         </ul>
//       <% } %>
//     </script>
//     <script>
//       onload = function(){
//         var users = document.getElementById('users').innerHTML;
//         var names = ['loki', 'tobi', 'jane'];
//         var html = ejs.render(users, { names: names });
//         document.body.innerHTML = html;
//       }
//     </script>
//   </head>
//   <body>
//   </body>
// </html>
