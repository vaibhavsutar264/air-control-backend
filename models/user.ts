const mongooseData = require("mongoose");

const userSchema = new mongooseData.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: false},
    profilePicture: {type: String, required: false},
    id: {type: String}
})

module.exports = mongooseData.model("User", userSchema)
