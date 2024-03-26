// to create date assign new date object into any variable
const d = new Date();
console.log(d);

// we can also get random date by assigning new date object into any variable
const myBirthDay = new Date("December 27 2003"); /// we can also add feature date
console.log(myBirthDay.toString(), "🎂");

// date get methods ++++++++++++++++++++++++++++++++ //

console.log(`++++++++++ date get methods +++++++++++`);

// 01 toDateString Method
// this method make your date more readable
console.log(d.toDateString());
console.log(myBirthDay.toDateString(), "🎂");

// 02 getDate Method
// this method return current date
console.log(d.getDate());
console.log(myBirthDay.getDate(), "🎂");

// 03 getFulYear Method
// this method return current year
console.log(d.getFullYear());
console.log(myBirthDay.getFullYear(), "🎂");

// 04 getMonth Method
// this method return current month
console.log(d.getMonth());
console.log(myBirthDay.getMonth(), "🎂");

// 05 getDay Method
// this method return current day
console.log(d.getDay());
console.log(myBirthDay.getDay(), "🎂");

// 06 getHours Method
// this method return current hours
console.log(d.getHours());
console.log(myBirthDay.getHours());

// 07 getMinutes Method
// this method return current minutes
console.log(d.getMinutes());
console.log(myBirthDay.getMinutes());

// 08 getSeconds Method
// this method return current seconds
console.log(d.getSeconds());
console.log(myBirthDay.getSeconds());

// 09 getMilliseconds Method
// this method return current milliseconds
console.log(d.getMilliseconds());
console.log(myBirthDay.getMilliseconds());

// date set method ++++++++++++++++++++++++++++++++++++++++++++++ //

// using date set method we can set future date

console.log(`++++++++++ date set method +++++++++`);

let f = new Date("December 27 2024");

// 01 setDate Method
// this method set current date
console.log(f.setDate(19));

// 02 setFullYear Method

// 03 setMonth Method

// 04 setHours Method

// 05 setMinutes Method

// 06 setSeconds Method

// 07 setMilliseconds Method
