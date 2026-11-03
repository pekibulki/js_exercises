function spinalCase(str) {
  const regExCapital = /(?<!\s|\b|_)[A-Z]/g;
  const regExOther = /[-\s_]/g;
  let newStr = "";
  let spinal = "";

  if (str.match(regExCapital) != null) {
    newStr = str.replace(regExCapital, (match) => {
      return " " + match;
    });

    spinal = newStr.replace(/\s/g, "-").toLowerCase();
  } else if (str.match(regExOther) != null) {
    newStr = str.replace(regExOther, "-");
    spinal = newStr.toLowerCase();
  }
  return spinal;
}
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
