import { Schema, model } from "mongoose";


const UserSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

UserSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const User = model('User', UserSchema)

export default User