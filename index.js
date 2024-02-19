// Code your solutions in this file
let names =['Guadalupe', 'Ollie', 'Aki'];

function writeCards(names, surprise) {
    let myArray=[];
    for (let i=0;i<names.length;i++){
        let a =`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`;
        // console.log(a);
        myArray.push(a);
    }
  return myArray;
}

function countDown(number){
    for (let i=number; i>=0;i--){
        console.log(i)
    }
}
countDown(10);