import expressApp from './expressApp'
const PORT = process.env.PORT || 8000

export const Startserver = async()=>{
    expressApp.listen(PORT,()=>{
        console.log('app running at port : ',PORT);
        
    })
}

process.on("uncaughtException",async(err)=>{
    console.log(err);
    process.exit(1)
    
})

Startserver().then(()=>{
    console.log("server is up....");
    
})
