import Book from "./Book";
const bookdata=[
    {image:"",title:"ReactJS",price:465},
    {image:"",title:"NodeJS",price:567},
    {image:"",title:"ExpressJS",price:763},
    {image:"",title:"ReactJS",price:465},
    {image:"",title:"NodeJS",price:567},
    {image:"",title:"ExpressJS",price:763},];
function App(){
   const bookstore= bookdata.map((b)=>{
        return Book(b)
    })
    const div=React.createElement("div",
              {className:"bookstore"},bookstore)
              return div;
}    
export default App;