const exp = require('express');
const app = exp();
const mclient = require('mongodb').MongoClient;


const path = require('path');
app.use(exp.static(path.join(__dirname,'./build')))

const DBurl = 'mongodb+srv://sumii:sumii@wd.fvcrv0f.mongodb.net/?retryWrites=true&w=majority'


mclient.connect(DBurl)
.then((client)=>
{
    let dbObj = client.db("podcastdb")
    let userCollection = dbObj.collection("users")
    let podcastCollection = dbObj.collection("podcasts")
    app.set('userCollectionObj', userCollection)
    app.set('podcastCollectionObj', podcastCollection)
    console.log('Connected to DB')})
.catch(err => console.log('Error in DB connection'))

const userApp = require('./APIS/userApi')
app.use('/user-api', userApp)

app.use((req, res, next) => {
    res.send({ message: ` ${req.url} Route not found` });
});

app.use((err, req, res, next) => {
    res.send({ message: `${err.message}`});
});

app.listen(4000, () => {
    console.log('Server running at port 4000');
});