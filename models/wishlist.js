const mongoose = require('mongoose');
require('./User')
require('./Product')
const Schema = mongoose.Schema(
    {
        user:{
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        },
        product: 
            {
                type: mongoose.Types.ObjectId,
                ref: 'Product',
                required: true
            }
        
    },{
        timestamps: true,
    }
);

const model=mongoose.models.Wishlist || mongoose.model('Wishlist', Schema);
export default model;
