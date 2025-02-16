import { NextRequest, NextResponse } from 'next/server';
import {productsData} from "@/app/api/products/productsData";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }>
  })
{
  const id = (await params).id

  return NextResponse.json(productsData.filter(product => product.id === +id), { status: 200 })
  // try {
  //   return NextResponse.json(productsData, { status: 200 });
  // } catch (error) {
  //   return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  // }
}