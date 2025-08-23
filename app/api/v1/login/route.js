import { NextResponse } from "next/server";

const VALID_EMAIL = "manusha@gmail.com";
const VALID_PASSWORD = "12345678";

export const POST = async (request) => {
  try {
    const { email, password } = await request.json();
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      return NextResponse.json(
        {
          success: true,
          message: "Login Successfully!",
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Password or Email",
        },
        {
          status: 401,
        }
      );
    }
  } catch (error) {
    console.log("An login API error", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred during login",
      },
      {
        status: 500,
      }
    );
  }
};
export const GET = async () =>{
    return NextResponse.json(
        {
            success : true,
            message : "Login Successfully!"
        },
        {
            status : 200
        }
    )

}
