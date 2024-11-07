import client from "@/lib/db";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

// export async function POST(request: Request) {
//   const data = await request.json();
//   return Response.json({ message: "Product successfully added", data });
// }

// export async function POST(request: Request) {
//   try {
//     await client.connect();
//     const data = await request.json();
//     const newProduct = new Product(data);
//     await newProduct.save();
//     return Response.json({
//       message: "Product successfully added",
//       data: newProduct,
//     });
//   } catch (error) {
//     console.log("Error adding product:", error);
//     return Response.json(
//       { message: "Failed to add product", error },
//       { status: 500 }
//     );
//   }
// }

export async function POST(request: Request) {
  await mongooseConnect();
  const { title, description, price } = await request.json();
  const productDoc = await Product.create({ title, description, price });
  return Response.json({ message: "Product successfully added", productDoc });
}
