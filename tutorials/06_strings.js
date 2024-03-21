const name = "Zeet";
const surname = "Patel";

/** NOTICE :- use "template string converter extension to easiest way to write template string" */
const full_name = `Hello My Full Name Is ${name} ${surname}. but my friends call me only ${name}`.trim();

// String Methods ------------------------------------------------ //

/** 01 Length ---------------- */
console.log(full_name.length);

/** 02 ToLowerCase ---------------- */
console.log(full_name.toLowerCase());

/** 03 ToUpperCase ---------------- */
console.log(full_name.toUpperCase());

/** 04 Includes ---------------- */
// if particular word is available on the string it's return true else it's return return false
console.log(full_name.includes("Hello"));
console.log(full_name.includes("Hy"));

/** 05 Starts With ---------------- */
// to search sting first letter and word. it's return true or false
console.log(full_name.startsWith("Hello"));
console.log(full_name.startsWith("Kello"));
console.log(full_name.startsWith("H"));

/** 06 Ends With ---------------- */
// to search sting last letter and word. it's return true or false
console.log(full_name.endsWith("Patel"));
console.log(full_name.endsWith("Katel"));
console.log(full_name.endsWith("l"));
console.log(full_name.endsWith("k"));

/** 07 Search ---------------- */
// if particular word is available on the string it's return index number else it's return -1
console.log(full_name.search("Name"));
console.log(full_name.search("Name1"));

/** 08 Match ---------------- */
// if particular word is available on the string it's return array else it's return null
/** NOTICE :- in this code i used "/Zeet/g" in this code "//g" is regular expression so learn about it. in this code "/Zeet/g" mens find Zeet Keyword globally on the full_name string */
console.log(full_name.match(/Zeet/g));
console.log(typeof full_name.match(/Zeet/g));

/** 09 IndexOf  ---------------- */
// if particular word is available on the string and it's search from start it's return index number else it's return -1
console.log(full_name.indexOf("Zeet"));

/** 010 LastIndexOf ---------------- */
// if particular word is available on the string it's search from last return index number else it's return -1
console.log(full_name.lastIndexOf("Zeet"));

/** 011 Replace ---------------- */

// if particular word is available on the string it's replace with another word

// its only replace first character
console.log(full_name.replace("Zeet", "Meet"));

// its only replace all character
console.log(full_name.replace(/Zeet/g, "Meet"));

/** 12 Trim ---------------- */
// it's remove white space from start and end
console.log(full_name.trim());

/** 13 charAt ---------------- */
// it's return character on particular index number
console.log(full_name.charAt(0));

/** 14 concat ---------------- */
// it's join two string
console.log(full_name.concat(" ", surname));

/** 15 split ---------------- */
// it's convert string into array
console.log(full_name.split(""));
console.log(full_name.split("Z"));

/** 16 slice ---------------- */
// it's return create slice from string.
const greeting = "hy there my name is zeet.";
console.log(greeting.slice(0, 4));
console.log(greeting.slice(5, -4));
console.log(greeting.slice(7));
