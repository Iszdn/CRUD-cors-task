const express=require("express")
const app = express()
const port=5000
app.use(express.json())
const cors = require('cors');
app.use(cors());
let arr=[ { 
    "id": 1,
    "image":"https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-9.jpg",
    "name": "Countrey",
    "price": "21",
    "info":"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    "id": 2,
    "image":"https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-8.jpg",
    "name": "Perfect Edition",
    "price": "51",
    "info":"Lorem, ipsum dolor sit amet consectetur adipisicing elit."

  },
  {
    "id": 3,
    "image":"https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-7.jpg",
    "name": "Gone",
    "price": "51",
    "info":"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },  
 {
    "id": 4,
    "image":"https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-6.jpg",
    "name": "Balungan Kere ",
    "price": "31",
    "info":"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    "id": 5,
    "image":"https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-5.jpg",
    "name": "Home",
    "price": "36",
    "info":"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    "id": 6,
    "image":"https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-4.jpg",
    "name": "Double Life ",
    "price": "23",
    "info":"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  }
]

let counter=7

app.get("/",(req,res)=>{
    
    res.send(arr)
    })

app.get("/:id",(req,res)=>{
const {id}=req.params
const index=arr.find(x=>x.id===+id)
res.send(index)
})

app.post("/",(req,res)=>{
   arr.push({id:counter++,...req.body})
   res.send(arr)
})

app.delete("/:id",(req,res)=>{
  const {id}=req.params
  arr=arr.filter(x=>x.id!==+id)
  res.send(arr)
})

app.put("/:id",(req,res)=>{
    const {id}=req.params
    const index=arr.findIndex(x=>x.id===+id)
    arr[index]={id:+id,...req.body}
    res.send(arr)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

