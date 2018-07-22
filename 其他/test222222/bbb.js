

var storage = storages.create("ABC");
storage.put("a", 123);

log(storages)


function outputObj(obj) {
	var description = "";
	for (var i in obj) {
		description += i + " = " + obj[i] + "\n";
	}
	log(description);
}
outputObj(storages)








// // var stg=storages.create("ABC");
// // stg.put("abc","88222266666666666666666662288")
// // // log("abc = " + stg.get("abc"));

// // // outputObj(storages)

// // storages.remove("autojs.localstorage.ABC.xml")

// // log("storages.remove数字之前=",storages.remove)

// // storages.remove=

// // log("storages.remove数字之后=",storages.remove)




// // function Storages(){
// // this.name="customStorages"
// // this.create =function (name) {
// //   console.log("LocalStorage=",LocalStorage)
// //     return new LocalStorage(name);
// // }

// // this.remove =function (name) {
// //     this.clear();
// // }

// // }
// // function Storages(name){
// // console.log(new LocalStorage(name))

// // }
// a=function(){}
// log(a())

// // storages=new Storages()
// // log("customStorages=")
// // outputObj(runtime)


// function outputObj(obj) {
// 	var description = "";
// 	for (var i in obj) {
// 		description += i + " = " + obj[i] + "\n";
// 	}
// 	log(description);
// }






// // storages.remove(name)




// // _storage = com.stardust.autojs.core.storage.LocalStorage@3f3b0a9
// // put =
// // function (key, value) {
// //     if (typeof (value) == "undefined") {
// //         throw new TypeError("value cannot be undefined");
// //     }
// //     this._storage.put(key, JSON.stringify(value));
// // }

// // get =
// // function (key, defaultValue) {
// //     var value = this._storage.getString(key, null);
// //     if (!value) {
// //         return defaultValue;
// //     }
// //     return JSON.parse(value);
// // }

// // remove =
// // function (key) {
// //     this._storage.remove(key);
// // }

// // contains =
// // function (key) {
// //     return this._storage.contains(key);
// // }

// // clear =
// // function (key) {
// //     this._storage.clear();
// // }





















// // stg.remove("ABssssC")

// // result1=null
// // result2=null



// // log(stg.remove("ABC"))


// // com.stardust.autojs.core.storage.LocalStorage@ceab5b4
// // com.stardust.autojs.core.storage.LocalStorage@4f1fe8d

// // { _storage: com.stardust.autojs.core.storage.LocalStorage@ecd8c9,
// //   put: [Function],
// //   get: [Function],
// //   remove: [Function],
// //   contains: [Function],
// //   clear: [Function] }







// // stg.prototype.create = function (name) {
// //   // result1=new LocalStorage(name);
// //   // result2=new LocalStorage(name);
// //   //   // return new LocalStorage(name);
// //   //   return [result1,result2]
// // }

// // log(stg.create("aaaaaaaaaaa"))















// // stg.put("a",123)
// // log("a="+stg.get("a"))

// // storages.remove("ABC")

// // sleep(1000)
// // if(storages.remove("ABC")){log("false不存在")}else{log("true存在")}
// // // stg.put("a",1234)
// // // log("a=",+stg.get("a"))
// // log("a="+stg.get("a"))

// // log(storages)
// // { create: [Function], remove: [Function] }

// // create =
// // function (name) {
// //     return new LocalStorage(name);
// // }

// // remove =
// // function (name) {
// //     this.create(name).clear();

// // }


// // put =
// // function (key, value) {
// //     if (typeof (value) == "undefined") {
// //         throw new TypeError("value cannot be undefined");
// //     }
// //     this._storage.put(key, JSON.stringify(value));
// // }

// // get =
// // function (key, defaultValue) {
// //     var value = this._storage.getString(key, null);
// //     if (!value) {
// //         return defaultValue;
// //     }
// //     return JSON.parse(value);
// // }

// // remove =
// // function (key) {
// //     this._storage.remove(key);
// // }

// // contains =
// // function (key) {
// //     return this._storage.contains(key);
// // }

// // clear =
// // function (key) {
// //     this._storage.clear();
// // }




// function outputObj(obj) {
//   var description = "";
// 	for (var i in obj) {
//     description += i + " = " + obj[i] + "\n";
// 	}
// 	log(description);
// }

// // outputObj(stg)
// // outputObj(Storage.clear())
// // // console.log("attr", Object.getOwnPropertyNames(storages));
// // // console.log(Object.getOwnPropertyNames(storages).sort()); // 输出 ["asj", "foo", "getFoo"]
// // // Storage.clear()
