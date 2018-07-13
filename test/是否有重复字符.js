function isIsogram2(str) {
  return /(.).*\1/i.test(str);
}

str='122'
result= isIsogram2(str)
log(result)

