import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    images: [{ type: String }],
    features: [{
      name: { type: String },
      value: { type: String }
    }],
    ratings: [{
      score: { type: Number, min: 1, max: 5 },
      comment: { type: String }
    }],
    createdAt: { type: Date, default: Date.now }
  });

  const Product = mongoose.model('Product', ProductSchema);

  export default Product;
