import { connectDB } from "@/lib/mongodb";

import Product from "@/models/Product";


// GET ALL PRODUCTS

export async function GET() {

  try {

    await connectDB();

    const products =

      await Product.find();

    return Response.json({

      success:true,

      products

    });

  }

  catch(error){

    return Response.json({

      success:false,

      message:error.message

    });

  }

}


// CREATE PRODUCT

export async function POST(request){

  try{

    await connectDB();

    const body =

      await request.json();


    const product =

      await Product.create({

        name:body.name,

        price:body.price,

        stock:body.stock

      });


    return Response.json({

      success:true,

      product

    });

  }

  catch(error){

    return Response.json({

      success:false,

      message:error.message

    });

  }

}