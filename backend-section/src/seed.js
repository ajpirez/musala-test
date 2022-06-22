'use strict';
let mongoose = require('mongoose');
const {User, Rol} = require("../src/models/index");
const container = require("../src/startup/container");

const {MONGO_URI} = container.resolve("config");


const options = {
    useMongoClient: true,
    keepAlive: 1,
    connectTimeoutMS: 30000,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 5000,
    useNewUrlParser: true
}
mongoose.connect(MONGO_URI, options, function (
    error
) {
    if (error) {
        console.log("mongoerror", error);
    } else {
        console.log("connected");
    }

});


let user = [
    new User({
        name: 'Admin',
        username: 'admin',
        password: 'admin',
    }),
    new User({
        name: 'Cliente',
        username: 'cliente',
        password: '123456',
    })
]

let rol = [
    {
        type: 'Admin',
    },
    {
        type: 'Client',
    }
]
User.deleteMany({}, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('delete all old users');
    }
})
Rol.deleteMany({}, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('delete all old rols');
    }
})
User.create(user)
    .then(async user => {
        for (let i = 0; i < rol.length; i++) {
            let rolCreated = await Rol.create({...rol[i], UserId: user[i]._id})
            await User.findByIdAndUpdate(user[i]._id, {$push: {rols: rolCreated}})
        }
        exit()
    })

function exit() {
    console.log("new users and rols add")
    mongoose.disconnect();
}


