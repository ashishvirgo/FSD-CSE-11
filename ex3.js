const a=[1,2,3,4,5,6,7,8,9];
const even=a.filter((i)=>(i%2==0));
console.log("a=",a);
console.log("Even=",even)
const square=even.map((i)=>(i*i));
console.log("Square=",square)
const sum=square.reduce((i,s)=>(i+s))
console.log("sum=",sum)