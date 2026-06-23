import { connectDB } from "@/lib/mongodb";
import Sale from "@/models/Sale";

export async function GET(request, { params }) {

  try {

    await connectDB();

    const { id } = await params;

    const sale = await Sale.findById(id)
      .populate("customer")
      .populate("product");

    if (!sale) {

      return Response.json({

        success: false,

        message: "Sale not found"

      });

    }

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

export async function PUT(request, { params }) {

  try {

    await connectDB();

    const { id } = await params;

    const body = await request.json();

    const sale = await Sale.findByIdAndUpdate(

      id,

      {

        customer: body.customer,

        product: body.product,

        quantity: body.quantity,

        totalAmount: body.totalAmount

      },

      {

        returnDocument: "after"

      }

    )
      .populate("customer")
      .populate("product");

    if (!sale) {

      return Response.json({

        success: false,

        message: "Sale not found"

      });

    }

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

export async function DELETE(request, { params }) {

  try {

    await connectDB();

    const { id } = await params;

    const sale = await Sale.findByIdAndDelete(id);

    if (!sale) {

      return Response.json({

        success: false,

        message: "Sale not found"

      });

    }

    return Response.json({

      success: true,

      message: "Sale Deleted"

    });

  }

  catch (error) {

    return Response.json({

      success: false,

      message: error.message

    });

  }

}