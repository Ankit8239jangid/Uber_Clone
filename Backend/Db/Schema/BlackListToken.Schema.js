import mongoose from 'mongoose';


const BlackListTokenSchema = new mongoose.Schema({
    
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 24 * 60 * 60 // Token will be automatically deleted after 24 hours
    }
});

const BlackListToken = mongoose.model('BlackListToken', BlackListTokenSchema);

export default BlackListToken;
