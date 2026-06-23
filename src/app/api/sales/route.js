import { connectDB } from "@/lib/mongodb";

import Sale from "@/models/Sale";

export async function POST(request) {

  try {

    await connectDB();

    const body = await request.json();

    const sale = await Sale.create({

      customer: body.customer,

      product: body.product,

      quantity: body.quantity,

      totalAmount: body.totalAmount

    });

    return Response.json({

      success: true,

      sale

    });

  }

  catch (error) {

    return Response.json({

      success: false,

      message: error.message

    });

  }

}



export async function GET() {

  try {

    await connectDB();

    const sales = await Sale.find()

      .populate("customer")

      .populate("product");

    return Response.json({

      success: true,

      sales

    });

  }

  catch (error) {

    return Response.json({

      success: false,

      message: error.message

    });

  }

}