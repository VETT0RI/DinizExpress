import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.json({
    id: 1,
    name: "Julio"
  })
})


app.listen(3333)