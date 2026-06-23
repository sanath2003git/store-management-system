import mongoose from "mongoose";

const SaleSchema = new mongoose.Schema({

  customer: {

    type: mongoose.Schema.Types.ObjectId,

    ref: "Customer",

    required: true

  },

  product: {

    type: mongoose.Schema.Types.ObjectId,

    ref: "Product",

    required: true

  },

  quantity: {

    type: Number,

    required: true

  },

  totalAmount: {

    type: Number,

    required: true

  },

  saleDate: {

    type: Date,

    default: Date.now

  }

});

export default mongoose.models.Sale ||
mongoose.model("Sale", SaleSchema);