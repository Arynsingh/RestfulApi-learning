import "dotenv/config"
import app from "./src/app.js"
import connectDB from "./src/common/config/db.js"


const start = async ()=>{
    //connect to database
    await connectDB()
    app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT} in ${process.env.NODE_ENV} mode`)
    })
}

start().catch((err)=>{
    console.error("Failed to start server",err)
    process.exit(1) // when we want to gracefully stop the server
})

const PORT = process.env.PORT || 5000 //now port will be automaticall taken from .env so we can use it without changing code and for other variable as well
