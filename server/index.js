require('dotenv').config()
const express = require('express')
const schema = require('./schema/schema.js')
const { graphqlHTTP } = require('express-graphql')

const port = process.env.PORT || 5000
const app = express() //initiliaze express

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV == 'development',
  })
)

app.listen(port, console.log(`Server running on port ${port}`))
