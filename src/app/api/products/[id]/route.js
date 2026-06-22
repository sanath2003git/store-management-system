import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";


// GET SINGLE PRODUCT

export async function GET(request, { params }) {

  try {

    await connectDB();

    const { id } = await params;

    console.log(id);

    const product = await Product.findById(id);

    return Response.json({

      success: true,

      product

    });

  }

  catch (error) {

    return Response.json({

      success: false,

      message: error.message

    });

  }

}


// UPDATE PRODUCT

export async function PUT(request, { params }) {

  try {

    await connectDB();

    const { id } = await params;

    const body = await request.json();

    const product = await Product.findByIdAndUpdate(

      id,

      {

        name: body.name,

        price: body.price,

        stock: body.stock

      },

      {

        new: true

      }

    );

    if (!product) {

      return Response.json({

        success: false,

        message: "Product not found"

      });

    }

    return Response.json({

      success: true,

      product

    });

  }

  catch (error) {

    return Response.json({

      success: false,

      message: error.message

    });

  }

}


// DELETE PRODUCT

export async function DELETE(request, { params }) {

  try {

    await connectDB();

    const { id } = await params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {

      return Response.json({

        success: false,

        message: "Product not found"

      });

    }

    return Response.json({

      success: true,

      message: "Product Deleted"

    });

  }

  catch (error) {

    return Response.json({

      success: false,

      message: error.message

    });

  }

}