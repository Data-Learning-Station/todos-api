import express from 'express'
import cors from 'cors'

import accountRoutes from './routes/account.routes'
import todoRoutes from './routes/todo.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', accountRoutes)
app.use('/api/v1', todoRoutes)

const port = process.env.PORT || 8080


app.listen(port, () => {
    console.log('Server listen on port: ' + port)
})