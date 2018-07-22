// class formatDate extends Date {
//   constructor(dateStr) {
//     super(dateStr);
//   }

//   getFormattedDate() {
//     var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//     return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
//   }
// }

// console.log(new formatDate('August 19, 1975 23:15:30').getFormattedDate());
// // expected output: "19-Aug-1975"


// function outputObj(obj) {
// 	var description = "";
// 	for (var i in obj) {
// 		description += i + " = " + obj[i] + "\n";
// 	}
// 	log(description);
// }
// log(Date())
// outputObj(Date())
// exit()




// function formatDate(){
//   // this.subFlag = false
//   (Date).call(this)    //继承属性
//   this.getFormattedDate=function(){
//     var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//     return this.getDate()-months[this.getMonth()]-this.getFullYear();
//   }
// }

// console.log(new formatDate('August 19, 1975 23:15:30').getFormattedDate());









function Person(name){
  this.name=name; //1
  this.className="person"
 }
 Person.prototype.getName=function(){
  return (this.name)
 }
 function Man(name){
   Person.apply(this,arguments)
 }
 //注意此处
 Man.prototype = Object.create(Person.prototype);


 var man1=new Man("Davin");
// log(man1.name)
log(man1.getName())











// Sub.prototype = new Date;
// var obj = new Sub();
// Date.prototype.getSubFlag = function(){
//   return this.flag;
// }




// function Super(){
//   this.flag = true;
// }
// Super.prototype.getFlag = function(){
//   return this.flag;     //继承方法
// }
// function Sub(){
//   this.subFlag = flase
//   Super.call(this)    //继承属性
// }
// Sub.prototype = new Super;
// var obj = new Sub();
// Super.prototype.getSubFlag = function(){
//   return this.flag;
// }
// //--------------------------------------------




