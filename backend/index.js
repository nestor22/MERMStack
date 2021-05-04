const app = require('./server');
const mongodb = require('mongodb') 
const dotenv = require('dotenv')


dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        poolSize: 50, 
        
        useNewUrlParser: true,
        useUnifiedTopology: true
    }    
) 
.catch(err=>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    app.listen(port,()=>{
        console.log(`listening on ort ${port}`)
    })
})
