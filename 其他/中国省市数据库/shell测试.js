// log("\n"+shell("sqlite3 /sdcard/中国省市数据库.sqlite '.tables  X'0D'||X'0A'   .database'").result)
// log("\n"+shell("sqlite3 /sdcard/中国省市数据库.sqlite '.tables \r\n   .database'").result)
// log("\n"+shell("sqlite3 /sdcard/中国省市数据库.sqlite '.database   .tables'").result)
// log(shell("sqlite3 /sdcard/中国省市数据库.sqlite 'select * from 中国城市'").result)
log(shell("sqlite3 /sdcard/中国省市数据库.sqlite  '.schema'  ").result)
// .database
