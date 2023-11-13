import 'dotenv/config'
import express from 'express'
import config from './config'
import routes from './routes'
import './db'
import errorHandling from './error-handling'

const app = express()

config(app)

app.use('/api', routes)

errorHandling(app)

export default app
