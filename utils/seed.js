const mongoose = require('mongoose');
const connection = require('../config/connection');
const { addNewFriend } = require('../controllers/friendController');
const { User, Thought, Reaction } = require('../models');

connection. on('error', (error) => error);

connection.once("open", async () =>{
    console.log("connection made to sMediaDB");

    await User.deleteMany({});

    await Thought.deleteMany({});

    let reactions;

    async function seedReaction() {
        console.log("seeding yo");
         try {
    reactions = [
       {
            body: "API's are no fun"
            username: "Cstedman",
        },
        ];
        console.log("reactions seeded yo!")

    } catch (error) {
        console.log("they didn't seed yo");
        console.log(error);
    }
}

await seedReaction();

let thoughts;

async function seedThought() {
    console.log("seeding thought yo");
    try {
        thoughts = await Thought.insertMany([
            {
                thoughtText: "This is a thought",
                username: "Cstedman",
                reactions: [reactions[0]],
            },
        ]);
        console.log("thoughts seeded yo");
    } catch(error) {
        console.log('no thoughts seed yo');
        console.log(error);
    }
}

await seedThought();

let users;
let friends;

async function seedUser() {
    console.log("seeding user yo");
    try {
        users = await User.insertMany([
            {
                username: "Cstedman",
                email: "cstedman@gmail.com",
                thoughts: [thoughts[0]],
            },
        ]);
        console.log("Users have seeds yo");
    } catch(error) {
        console.log('no thoughts seed yo');
        console.log(error);
    }
}

await seedUser();

process.exit();

});