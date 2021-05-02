import express from 'express'
import cors from 'cors'
import restaurats from './api/restaurants.route'

const app  = express()

app.use(cors())
app.use(express.json())

//buena practica poner el inicio en api 
// luego la version 
// luego la app en el nombre 
app.use('/api/V1/restaurats', restaurats)
app.use('*', (req, res)=> res.status(404).json({error: "not foudn"}))

export default app