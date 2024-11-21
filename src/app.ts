import express, { Express } from 'express'
import statRoute from '../routes/stats'

export const app: Express = express()

app.use(statRoute)
