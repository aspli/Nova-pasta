const express = require('express')
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')

dotenv.config()

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true },
  () => {
    console.log('Connected to MongoDB')
  }
)

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use(cors())

app.use('/api/user', userRoute)
app.use('/api/authRoute', authRoute)
app.use('/api/postRoute', postRoute)

module.exports = app
