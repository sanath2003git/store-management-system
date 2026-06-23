import { connectDB } from "@/lib/mongodb";
import Customer from "@/models/Customer";


// GET SINGLE CUSTOMER

export async function GET(request, { params }) {

  try {

    await connectDB();

    const { id } = await params;

    const customer = await Customer.findById(id);

    if (!customer) {

      return Response.json({

        success: false,

        message: "Customer not found"

      });

    }

    return Response.json({

      success: true,

      customer

    });

  }

  catch (error) {

    return Response.json({

      success: false,

      message: error.message

    });

  }

}



// UPDATE CUSTOMER

export async function PUT(request, { params }) {

  try {

    await connectDB();

    const { id } = await params;

    const body = await request.json();

    const customer = await Customer.findByIdAndUpdate(

      id,

      {

        name: body.name,

        email: body.email,

        phone: body.phone,

        address: body.address

      },

      {

        returnDocument: "after"

      }

    );

    if (!customer) {

      return Response.json({

        success: false,

        message: "Customer not found"

      });

    }

    return Response.json({

      success: true,

      customer

    });

  }

  catch (error) {

    return Response.json({

      success: false,

      message: error.message

    });

  }

}



// DELETE CUSTOMER

export async function DELETE(request, { params }) {

  try {

    await connectDB();

    const { id } = await params;

    const customer = await Customer.findByIdAndDelete(id);

    if (!customer) {

      return Response.json({

        success: false,

        message: "Customer not found"

      });

    }

    return Response.json({

      success: true,

      message: "Customer Deleted"

    });

  }

  catch (error) {

    return Response.json({

      success: false,

      message: error.message

    });

  }

}