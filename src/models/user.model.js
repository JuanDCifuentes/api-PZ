import  { Schema, model} from "mongoose";

const userSchema = Schema({
    _idUser: { 
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    UserName: { 
        type: String,
        required: true
    },
    name: {
        firstName:{
            type: String,
            lowercase: true
        },
        lastName: {
            type: String,
            lowercase: true
        }
    },
    email: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    infoUser: {
        profession: {
            type: String,
            default: 'null'
        },
        code: Number,
        carrera: String
    },
    linkendProjects:[{
        idProject: {
            type: String
        }
    }]


},{
    virtuals: {
        fullName:{
            get(){
                return this.name.firstName + ' ' + this.name.lastName
            }
        }
    },
    id: false
});

export default model('user', userSchema);