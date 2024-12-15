function toWeirdCase(string) {
  let str = string.toLowerCase().split("");
  let p = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "") {
      p = 0;
      continue;
    } else {
      if (p % 2 == 0) {
        str[i] = str[i].toUpperCase();
      }
      p++;
    }
  }
  return str.join("");
}
console.log(toWeirdCase("StRiNg"));
