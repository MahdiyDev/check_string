function getStr(s1, s2) {
  let arr = [];
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i]) && s2[i]) {
      arr.push(s1[i]);
    }
  }
  return arr.join("");
}

console.log(getStr("ADDAS", "BADDA"));
