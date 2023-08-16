function greeting(someone) {
  //code here!
  if (someone === null || someone === undefined) {
    return 'hello, guest'
  } else {
    return `hello, ${someone}`
  }
}


module.exports = greeting
