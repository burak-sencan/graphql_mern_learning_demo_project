require('dotenv').config()
const colors = require('colors')
const cors = require('cors')
const express = require('express')
const schema = require('./schema/schema.js')
const { graphqlHTTP } = require('express-graphql')
const connectDB = require('./config/db.js')
const port = process.env.PORT || 5000
const app = express() //initiliaze express

//Connect MongooseDB
connectDB()
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV == 'development',
  })
)

app.listen(port, console.log(`Server running on port ${port}`.cyan.underline.bold))
