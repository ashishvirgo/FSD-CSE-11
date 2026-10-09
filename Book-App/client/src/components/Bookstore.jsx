import Book from './Book'

const Bookstore = () => {
    const bookdata=[
        {image:"",title:"reactJS",price:456},
        {image:"",title:"NodeJS",price:356},
        {image:"",title:"ExpressJS",price:564},
        {image:"",title:"MongoJS",price:751},
        {image:"",title:"reactJS",price:456},
        {image:"",title:"NodeJS",price:356},
        {image:"",title:"ExpressJS",price:564},
        {image:"",title:"MongoJS",price:751},
    ]
  return (
    <div className='bookstore'>
      {
        bookdata.map((book,index)=>{
          return <Book key={index} props={book}/>
        })
      }
    </div>
  )
}

export default Bookstore
