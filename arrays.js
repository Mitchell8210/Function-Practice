// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// // ---------------------------
// // 1. Find largest number
// // ---------------------------
console.log(Math.max(...numbers));

// // ---------------------------
// // 2. Find longest string
// // ---------------------------
function longest(array){
        var lgth = 0;
        var longest;
        for(let i=0; i<array.length; i++){
            if(array[i].length > lgth){
                lgth = array[i].length;
                longest = array[i]
                console.log(longest);
            }
        }
        return longest
}
console.log(longest(strings));

// // ---------------------------
// // 3. Find even numbers
// // ---------------------------
function even(arr){
    var a = []
    for(let i=0; i<arr.length;i++){
        if(arr[i] % 2 === 0){
            a.push(arr[i])
        }
    }
   console.log(a)
}
console.log(even([2,4,6,8]));


// // ---------------------------
// // 4. Find odd numbers
// // ---------------------------
function odd(arr){
        var b =[];
        for(let i=0; i<arr.length;i++){
            if(arr[i] %2 === 1){
                b.push(arr[i]);
            }
        }
        console.log(b);
}
console.log(odd(numbers));
// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function contain(arr){
    var a=[];
     for(let i=0; i<arr.length;i++){
        if(arr[i].includes("is")){
             a.push(arr[i]);
        }
}
return a;
}
console.log(contain(strings));

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
console.log(numbers.concat(strings));



// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------
function alpha(arr){
    var a =[];
    
        for(let i=0; i<arr.length;i++){
            if(arr[i].teaches.includes("Java")){
                a.push(arr[i].firstname);
            }
        }
        return a.sort();
    }
    console.log(alpha(instructors));