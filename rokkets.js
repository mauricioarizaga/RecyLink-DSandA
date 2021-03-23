/*
Algorithm and Data Structure Questions
1. Composite function
Write a function called "rokket" which produces the following output when called:
console.log(rokket(2)(5)(3)) // this outputs 30
console.log(rokket(4)(2)(2)) // this outputs 16
console.log(rokket(8)(2)(1)) // this also outputs 16
This function must work for any three integer numbers.
*/
const rokket= (a)=> {
    return (b) => {
      return (c) => {
          if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c))
          {
        return a*b*c;
    }else{
      return "Error no todos son números enteros."  
    }
      };
    };
}
console.log("///////////////////////////////////////////");
console.log("Resultado de la funcion rokket");
console.log("Output:", rokket(2)(5)(3)) // this outputs 30
console.log("Output:", rokket(4)(2)(2)) // this outputs 16
console.log("Output:", rokket(8)(2)(1)) // this also outputs 16
console.log("Output:", rokket(8)(2.1)(1)) // this outputs Error message
console.log("///////////////////////////////////////////");
console.log("Final de la funcion Rokket");
console.log("///////////////////////////////////////////\n");
/*2. Longest string
Write a function called "rokket" which receives an array with several strings. It must output the longest (character length) string in the array.
Example:
const list = ['best', 'company', 'ever']
console.log(rokket(list)) // this outputs 'company'
*/
const list = ['best', 'company', 'ever']
const rokketLongestString = (arr) =>{
if(arr.length==0) return "El array está vacio";
if(arr.length==1) return arr[0] + "es el string mas largo";
let longest = arr[0]
arr.forEach((e,i)=>{
if(i!==0 && e.length>longest.length) 
longest = e;
})
return longest
}
console.log("\n///////////////////////////////////////////");
console.log("Resultado de la funcion rokketLongestString");
console.log("Output:", rokketLongestString(list))
console.log("////////////////////////////////////////////");
console.log("Final de la funcion RokketLongestString");
console.log("///////////////////////////////////////////\n");

/*3. String repetition
Write a function called "rokket" which receives a string A and an integer N and returns a new string with A repeated N times.
Example:
console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
console.log(rokket('abc', 2)) // this outputs 'abcabc'*/
const rokketStringRepetion = (string, number) =>{
if(Number.isInteger(number) && number >0) return string.repeat(number)
return "El número no es válido o es menor o igual a 0."
            }
console.log("\n///////////////////////////////////////////");
console.log("Resultado de la funcion rokketStringRepetion");
console.log("Output:", rokketStringRepetion('node', 5)) // this outputs 'nodenodenodenodenode'
console.log("Output:", rokketStringRepetion('abc', 2)) // this outputs 'abcabc'*/
console.log("////////////////////////////////////////////");
console.log("Final de la funcion rokketStringRepetion");
console.log("////////////////////////////////////////////\n");

/*4. Only last names
Write a function called "rokket" which receives a list of names from a contact book. Each name is an object consisting of a first name and last name. Return a list that
shows only the last names.
Example:
const contacts = [
{ firstName: 'Juanito', lastName: 'Rokket' },
{ firstName: 'James', lastName: 'Bond' },
{ firstName: 'Harry', lastName: 'Potter' }
]*/
const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
    ]
const rokketlastName = (arr) =>{
return arr.map(e =>{
 return e.lastName
})
}
console.log("\n///////////////////////////////////////////");
console.log("Resultado de la funcion rokketlastName");
console.log("Output:", rokketlastName(contacts)) // this outputs ['Rokket', 'Bond', 'Potter']
console.log("////////////////////////////////////////////");
console.log("Final de la funcion rokketlastName");
console.log("////////////////////////////////////////////\n");
    
/*5. Unique numbers
Write a function called "rokket" which receives two number arrays of any size. Return a list containing the intersection of the two arrays (all unique numbers in both
arrays).
Example:
console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]
*/
const rokketUniqueNumbers = (arr1, arr2) =>{
const arr= arr1.concat(arr2)
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
}
console.log("\n///////////////////////////////////////////");
console.log("Resultado de la funcion rokketUniqueNumbers");
console.log("Output:", rokketUniqueNumbers([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
console.log("Output:", rokketUniqueNumbers([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]
console.log("////////////////////////////////////////////");
console.log("Final de la funcion rokketUniqueNumbers");
console.log("////////////////////////////////////////////\n");   