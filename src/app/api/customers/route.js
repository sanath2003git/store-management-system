import { connectDB } from "@/lib/mongodb";

import Customer from "@/models/Customer";


// GET ALL CUSTOMERS

export async function GET() {

  try {

    await connectDB();

    const customers = await Customer.find();

    return Response.json({

      success: true,

      customers

    });

  }

  catch (error) {

    return Response.json({

      success: false,

      message: error.message

    });

  }

}



// CREATE CUSTOMER

export async function POST(request) {

  try {

    await connectDB();

    const body = await request.json();

    const customer = await Customer.create({

      name: body.name,

      email: body.email,

      phone: body.phone,

      address: body.address

    });

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