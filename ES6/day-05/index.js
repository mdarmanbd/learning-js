

// distruchar
/*
let number = [10,20,40,50,40,60,70];
let [num1,num2, ...s] = number;
// console.log(num3);
console.log(s);
*/

//  

/*
const studentInfo = {
    id : 12,
    fullName : 'md.arman hossain',
    cpga : 3.52,
    language : {
        fist : 'bangla',
        second : 'english'
    }
}

const {id , fullName,language} = studentInfo;  // distruct the object
// console.log(fullName);
console.log(language); 
console.log(language.second);
*/

// distruction function paremeters

let studentID = ({group , year , clss}) =>{  // {distruction function}
    // console.log(group); 
    // console.log(year);
    // console.log(clss);  
}
 
let stu = {
    clss : 9,
    group : 'science',
    year : 2010
};

studentID(stu);

// find() | findIndex()

let count = [2,10,23,34,45,65,86,40]; //  1

let xew = (value) => {  // 3
    if(value%2 === 0){  // 4
        return value;  // 5
    }
}

let eventNumber = count.find(xew);  // 2
let eventNumberIndex = count.findIndex(xew);
console.log(eventNumber);  // 6
console.log(eventNumberIndex);


//

const men = [
    {
        id : 1,
        name : 'a',
        gpa : 3.21
    },
    {
        id : 2,
        name : 'b',
        gpa : 3.1
    },
    {
        id : 3,
        name : 'c',
        gpa : 4.21
    },
    {
        id : 4,
        name : 'd',
        gpa : 5
    }

]

console.log(men.find((x)=> x.gpa > 4));

