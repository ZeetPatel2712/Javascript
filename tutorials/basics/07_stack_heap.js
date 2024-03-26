/** Stack ( Primitive Data Type ) and Heap ( None Primitive Datatype ) Is a Type Of Memory

 Primitive Data Type Use Stack Memory
 Non Primitive Data Type Use Heap Memory

 Stack Memory Mens It's Give Me Copy Of Variable
 Heap Memory Mens It's Give Me Reference Of Variable

*/

/** Stack Memory Example 👇 */

let name = "Zeet Patel";

let full_name = name;
full_name = "Zeet Mahendrabhai Patel";

console.log(name);
console.log(full_name);

/** The Output Is This It's Shows This Output Because name variable give it's copy to full_name variable 
because variable name is primitive data type and primitive datatype store its memory in stack memory.
*/

/** Heap Memory Example 👇 */

let myInfo = {
    name: "Zeet Patel",
    age: 21,
};

let myUpdatedInfo = myInfo;

myUpdatedInfo.age = 20;

console.log(myInfo);
console.log(myUpdatedInfo);

/** The Output Is This It's Shows This Output Because myInfo variable give it's reference to myUpdatedInfo variable
because variable myInfo is non primitive data type and non primitive datatype store its memory in heap memory. */
