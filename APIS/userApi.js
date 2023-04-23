const exp = require('express');
const userApp = exp.Router();
const expAsycHandler = require('express-async-handler');
userApp.use(exp.json());

userApp.post('/create-user', expAsycHandler( async (req, res) => {
    let userCollectionObj = req.app.get('userCollection');
    let newUser = req.body;
    await userCollectionObj.insertOne(newUser);
    res.send('User created');
}));

module.exports = userApp;