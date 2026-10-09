import Item from "./Item"
const ItemStore = () => {
    const itemData=[
    {image:"",title:"ReactJS",price: 645},
    {image:"",title:"NodeJS",price: 476},
    {image:"",title:"ExpressJS",price: 678},
    {image:"",title:"ReactJS",price: 645},
    {image:"",title:"NodeJS",price: 476},
    {image:"",title:"ExpressJS",price: 678},
  ]
  return (
    <div className="home">
      {
  itemData.map((item,index)=>{
return <Item key={index} props={item}/>
        })
      }
    </div>
  )
}

export default ItemStore
