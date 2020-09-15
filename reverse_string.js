
/**
 * 愚直version
*/
const reverseString = (s) => {

  let revString = ""
  for (let i = s.length - 1; i >= 0; i--) {
    revString += s[i]
  }
  return revString
}

/**
 * 再起関数version
 */
const reverseString = (s) => {
  if (s.length <= 1) return s
  return reverseString(s.slice(1)) + s[0]
}


(() => {
	const string = "string"
	const rs = reverseString(string)
  console.log(rs)
})()
