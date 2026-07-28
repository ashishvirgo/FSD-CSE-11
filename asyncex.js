function register(){
   setTimeout(()=>{
    console.log("register here")
   },10000)
    
}
function login(){
   setTimeout(()=>{
    console.log("login here")
   },5000)
    
}
function getData(){
    setTimeout(()=>{
console.log("Fetch data from DB")
    },3000)
    
}
function displayData(){
    setTimeout(()=>{
     console.log("display Data")
    },6000)
    
}

register();
login();
getData();
displayData();
console.log("call Another Application")