var box=[];
var i=0;
var range = prompt("Enter the range of nos ");

for(i=0;i<=range;i++){
    if(i%3==0 && i%5==0){
        box.push("FizzBuzz");
    }
    else if(i%3==0){
        box.push("Fizz");
    }
    else if(i%5==0){
        box.push("Buzz");
    }
    else{
        box.push(i);
    }
}
console.log(box);
