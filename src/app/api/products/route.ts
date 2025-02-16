import { NextRequest, NextResponse } from 'next/server';
import {productsData} from "@/app/api/products/productsData";

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(productsData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}