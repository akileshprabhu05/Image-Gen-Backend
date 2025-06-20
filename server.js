import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoues.js'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())
await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.use(
  cors({
    origin: ["https://image-generator-frontend-alpha.vercel.app"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, 
  })
);

app.get('/', (req, res) => {
    res.send('API Working')
})

app.listen(PORT, ()=>{
    console.log('Server is Running on the Port ' + PORT);
})
