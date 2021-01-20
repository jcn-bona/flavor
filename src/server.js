import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

app.use((req, res) => {
    res.status(404).json({error : 'Route not found!'})
})

const server = app.listen(port, () => {
    console.log(`Live at ${server.address().port}`)
})

export default app