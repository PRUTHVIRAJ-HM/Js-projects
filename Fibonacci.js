var a=0;
var b=1;
var box=[];
box.push(a);
box.push(b);

function values(c){
for(var i=0;i<=c;i++){
    var temp=a+b;
    box.push(temp);
    a=b;
    b=temp;
}
console.log(box);
}
values(6);
