function Book(props){
 const image=React.createElement("img",
                       {src:props.image,width:"100px",height: "100px"},null);
 const title=React.createElement("h2",{style:{color:"red"}},
                                     "Title:"+props.title);
 const price=React.createElement("h2",{style:{color:"green"}},
                                          "Price:₹"+props.price);
 const btn=React.createElement("button",{style:{color:"blue"}},
                                             "AddToCart");
 const div=React.createElement("div",{className: "book"}
                                       ,[image,title,price,btn]);
  return div;                                                              
}
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
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(App())