const express = require('express')

const app = express()

app.get('/api/customers', (req,res)=>{
  const customers = [
    { id: 1, name: 'Fred', email: 'fred@email.com' },
    { id: 1, name: 'Sandy', email: 'sandy@email.com' },
    { id: 1, name: 'Bob', email: 'bob@email.com' },
    { id: 1, name: 'Lottie', email: 'lottie@email.com' }
  ]
  res.json(customers)
})

const port = 7777

// app.listen(port, ()=> console.log(`Server running at ${port}`))

// Concurrently
app.listen(port, ()=> console.log(`Server running on ${port}, view Client at http://localhost:3000 `))
