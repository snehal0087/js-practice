console.log("Program to check if String A is rotation of String B");
let str1 = "abc";
let str2="bcas";
let isRotation = isRotate(str1,str2);
console.log(isRotation);

function isRotate(str1,str2) {
    let array1 = str1.split("");
    
    console.log(array1);
    if(str1.length===0&&str2.length===0) {
        return true;
    }

    for(let i=0;i<array1.length;i++){
        let ch = array1.pop();
        array1.unshift(ch);
        if(array1.join("")===str2) {
            return true;
        }
        console.log(ch);
    }
    return false;
}

console.log("Rotation check with simple apporach : "+isRotateWithIncludes(str1,str2))
function isRotateWithIncludes(str1,str2) {
    let newString = str1.concat(str1);
    return newString.includes(str2);
}