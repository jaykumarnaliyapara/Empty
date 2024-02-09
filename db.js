import  {useAuth0}  from "@auth0/auth0-react";
const mongoose = require('mongoose');
const mongURI = 'mongodb://127.0.0.1:27017/healthystore'



const mongDB = async () => {
    return (
        await mongoose.connect(mongURI, { useNewUrlParser: true }, async (err, rslt) => {
        if (err)
            console.log("--> COULD NOT CONNECT WITH BACKEND!!")
        else if (rslt)
            console.log("--> CONNECTED WITH BACKEND!!")
    }))}

export default mongDB();