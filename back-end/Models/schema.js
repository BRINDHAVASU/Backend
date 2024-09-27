import mongoose from "mongoose";

const productSchema = mongoose.Schema({
 productName:{
    type:String,
    requied:true
 },
productPrice:{
type:String,
required:true
 },
 productImage:{
    type:String,
    required:true
     },
     productDescription:{
        type:String,
        required:true
         },
       
})
const products =  mongoose.model("products",productSchema)
       export default products;