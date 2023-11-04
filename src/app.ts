import 'dotenv/config'
import express from 'express'
import config from './config'
import routes from './routes'
import './db'

const app = express()

config(app)

app.use('/api', routes)

export default app
